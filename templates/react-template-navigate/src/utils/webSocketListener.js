import Stomp from 'stompjs';

class TaimiStomp{
    constructor(){
        this.stompClient = null;
        this.subscriptions = {};
        this.currentRegistrations = [];
        this.timer = null;
        this.register = this.register.bind(this);
        this.unregister = this.unregister.bind(this);
        this._registerWrapper = this._registerWrapper.bind(this);
        this._subscribe = this._subscribe.bind(this);
    }

    register(registrations) {
        this.currentRegistrations = registrations;
        if(this.stompClient){
            this._subscribe();
            return;
        }
        const wsUrl = this.getWsUri();
        this.stompClient = Stomp.client(wsUrl);
        this.stompClient.heartbeat.outgoing = 5000;
        this.stompClient.heartbeat.incoming = 5000;
        this.stompClient.connect({},
            function(frame){
                this._subscribe();
            }.bind(this),
            function(error){
                if(this.timer) {
                    clearTimeout(this.timer);
                }
                console.log('STOMP: ' + error);
                this.timer = setTimeout(this._registerWrapper(), 5000);
                console.log('STOMP: Reconnecting in 5 seconds');
            }.bind(this)
        )
    }

    unregister() {
        if(this.subscriptions) {
            Object.keys(this.subscriptions).forEach((key) => {
                this.subscriptions[key].unsubscribe();
            })
            this.subscriptions = {};
        }
    }

    _registerWrapper(){
        return function(){
            this.stompClient = null;
            this.subscriptions = {};
            this.register(this.currentRegistrations);
        }.bind(this)
    }

    _subscribe(){
        try {
            if(this.stompClient.ws.readyState === this.stompClient.ws.CONNECTING) {
                throw Error("The state is CONNECTING, need to retry");
            }
            if(this.stompClient.ws.readyState === this.stompClient.ws.CLOSING || this.stompClient.ws.readyState === this.stompClient.ws.CLOSED) {
                throw Error("The state is CLOSING or CLOSED, need to retry");
            }
            this.currentRegistrations.forEach(function (registration) {
                let idObject = {};
                if(!('id' in registration)){
                    throw 'No subscribe id in registration!';
                }
                idObject.id = registration.id;
                if(!(registration.id in this.subscriptions)){
                    this.subscriptions[registration.id] = this.stompClient.subscribe(registration.route, registration.callback, idObject);
                }            
            }.bind(this));           
        } catch(error) {
            console.log(error);
        }

    }

    getWsUri(){
        const loc = window.location;

        return `ws://${loc.host}/xxx/register`;
    }
}

export let stompClient = new TaimiStomp();