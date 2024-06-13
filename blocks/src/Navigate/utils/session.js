import Cookies from 'js-cookie';
import * as types from '../constants/cookieConstants';

export function removeAll() {
	Cookies.remove(types.KEY_USER_ID);
	Cookies.remove(types.KEY_USERNAME);
	// Cookies.remove(types.KEY_DEVICE_TOKEN);
}

// 存储登录ID
export function setUserId(id) {
	Cookies.set(types.KEY_USER_ID, id, {expires: 365 * 100});
}

// 存储登录名字
export function setUsername(username) {
	Cookies.set(types.KEY_USERNAME, username, {expires: 365 * 100});
}

// 存储角色信息
export function setUserRoles(roles) {
	Cookies.set(types.KEY_USER_ROLE, roles, {expires: 365 * 100});
}


export function setToken(token) {
	Cookies.set(types.KEY_TOKEN, token, {expires: 365 * 100});
}



// 获取登录id
export function getUserId() {
	return Cookies.get(types.KEY_USER_ID) || '';
}

// 获取登录姓名
export function getUsername() {
	return Cookies.get(types.KEY_USERNAME) || '';
}

export function getToken() {
	return Cookies.get(types.KEY_TOKEN) || '';
}


// 登录权限验证
export function isAuthenticated() {
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
