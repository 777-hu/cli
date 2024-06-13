import React from "react";

import { Dropdown, Popover, Space } from "antd";
import { UserOutlined, createFromIconfontCN } from "@ant-design/icons";
import "../../css/header.scss";
import MessageBox from "../messageBox/MessageBox";
// import { imageUrl } from "../../constants/Resources";

const CustomIcon = createFromIconfontCN({
	scriptUrl: [
		"//at.alicdn.com/t/c/font_3829616_vxf4qgj6bmm.js",
		"//at.alicdn.com/t/c/font_4497431_6pr0tr677ut.js",
	]
});

const Header = (props) => {
const { selectedSecondNavBar, barName, logout, userName, currentSideBarData } = props;

const triggerHtml = (
	<div style={{ width: "100px" }}>
		<div style={{ display: "flex", gap: 10 }}>
			<CustomIcon style={{ fontSize: 20 }} type="icon-yonghuming" />
			{userName}
		</div>
		<div className="log-out"  onClick={logout}>
			<CustomIcon style={{ fontSize: 20 }} type="icon-tmiguanbi" />
			<p>退出登录</p>
		</div>
	</div>
);

return (
	<div className="content-wrapper-header">
		<p className="content-header-title">
			{currentSideBarData.children ? selectedSecondNavBar?.name : barName}
		</p>
		<div
			style={{
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "center",
				width: "100px",
				gap: 20,
			}}
		>
			<MessageBox />
			<Popover
				placement="bottomRight"
				closable={false}
				trigger="hover"
				content={triggerHtml}
			>
				<div className='content-header-user'>
					<CustomIcon style={{ fontSize: 24 }} type="icon-yonghuming" />
				</div>
			</Popover>
		</div>
	</div>
);
};

export default Header;
