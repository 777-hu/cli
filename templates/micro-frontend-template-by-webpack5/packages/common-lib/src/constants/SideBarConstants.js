import React from "react";
import {
	SettingFilled,
} from "@ant-design/icons";
import { imageUrl } from "./Resources";

const sideBarKey = {
	HISTORY: '/history',
	USER: '/user',
};

const sideBarIcon = {
	BASIC: <SettingFilled style={{ fontSize: 28 }} />,
	HISTORY:<img src={imageUrl.NAV_HISTORY}/>,
};

const sideBarData = [
	{
		name: "历史记录",
		icon: sideBarIcon.HISTORY,
		path: sideBarKey.HISTORY,
	},
	{
		name: "基础设置",
		icon: sideBarIcon.BASIC,
		path: sideBarKey.USER,
		// 不添加子菜单标题
		// children: [
		// 	{
		// 		path: sideBarKey.USER,
		// 		name: "用户信息",
		// 	},
		// ]
		// 添加子菜单标题
		children: {
			用户信息: [
				{
					path: sideBarKey.USER,
					name: "用户信息",
				},
			]
		}
	}
]

const SideBarConstants = {
	sideBarKey,
	sideBarData,
}

export default SideBarConstants;