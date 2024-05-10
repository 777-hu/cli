import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/secondaryNavigation.scss';
const { ItemGroup, Item } = Menu;

const SecondaryNavigation = (props) => {
	const {currentSideBarData, onSideBarSelect, selectedSecondNavBar} = props;

	const handleItem = (data) => {
		const item = data.map((item) => {
			const { name, path } = item;
			return (
				<Item
					key={path}
					value={path}
					label={name}
				>
					{name}
				</Item>
			)
		});
		return item;
	}

	const renderSideBar = (data) => {
		const {children} = data;
		if (Array.isArray(children)) {
			const nav = handleItem(children)
			return nav;
		} else if (children) {

			const nav = Object.keys(children).map((key) => {
				const value = children[key];
				const item = (
					<ItemGroup label={key} title={key} key={key}>
						{handleItem(value)}
					</ItemGroup>
				);
				return item;
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
			>
				{
					renderSideBar(currentSideBarData)
				}
			</Menu>
		</div>
	)
}

export default SecondaryNavigation