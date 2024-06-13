import React from 'react';
import { Badge, Checkbox } from 'antd';
import AlertMessage from './AlertMessage';
import { imageUrl } from './constants/Resources';

function MessageContent(props) {
  const {unReadCount, dataList, getMessageBox, onlyUnRead} = props

  const onChange = (e) => {
    if(e.target.checked) {
      onlyUnRead.current = false
      getMessageBox({isRead: false})
    } else {
      onlyUnRead.current = null
      getMessageBox()
    }
  };

  const allMessageRead = () => {
    if(unReadCount === 0) return;
  }

  return (
    <div className='message-content'>
      <div className='message-content-header'>
        <Badge count={unReadCount} offset={[10, -5]}>
          <div>消息</div>
        </Badge>
        <div><Checkbox onChange={onChange}>仅看未读消息</Checkbox></div>
      </div>
      <div className='message-content-center'>
        {
          dataList?.length===0?
            <div className='message-content-empty'>
              <img className='message-content-image' src={imageUrl.EMPTY} />
            </div>
          :
          dataList?.map(item => {
            return <AlertMessage key={item.id} getMessageBox={getMessageBox} onlyUnRead={onlyUnRead} dataList={item}></AlertMessage>
          })
        }
      </div>
      <div className='message-content-footer'>
        <div onClick={allMessageRead} className={`message-content-read ${unReadCount > 0 ? '' : 'allRead'}`}>全部已读</div>
        <div className='message-content-view' onClick={() => {}}>查看全部</div>
      </div>
    </div>
  );
}

export default MessageContent;