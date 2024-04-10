/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2020-04-27 10:15:07
 * @LastEditTime: 2022-06-23 10:53:41
 * @LastEditors: menglong.du
 */
import { defaultHeaders } from './DefaultHeaders';

export function handleErrors(response) {
	if (!response.ok) {
		// 响应500 获取返回值
		if(response.status === 500) {
			return new Promise((resolve,reject)=>{
				try {
					response.json().then(res=>{
						resolve(res)
					})
				} catch (error) {
					reject(response.statusText)
				}
			})
		}
		throw Error(response.statusText);
	}
	const contentType = response.headers.get('content-type');
	if (contentType && contentType.indexOf('application/json') !== -1) {
		return response.json();
	} if (contentType && contentType.indexOf('image/png') !== -1) {
		return response;
	} if (contentType && contentType.indexOf('application/octet-stream') !== -1) {
		return response.blob();
	}
	return null;
}

export function handleRetval(response) {
	if (response.message === 'SUCCESS' || response.status === 200) {
		return response;
	} if (response.error) {
		return response;
	}
	// todo: response.result which throwed need more beautify.
	if (response.result || response.message) {
		throw Error(response.result || response.message);
	} else {
		throw Error('Unknown error from server.');
	}
}
let abortControlMap = {}
export function getApi(url, headers = defaultHeaders(),hasAbortControl) {
	let control,signal
	if(hasAbortControl) {
		control = new AbortController()
		signal = control.signal
		let key = url.match(/[^?]*/)?.[0]?.match(/(?<=\/)[^/]*$/)?.[0]?.toLowerCase()
		if(abortControlMap[key]) {
			abortControlMap[key].forEach(item => item.abort())
			abortControlMap[key].length = 0
			abortControlMap[key].push(control)
		}else {
			abortControlMap[key] = [control]
		}
	}
	const request = new Request(url, {
		method: 'GET',
		headers,
		...hasAbortControl&&{signal}
	})
	return fetch(request)
		.then(handleErrors);
}

export function postApi(url, body, headers = defaultHeaders()) {
	const request = new Request(url, {
		method: 'POST',
		headers,
		body,
	});
	return fetch(request)
		.then(handleErrors);
}

export function putApi(url, body='', headers = defaultHeaders()) {
	const request = new Request(url, {
		method: 'PUT',
		headers,
		body,
	});
	return fetch(request)
		.then(handleErrors);
}

export function deleteApi(url, body, headers = defaultHeaders()) {
	const request = new Request(url, {
		method: 'DELETE',
		body,
		headers,
	});
	return fetch(request)
		.then(handleErrors)
		//.then(handleRetval);
}


