import React from 'react'

import { Popover } from 'antd';
import {UserOutlined, createFromIconfontCN } from '@ant-design/icons';
import '../css/header.scss'

const CustomIcon = createFromIconfontCN ({
	scriptUrl: "//at.alicdn.com/t/c/font_3829616_vxf4qgj6bmm.js"
});

const Header = (props) => {
	const { selectedNavBar, selectedSecondNavBar } = props

	const triggerHtml = (
		<div style={{width: '80px', display: 'flex'}} onClick={() => console.log('退出登录')}>
			<CustomIcon style={{fontSize: 20}} type="icon-tmiguanbi" />
			<p>退出登录</p>
		</div>
    )

  return (
	<div className='content-wrapper-header'>
		<p className='content-header-title'>{!selectedSecondNavBar ? selectedNavBar : selectedSecondNavBar}</p>
		<div>
			<Popover
				placement="bottomRight"
				closable={false}
				trigger="hover"
				content={triggerHtml}
			>
				<div className='content-header-user'>
					<UserOutlined style={{fontSize: 24}}/>
					{/* <p className="content-header-username">欢迎</p> */}
				</div>
			</Popover>
		</div>
	</div>
  )
}

export default Header