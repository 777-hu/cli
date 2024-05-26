import React, { useState, useEffect } from 'react';
import FirstNavigation from './pages/wrapper/FirstNavigation'
import SecondaryNavigation from './pages/wrapper/SecondaryNavigation'
import Header from './pages/wrapper/Header';
import SideBarConstants from './constants/SideBarConstants'
import './css/wrapper.scss';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
import { getUserId, getUsername, isAuthenticated, removeAll } from './utils/session';
import { App } from 'antd';

const { sideBarData } = SideBarConstants

const Wrapper = (props) => {
	const outlet = useOutlet();
	const userId = getUserId();
	const userName = getUsername();
	const location = useLocation();
	const navigate = useNavigate();
	const { message } = App.useApp()
	const [barName, setBarName] = useState('')
	// 选中的一级导航
	const [selectedNavBar, setSelectedNavBar] = useState('');
	// 选中的二级导航
	const [selectedSecondNavBar, setSelectedSecondNavBar] = useState({});
	// 一级导航下二级导航是否有数据
	const [currentSideBarData, setCurrentSideBarData] = useState([]);
	const pathname = location.pathname;

	useEffect(() => {
		matchCurrentNavBar();
	}, [])

	useEffect(() => {
		// redirectToLogin();
	}, [userId, pathname]);

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
				if(sideBarList.length === 0) {
					if(pathname.includes(item.path)) {
						currentNavPath = item.path;
					}
					return;
				}
				sideBarList.forEach((value) => {
					if (pathname.includes(value.path)) {
						currentNavPath = item.path;
					}
				});
			});
		}
		console.log('currentNavPath', currentNavPath)
		onNavSelect(currentNavPath);
	}

	/**
	 * @description: 选中一级菜单 
	 * @param {*} currentKey
	 * @return {*}
	 */
	const onNavSelect = (key, value) => {
		const selectedKey = key || pathname
		console.log('selectedKey', selectedKey)
		const barName = sideBarData.find(item => selectedKey.includes(item.path))
		console.log('barName', barName)
		setBarName(barName?.name)
		setSelectedNavBar(selectedKey);
		handleNavSelect(selectedKey);
	}

	/**
	 * @description: 选中一级菜单后，处理二级菜单数据
	 * @param {*} currentKey
	 * @return {*}
	 */
	const handleNavSelect = (currentKey) => {

		const currentSideBarDataData = sideBarData.find(
			(item) => item.path === currentKey
		);
		if (currentSideBarDataData?.children) {
			handleDefaultSideBar(currentSideBarDataData?.children);
		} else {
			navigate(currentKey);
		}
		console.log(currentSideBarDataData)
		setCurrentSideBarData(currentSideBarDataData);
	}

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
		setSelectedSecondNavBar(current);
	}

	/**
	 * @description: 选中的二级导航
	 * @param {*} currentKey
	 * @return {*}
	 */
	const onSideBarSelect = (item) => {
		console.log('item', item);
		const { value, label } = item.item.props;
		navigate(value);
		setSelectedSecondNavBar({
			path: value,
			name: label,
		});
	}

	// 展开数组和对象
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

	const redirectToLogin = () => {
		 if (!isAuthenticated()) {
			message.error("登录信息已过期，请重新登录！");
			navigate("/login");
		} else {
			if (pathname == "/") {
				onNavSelect("/entryTicket");
			}
			if (pathname == "/messageCenter") {
				setSelectedSecondNavBar({});
				setSelectedNavBar("");
				setCurrentSideBarData([]);
				setBarName("消息中心");
			}
		}
	};

	// 退出登录
	const logout = () => {
		removeAll();
		// const { history } = props;
		navigate('/login');
	};

	return (
		<div className='Navigation'>
			<div className='first-nav-bar'>
				<img 
					className='first-nav-logo' 
					src="https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images/tmirob-logo144.png" 
					alt="" 
				/>
				<FirstNavigation 
					sideBarData={sideBarData} 
					onNavSelect={onNavSelect}
					selectedNavBar={selectedNavBar}
				/>
			</div>
			{
				currentSideBarData?.children && (Array.isArray(currentSideBarData.children) || Object.keys(currentSideBarData?.children).length > 0) 
				? 
				(
					<div className='second-nav-bar'>
						<p className='second-nav-bar-title'>{currentSideBarData.name}</p>
						<SecondaryNavigation
							selectedSecondNavBar={selectedSecondNavBar}
							currentSideBarData={currentSideBarData} 
							onSideBarSelect={onSideBarSelect}
						/>
					</div>
				) : null
			}
			<div className='content-wrapper'>
				<Header 
					barName={barName}
					userName={userName}
					logout={logout}
					currentSideBarData={currentSideBarData}
					selectedSecondNavBar={selectedSecondNavBar}
				/>
				{outlet}
			</div>
		</div>
		)
}

export default Wrapper