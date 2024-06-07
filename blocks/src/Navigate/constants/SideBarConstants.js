

const sideBarData = [
	{
		name: "管理设置",
		key: "/",
		children: {
			"管理设置": [
				{
					name: "尺码设置",
					key: "/rule"
				},
				{
					name: "人员设置",
					key: "/user"
				}
			],
			"人员管理": [
				{
					name: "鞋码设置",
					key: "/shoes"
				},
				{
					name: "访客设置",
					key: "/visitor"
				}
			],
		}
	},
	{
		name: "行为设置",
		key: "/behavior"
	}
]

const SideBarConstants = {
	sideBarData,
}

export default SideBarConstants