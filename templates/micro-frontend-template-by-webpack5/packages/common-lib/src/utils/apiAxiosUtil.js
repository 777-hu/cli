/*
 * @Author: Wang Bingjing
 * @Date: 2021-08-17 10:31:19
 * @LastEditTime: 2021-08-17 10:31:19
 * @LastEditors: Wang Bingjing
 */
/*
 * @Author: Wang Bingjing
 * @Date: 2021-07-02 17:57:24
 * @LastEditTime: 2021-08-17 10:29:40
 * @LastEditors: Wang Bingjing
 */
import axios from 'axios'

const defaultHeaders = {
	'Content-Type': 'application/json',
	'Origin-Type': 'front',
	'token': '',
}

axios.interceptors.response.use(
	response => {
		// if (response.status >= 200 && response.status < 300 && response.config.responseType === 'blob') {
		// 	var blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
		// 	var downloadElement = document.createElement('a');
		// 	var href = window.URL.createObjectURL(blob);
		// 	downloadElement.href = href;
		// 	downloadElement.download = decodeURI(response.headers['content-disposition']?.match(
		// 		/filename\*=UTF-8''(.*)/
		// 	)[1]);
		// 	document.body.appendChild(downloadElement);
		// 	downloadElement.click();
		// 	document.body.removeChild(downloadElement);
		// 	window.URL.revokeObjectURL(href);
		// 	return response.data
		// } else {
		// 	return response.data
		// }
		return response.data
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	})


export function getApi(url, headers = defaultHeaders, responseType = 'json') {
	return axios({ method: 'get', url, headers, responseType })
}

export function postApi(url, data, headers = defaultHeaders) {
	return axios({
		method: 'post', url, headers, data,
	})
}

export function putApi(url, data, headers = defaultHeaders) {
	return axios({
		method: 'put', url, headers, data,
	})
}

export function deleteApi(url, data = {}, headers = defaultHeaders) {
	return axios({
		method: 'delete', url, headers, data,
	})
}
