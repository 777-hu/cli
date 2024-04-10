import React, { useState, useEffect } from 'react';
import FirstNavigation from './component/FirstNavigation'
import SecondaryNavigation from './component/SecondaryNavigation'
import Header from './component/Header';
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
	let location = useLocation();
	let navigate = useNavigate()
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
		// redirectToLogin();
	}, [userId]);

	useEffect(() => {
		matchCurrentNavBar();
	}, [sideBarData]);
	/**
	 * @description: 选中一级菜单 
	 * @param {*} currentKey
	 * @return {*}
	 */
	const onNavSelect = (key, value) => {
		const selectedKey = key || pathname
		const barName = sideBarData.find(item => selectedKey.includes(item.path))
		setBarName(barName?.name)
		setSelectedNavBar(selectedKey);
		handleNavSelect(selectedKey);
	}

	/**
	 * @description: 选中的二级导航
	 * @param {*} currentKey
	 * @return {*}
	 */
	const onSideBarSelect = (item) => {
		console.log('item', item);
		setSelectedSecondNavBar(item.key)
	}
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
			navigate('/login');
			message.error('登录信息已过期，请重新登录！');
		}
	};
	
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

	/**
	 * @description: 选中一级菜单后，处理二级菜单数据
	 * @param {*} currentKey
	 * @return {*}
	 */
	const handleNavSelect = (currentKey) => {
		const currentSideBarDataData = sideBarData.find((item) => item.path === currentKey);
		if(currentSideBarDataData?.children) {
			handleDefaultSideBar(currentSideBarDataData?.children);
		} else {
			navigate(currentKey)
		}
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

	// 退出登录
	const logout = () => {
		removeAll();
		// const { history } = props;
		navigate('/login');
	};

	return (
		<div className='Navigation'>
			<div className='first-nav-bar'>
				<img className='first-nav-logo' src="https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images/tmirob-logo144.png" alt="" />
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
				<Header barName={barName} userName={userName} logout={logout} selectedSecondNavBar={selectedSecondNavBar}/>
				{outlet}
			</div>
		</div>
		)
}

export default Wrapper