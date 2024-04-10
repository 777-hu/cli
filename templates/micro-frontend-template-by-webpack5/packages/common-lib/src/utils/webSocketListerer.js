/*
 * @Description: 
 * @Author: menglong.du
 * @Date: 2022-07-18 14:31:42
 * @LastEditTime: 2022-07-21 10:03:51
 * @LastEditors: menglong.du
 */
import Config from 'Config';
import Stomp from 'stompjs';

class TaimiStomp {
	constructor() {
		this.stompClient = null;
		this.subscriptions = {};
		this.timer = null;
		this.currentRegistrations = [];
		this.register = this.register.bind(this);
		this.unregister = this.unregister.bind(this);
		this._registerWrapper = this._registerWrapper.bind(this);
		this._subscribe = this._subscribe.bind(this);
	}

	register(registrations) {
		this.currentRegistrations = registrations;
		if (this.stompClient) {
			this._subscribe();
			return;
		}
		const wsUrl = this.getWsUri();
		this.stompClient = Stomp.client(wsUrl);
		this.stompClient.heartbeat.outgoing = 5000;
		this.stompClient.heartbeat.incoming = 5000;
		this.stompClient.debug = null;
		this.stompClient.connect({},
			(frame) => {
				this._subscribe();
			},
			(error) => {
				if(this.timer) {
					clearTimeout(this.timer);
				}
				console.log(`STOMP: ${error}`);
				this.timer = setTimeout(this._registerWrapper(), 5000);
				console.log('STOMP: Reconnecting in 5 seconds');
			});
	}

	unregister() {
		if (this.subscriptions) {
			Object.keys(this.subscriptions).forEach((key) => {
				this.subscriptions[key].unsubscribe();
			});
			this.subscriptions = {};
		}
	}

	_registerWrapper() {
		return function () {
			this.stompClient = null;
			this.subscriptions = {};
			this.register(this.currentRegistrations);
		}.bind(this);
	}

	_subscribe() {
		try {
			if(this.stompClient.ws.readyState === this.stompClient.ws.CONNECTING) {
                throw Error("The state is CONNECTING, need to retry");
            }
            if(this.stompClient.ws.readyState === this.stompClient.ws.CLOSING || this.stompClient.ws.readyState === this.stompClient.ws.CLOSED) {
                throw Error("The state is CLOSING or CLOSED, need to retry");
            }
			this.currentRegistrations.forEach((registration) => {
					this.stompClient.subscribe(registration.route, registration.callback);
				},
			);
		} catch (error) {
			console.log(error);
		}
	}

	getWsUri() {
		const loc = window.location;
		let ws_protocol = '';
		if (loc.protocol === 'https:') {
			ws_protocol = 'wss:';
		} else {
			ws_protocol = 'ws:';
		}
		if(Config.serverUrl === "/") {
			return `${ws_protocol}//${loc.host}/local-manage/register`;
		}
		return `${Config.websocket.replace(loc.protocol, ws_protocol)}local-manage/register`;
	}
}

export const stompClient = new TaimiStomp();