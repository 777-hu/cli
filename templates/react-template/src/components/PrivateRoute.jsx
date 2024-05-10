import { Navigate } from 'react-router-dom';
import { getShelfId, getUserRoles, getWarehouseId, isAuthenticated } from '../utils/session';
import { App } from 'antd';

const PrivateRoute = (props) => {
	const { message } = App.useApp()
	const { roles, comp } = props
	let userRoles = getUserRoles() !== '' ? JSON.parse(getUserRoles()) : []
	let shelfId = getShelfId();
  	let warehouseId = getWarehouseId();

	// if(!shelfId || !warehouseId) {
	// 	return <Navigate to="/setting" />;
	// }

	// if (!isAuthenticated()) {
	// 	// 如果未经认证，则重定向到登录页面
	// 	return <Navigate to="/login" />;
	// }

	// if ((roles && !roles.some((role) => userRoles.includes(role)) )) {
	// 	// 如果角色不匹配，则重定向到登录页面
	// 	message.error('暂无权限，请联系管理员');
	// 	return <Navigate to="/login" />;
	// }
	
	return comp;
};

export default PrivateRoute;