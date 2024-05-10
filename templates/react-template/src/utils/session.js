import Cookies from 'js-cookie';
import * as types from '../constants/cookieConstants';

// 清除所有登录信息
export function removeAll() {
	Cookies.remove(types.KEY_USER_ID);
	Cookies.remove(types.KEY_USERNAME);
	Cookies.remove(types.KEY_USER_ROLE);
	Cookies.remove(types.KEY_TOKEN);
}

// 清除所有配置信息
export function removeSetting() {
	Cookies.remove(types.KEY_DEVICE_SHELFID);
	Cookies.remove(types.KEY_DEVICE_SHELFTYPE);
	Cookies.remove(types.KEY_DEVICE_WAREHOUSEID);
	Cookies.remove(types.KEY_DEVICE_WAREHOUSETYPE);
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

// 存储用户token
export function setToken(token) {
	Cookies.set(types.KEY_TOKEN, token, {expires: 365 * 100});
}

// 存储货架id
export function setShelfId(token) {
	Cookies.set(types.KEY_DEVICE_SHELFID, token, {expires: 30});
}

// 存储货架类型
export function setShelfType(token) {
	Cookies.set(types.KEY_DEVICE_SHELFTYPE, token, {expires: 30});
}

// 存储仓库id
export function setWarehouseId(token) {
	Cookies.set(types.KEY_DEVICE_WAREHOUSEID, token, {expires: 30});
}

// 存储仓库类型
export function setWarehouseType(token) {
	Cookies.set(types.KEY_DEVICE_WAREHOUSETYPE, token, {expires: 30});
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

// 获取货架id
export function getShelfId() {
	return Cookies.get(types.KEY_DEVICE_SHELFID) || '';
}

// 获取货架类型
export function getShelfType() {
	return Cookies.get(types.KEY_DEVICE_SHELFTYPE) || '';
}

// 获取仓库id
export function getWarehouseId() {
	return Cookies.get(types.KEY_DEVICE_WAREHOUSEID) || '';
}

// 获取仓库类型
export function getWarehouseType() {
	return Cookies.get(types.KEY_DEVICE_WAREHOUSETYPE) || '';
}

// 获取用户角色
export function getUserRoles() {
	return Cookies.get(types.KEY_USER_ROLE) || '';
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
