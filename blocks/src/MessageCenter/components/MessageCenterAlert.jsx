import { Badge } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { imageUrl } from '../constants/Resources';
import Constants from '../constants/constants';

const {timeOutReminder} = Constants

function MessageCenterAlert(props) {
  const {item} = props;
  const [mouseHover, setMouseHover] = useState(false)

  return (
    <div className={`message-center-box ${mouseHover?'hover':''}`} key={item?.id} onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
      <div className='message-center-item'>
        <div className='message-center-left'>
          {!item?.isRead&&<Badge status="error" />}
        </div>
        <div className='message-center-right'>
          <div className='message-center-operate'>
            <div className='message-center-title'>{timeOutReminder[item?.type]}</div>
            <div className='message-center-info'>{item?.showMessage}</div>
          </div>
          <div className='message-center-date'>
            <img src={imageUrl.SCHEDULE} />
            <div className='message-center-date-text'>{dayjs(item.createTime || Date.now()).format('YYYY-MM-DD HH:mm')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageCenterAlert;
