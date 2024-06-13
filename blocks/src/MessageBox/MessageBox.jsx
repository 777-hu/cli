import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Badge, Popover } from 'antd';
import { UserOutlined, createFromIconfontCN } from "@ant-design/icons";
import MessageContent from './MessageContent';
import './messageBox.scss';

const CustomIcon = createFromIconfontCN({
	scriptUrl: [
	  "//at.alicdn.com/t/c/font_3829616_vxf4qgj6bmm.js",
	  "//at.alicdn.com/t/c/font_4497431_6pr0tr677ut.js",
	],
  });
  

export default function MessageBox({ value }) {
	// total 未读的数量 data 消息列表
	const { total=0, data=[] } = value
	// 仅查看未读消息
	let onlyUnRead = useRef(null)

	useEffect(() => {
		let params = {
			isRead: onlyUnRead.current
		}
		getMessageBox(params)
	}, [onlyUnRead.current])

	const getMessageBox = (params) => {
		// 获取数据
	}

	return (
		<div className='message'>
			<Popover 
				placement="leftTop" 
				content={<MessageContent onlyUnRead={onlyUnRead} getMessageBox={getMessageBox} dataList={data} unReadCount={total} />} trigger="hover"
			>
				<Badge count={total}>
					<CustomIcon style={{ fontSize: 24 }} type="icon-xiaoxitongzhi" />
				</Badge>
			</Popover>
		</div>
	);
}

MessageBox.propTypes = {
  value: PropTypes.string,
};

MessageBox.defaultProps = {
  value: {}
};
