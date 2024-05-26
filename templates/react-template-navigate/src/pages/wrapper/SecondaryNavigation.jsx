import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/secondaryNavigation.scss';
const { ItemGroup, Item } = Menu;

const SecondaryNavigation = (props) => {
	const {currentSideBarData, onSideBarSelect, selectedSecondNavBar} = props;

	const handleItem = (data) => {
		const items = data.map((item) => {
			const { name, path, type } = item;
			if(type === 'route') return
			return ({
				...item,
				key: path,
				value: path,
				label: name,
			})
		});
		return items;
	}

	const renderSideBar = (data) => {
		const {children} = data;
		if (Array.isArray(children)) {
			const nav = handleItem(children)
			return nav;
		} else if (children) {

			const nav = Object.keys(children).map((key) => {
				const value = children[key];
				return {
					label: key,
					title: key,
					key: key,
					type: 'group',
					children: handleItem(value),
				}
			})
			return nav;
		}
	}

	return (
		<div className="second-bar-list">
			<Menu
				mode="vertical"
				className='second-menu-list'
				triggerSubMenuAction="click"
				onSelect={onSideBarSelect}
				selectedKeys={selectedSecondNavBar.path}
				items={renderSideBar(currentSideBarData)}
			/>
		</div>
	)
}

export default SecondaryNavigation