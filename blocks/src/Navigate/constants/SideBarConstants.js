import React from "react";
import { SettingFilled, PlusSquareFilled, MinusSquareFilled } from '@ant-design/icons';

// const Pages = React.lazy(() => import("../pages/index"));
const TestOne = React.lazy(() => import("../pages/testPage/testOne"));
const TestTwo = React.lazy(() => import("../pages/testPage/testTwo"));

const sideBarKey = {
	PAGES: '/pages',
	TEST: '/seting',
	OUT: '/out',
};

const sideBarIcon = {
	BASIC: <SettingFilled style={{fontSize: 28}}/>,
	ENTRY: <PlusSquareFilled style={{fontSize: 28}} />,
	OUT: <MinusSquareFilled style={{fontSize: 28}} />
}

const sideBarData = [
	{
		name: "基础表格",
		path: '/components/table-with-page',
		component: <TestOne />,
		icon: sideBarIcon.ENTRY,
		type: "sidebar", // 标识为侧边栏项
	},
	{
		name: "表单模板",
		path: '/components/form-with-title',
		component: <TestOne />,
		icon: sideBarIcon.OUT,
		type: "sidebar", // 标识为侧边栏项
		children: [
			{
				name: "表单模板",
				path: '/components/form-with-title',
				component: <TestOne />,
				type: "sidebar", // 标识为侧边栏项
			},
		]
	},
	{
		name: "基础设置",
		path: '/components/add-in-situ-table',
		icon: sideBarIcon.BASIC,
		type: "sidebar", // 标识为侧边栏项
		children: {
			"用户设置": [
				{
					name: "用户",
					path: '/components/add-in-situ-table',
					component: <TestOne />,
					type: "sidebar", // 标识为侧边栏项
				},
				{
					name: "用户",
					path: '/components/add-in-situ-table',
					component: <TestTwo />,
					type: "route", // 标识为路由项
				},
			],
		}
	}
]

// 提取所有路径
const extractPaths = (data) => {
    let paths = [];
    data.forEach(item => {
		if (item.children) {
			if (Array.isArray(item.children)) {
				item.children.forEach(subItem => {
					if (subItem.path) {
						paths.push(subItem);
					}
				});
			} else {
				Object.values(item.children).forEach(subItems => {
					subItems.forEach(subItem => {
						if (subItem.path) {
							paths.push(subItem);
						}
					});
				});
			}
			return
		}
        if (item.path) {
            paths.push(item);
        }
    });
    return paths;
};

export const routerConfig = extractPaths(sideBarData)


const SideBarConstants = {
	sideBarKey,
	sideBarData,
}

export default SideBarConstants