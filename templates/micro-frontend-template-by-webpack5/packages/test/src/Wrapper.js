import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useOutlet } from 'react-router-dom';
import Navigation from './containers/Navigation';
import Sidebar from './containers/Sidebar';
import InformationBar from './containers/InformationBar';
import { RouterProvider } from './common/RouterProvider';

import common from 'commonLib/common';
import { message } from 'antd';
const { commonConstants, session } = common;
const { SideBarConstants } = commonConstants;
const { sideBarData } = SideBarConstants;
const { getUserIdPC, isAuthenticated, removeAll } = session;
function Wrapper(props) {
	const { routes } = props;
	const outlet = useOutlet();
	const navigate = useNavigate()
	const location = useLocation();
	const userId = getUserIdPC();
	const [barName, setBarName] = useState('')
	const [selectedNavBar, setSelectedNavBar] = useState('');
	const [selectedSideBar, setSelectedSideBar] = useState({});
	const [currentSideBarData, setCurrentSideBarData] = useState([]);
	const pathname = location.pathname;

	const handleSideBarList = (data) => {
		let list = [];
		if (Array.isArray(data)) {
			list = data;
		} else if (data) {
			if (data) {
				Object.values(data).forEach((value) => {
					list = list.concat(value)
				})
			}
		}
		return list;
	}

	/**
	 * @description: 刷新页面后根据选中二级菜单 path 匹配选中一级菜单
	 * @param {*}
	 * @return {*}
	 */
	const matchCurrentNavBar = () => {
		if (pathname === '/') {
			return
		}
		let currentNavPath = '';
		if (Array.isArray(sideBarData)) {
			sideBarData.forEach((item) => {
				let sideBarList = handleSideBarList(item.children);
				sideBarList.forEach((value) => {
				if (pathname.includes(value.path)) {
					currentNavPath = item.path;
				}
				})
			})
		}
		onNavSelect(currentNavPath);
	}

	useEffect(() => {
		matchCurrentNavBar();
		if(pathname === '/') onNavSelect('/history')
	}, []);

	const redirectToLogin = () => {
		if (!isAuthenticated()) {
			navigate('/login')
			message.error('登录信息已过期，请重新登录！');
		}
	};

	useEffect(() => {
		redirectToLogin();
	}, [userId]);

	/**
	 * @description: 选中一级菜单后，默认选择二级菜单第一项。页面刷新后匹配当前选中二级菜单。
	 * @param {*} data
	 * @return {*}
	 */
	const handleDefaultSideBar = (data) => {
		let current = {};
		const list = handleSideBarList(data);
		if (pathname === '/' && Array.isArray(list) && list.length > 0) {
		current = list[0];
		} else {
		current = list.find((item) => {
			return pathname.includes(item.path);
		});
		if (!current) {
			current = list[0]
		}
		}
		navigate(current?.path);
		setSelectedSideBar(current);
	}

	/**
	 * @description: 选中一级菜单后，处理二级菜单数据
	 * @param {*} currentKey
	 * @return {*}
	 */
	const handleNavSelect = (currentKey) => {
		const currentSideBarDataData = sideBarData.find((item) => item.path === currentKey);
		if (Array.isArray(currentSideBarDataData?.children)) {
		const children = [];
		currentSideBarDataData.children.forEach((item) => {
			const route = routes.find((route) => route.path === item.path);
			children.push(route);
		})
		currentSideBarDataData.children = children;
		} else if (currentSideBarDataData?.children) {
		let children = {};
		Object.keys(currentSideBarDataData.children).forEach((key) => {
			const sideBarChildren = currentSideBarDataData.children[key];
			if (Array.isArray(sideBarChildren)) {
			sideBarChildren.forEach((item) => {
				const route = routes.find((route) => route.path === item.path);
				if (route !== -1) {
				if (Array.isArray(children[key])) {
					children[key].push(route)
				} else {
					children[key] = [route];
				}
				}
			})
			}

		});
		currentSideBarDataData.children = children;
		}
		handleDefaultSideBar(currentSideBarDataData?.children);
		setCurrentSideBarData(currentSideBarDataData);
	}

	/**
	 * @description: 选中一级菜单
	 * @param {*} selectedKey
	 * @return {*}
	 */
	const onNavSelect = (key, value) => {
		const selectedKey = key || pathname
		// const barName = sideBarData.find(item => item.path === selectedKey)
		// 12-30fix 一级路由下的增删改查页面匹配不到barname 改为includes匹配
		const barName = sideBarData.find(item => selectedKey.includes(item.path))
		setBarName(barName?.name)
		setSelectedNavBar(selectedKey);
		handleNavSelect(selectedKey);
	}

	/**
	 * @description: 选中二级菜单
	 * @param {*} selectedKey
	 * @param {*} item
	 * @return {*}
	 */
	const onSideBarSelect = (item) => {
		const { value, label } = item.item.props;
		navigate(value);
		setSelectedSideBar({
			path: value,
			name: label,
		});
	}

	const logout = () => {
		removeAll();
		navigate('/login');
	};
	return (
		<React.Fragment>
		<Navigation
			sideBarData={sideBarData}
			onNavSelect={onNavSelect}
			selectedNavBar={selectedNavBar}
			{...props}
		/>
		{
			currentSideBarData?.children
			&& (Array.isArray(currentSideBarData.children) || Object.keys(currentSideBarData.children).length > 0) ? (
			<div className="side-bar-wrapper">
				<p className="side-bar-title">{currentSideBarData.name}</p>
				<Sidebar
					onSideBarSelect={onSideBarSelect}
					selectedSideBar={selectedSideBar}
					currentSideBarData={currentSideBarData}
				/>
			</div>
			) : null
		}
		<div className="content-wrapper">
			<RouterProvider selectedSideBar={selectedSideBar} barName={barName}>
			<InformationBar logout={logout} />
			<div className="content">
				{outlet}
			</div>
			</RouterProvider>
		</div>
		</React.Fragment>
	)
}

export default Wrapper;