import React from "react";
import { SettingFilled, PlusSquareFilled, MinusSquareFilled } from '@ant-design/icons';

const Pages = React.lazy(() => import("../pages/index"));

const sideBarKey = {
	PAGES: '/pages',
};

const sideBarIcon = {
	BASIC: <SettingFilled style={{fontSize: 28}}/>,
	ENTRY: <PlusSquareFilled style={{fontSize: 28}} />,
	OUT: <MinusSquareFilled style={{fontSize: 28}} />
}

const sideBarData = [
	{
		name: "入库 ",
		// path: sideBarKey.PAGES,
		icon: sideBarIcon.ENTRY,
	},
	{
		name: "申领 ",
		// path: sideBarKey.PAGES,
		icon: sideBarIcon.OUT,
	},
	{
		name: "基础设置",
		path: sideBarKey.PAGES,
		icon: sideBarIcon.BASIC,
		children: {
			"用户设置": [
				{
					name: "用户",
					path: sideBarKey.PAGES
				},
			],
		}
	}
]


export const routerConfig = [
	{
		path: sideBarKey.PAGES,
		component: <Pages />,
		withAuth: ["ADMIN"],
	},
]

const SideBarConstants = {
	sideBarKey,
	sideBarData,
}

export default SideBarConstants