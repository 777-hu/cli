import React from "react";
import { Menu } from 'antd';
import '../style/sidebar.scss';

const { ItemGroup, Item } = Menu;

const Sidebar = (props) => {
	const {currentSideBarData, onSideBarSelect, selectedSideBar} = props;

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
	  	<div>
			<Menu
				mode="vertical"
				style={{ width: 130 }}
				triggerSubMenuAction="click"
				onSelect={onSideBarSelect}
				selectedKeys={selectedSideBar.path}
			>
				{
					renderSideBar(currentSideBarData)
				}
			</Menu>
		</div>
    )
};

export default Sidebar;
