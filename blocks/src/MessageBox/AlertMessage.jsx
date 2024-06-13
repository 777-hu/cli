import React, { useState } from 'react';
import { Badge, Tooltip } from 'antd';
import { formatDateToChinese } from './constants/utils';
import { imageUrl } from './constants/Resources';
import Constants from './constants/constants';

const {timeOutReminder} = Constants

function AlertMessage(props) {
	const [mouseHover, setMouseHover] = useState(false)
	const { dataList, getMessageBox, onlyUnRead } = props

	const signMessageRead = () => {
		getMessageBox({isRead: onlyUnRead.current})
	}

	return (
		<div className={`message-content-box ${mouseHover?'hover':''} ${dataList?.isRead?'read':''}`} key={dataList?.id} onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
			<div className='message-content-item'>
				<div className='message-content-left'>
					{!dataList?.isRead&&<Badge status="error" />}
				</div>
				<div className='message-content-right'>
					<div className='message-content-title'>{dataList?.type}</div>
					<Tooltip arrow={false} placement="top" title={dataList?.showMessage}>
						<div className='message-content-info'>{dataList?.showMessage}</div>
					</Tooltip>
					<div className='message-content-operate'>
						<div className='message-content-date'><img className='message-content-icon' src={imageUrl.DATE_DEFAULT} />{formatDateToChinese(dataList.createTime || Date.now())}</div>
						{
						mouseHover && !dataList?.isRead ? <div onClick={signMessageRead} className='message-content-sign'>标为已读</div> : <div></div>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AlertMessage;
