import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../css/secondaryNavigation.scss';
const { ItemGroup, Item } = Menu;

const SecondaryNavigation = (props) => {
	const {currentSideBarData, onSideBarSelect} = props;

	const handleItem = (data) => {
		const item = data.map((item) => {
			const { name, title } = item;
			return (
				<Item
					key={name}
					value={name}
					label={title || name}
				>
					{name}
				</Item>
			)
		});
		return item;
	}

	const renderSideBar = (data) => {
		if (Array.isArray(data)) {
			const nav = handleItem(data)
			return nav;
		} else if (data) {
			const nav = Object.keys(data).map((key) => {
				console.log('key', key);
				const value = data[key];
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
			>
				{
					renderSideBar(currentSideBarData)
				}
			</Menu>,
		</div>
	)
}

export default SecondaryNavigation