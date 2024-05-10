import axios from 'axios'
import { getToken } from './session'

const defaultHeader = {
	'Content-Type': 'application/json',
	'TMI_WAREHOUSE_MANAGE_TOKEN': `${getToken()}`, 
}
// reject 全局捕获
window.addEventListener('unhandledrejection', function (event) {
	console.log(event)
})

const axiosInstance = axios.create({
	baseURL: '/api/',
	timeout: 1000 * 300,
	headers: defaultHeader,
})

axiosInstance.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

axiosInstance.interceptors.response.use(
	(response) => {
		// console.log(response,'res')
		if (response.status === 0 || response.status === 200) return response.data
		return Promise.reject(response.data)
	},
	(error) => {
		console.log(error,'err')
		return Promise.reject(error.response.data.message)
	}
)

export function getApi(url, params, header = {}) {
	return axiosInstance.get(url, {
		headers: { ...defaultHeader, ...header, TMI_WAREHOUSE_MANAGE_TOKEN: getToken() },
		params
	})
}

export function postApi(url, data = {}, header = {}) {
	return axiosInstance.post(url,data, {
		headers: { ...defaultHeader, ...header, TMI_WAREHOUSE_MANAGE_TOKEN: getToken() },
	})
}

export function putApi(url, data = {}, header = {}) {
	return axiosInstance.put(url, data, {
		headers: { ...defaultHeader, ...header, TMI_WAREHOUSE_MANAGE_TOKEN: getToken() },
	})
}

export function deleteApi(url, data = {}, header = {}) {
	return axiosInstance.delete(url, data, {
		headers: { ...defaultHeader, ...header, TMI_WAREHOUSE_MANAGE_TOKEN: getToken() },
	})
}