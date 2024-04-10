/*
 * @Description:
 * @Author: bingjing.wang
 * @Date: 2020-04-29 10:13:47
 * @LastEditTime: 2022-07-15 16:36:14
 * @LastEditors: menglong.du
 */
import Cookies from 'js-cookie';
import * as types from '../constants/cookieConstants';

// 退出药柜登录
export function removeAllCabinet() {
	Cookies.remove(types.KEY_USER_ID);
	Cookies.remove(types.KEY_USERNAME);
	// Cookies.remove(types.KEY_DEVICE_TOKEN);
}

// 退出登录-pc端
export function removeAll() {
	Cookies.remove(types.KEY_USER_ID_PC);
	Cookies.remove(types.KEY_USERNAME_PC);
}

// 存储PC登录ID
export function setUserIdPC(id) {
	Cookies.set(types.KEY_USER_ID_PC, id, {expires: 365 * 100});
}

// 存储PC登录名字
export function setUsernamePC(username) {
	Cookies.set(types.KEY_USERNAME_PC, username, {expires: 365 * 100});
}

// 存储药柜登录id
export function setUserId(id) {
	Cookies.set(types.KEY_USER_ID, id, {expires: 365 * 100});
}

// 存储药柜登录名字
export function setUsername(username) {
	Cookies.set(types.KEY_USERNAME, username, {expires: 365 * 100});
}

export function setToken(token) {
	Cookies.set(types.KEY_TOKEN, token, {expires: 365 * 100});
}

// 存储药柜deviceId
export function setDeviceToken(token) {
	Cookies.set(types.KEY_DEVICE_TOKEN, token, {expires: 365 * 100});
}

// 存储PC登录ID
export function getUserIdPC(id) {
	return Cookies.get(types.KEY_USER_ID_PC) || '';
}

// 存储PC登录名字
export function getUsernamePC() {
	return Cookies.get(types.KEY_USERNAME_PC) || '';
}

// 获取药柜登录id
export function getUserId() {
	return Cookies.get(types.KEY_USER_ID) || '';
}

// 获取药柜登录姓名
export function getUsername() {
	return Cookies.get(types.KEY_USERNAME) || '';
}

export function getToken() {
	return Cookies.get(types.KEY_TOKEN) || '';
}

// 获取药柜deviceId
export function getDeviceToken() {
	return Cookies.get(types.KEY_DEVICE_TOKEN) || '';
}

// 移除药柜deviceId
export function removeDeviceToken() {
	Cookies.remove(types.KEY_DEVICE_TOKEN);
}

// 登录权限验证
export function isAuthenticated() {
	try {
		const userId = getUserIdPC();
		if (!userId) {
			console.log(`current userId:${userId}`);
			return false;
		}
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

export function isAuthenticatedDevice() {
	try {
		const userId = getUserId();
		if (!userId) {
			console.log(`current userId:${userId}`);
			return false;
		}
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
