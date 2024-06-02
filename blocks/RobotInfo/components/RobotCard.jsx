import React, { useState } from 'react';
import StatusTips from './StatusTips'
import PowerProgress from './PowerProgress'
import BtnItem from './BtnItem'
import { robotsImagesMap, robotsImg } from '../constants/Resources'
import { Button, message } from 'antd';
import '../style/RobotCard.scss';

const RobotCard = (props) => {
  const { robotDesc, btnNum, btnData } = props
  const [btnShow, setBtnShow] = useState(false)

  // 呼叫机器人
  const handleRobotClick = (robotInfo) => {
    message.success('机器人呼叫成功');
  }

  // 展示更多按钮
  const moreBtnShow = () => {
    setBtnShow(!btnShow)
  }

  return (
    <div className='robotBox'>
      {/* 机器人状态 */}
      <div className='robotBox-status'>
        {
          robotDesc.robotStatus === 'Busy' ?
          <div className='robotBox-status-busy'>执行中：43397414</div>
          :
          ''
        }
      </div>
      {/* 机器人基本信息 */}
      <div className='robotBox-info'>
        {/* 更多按钮 */}
        {
          btnNum === 'single' ?
            ''
          :
            <div className='robotBox-info-moreBtn' onClick={moreBtnShow}></div>
        }
        {
          btnShow ? 
            <div className='robotBox-info-btnList'>
              {
                btnData.length ?
                  btnData.map((item, index) => {
                    return <BtnItem data={item} key={index}></BtnItem>
                  })
                :
                  ''
              }
            </div>
          :
            ''
        }
        {/* 机器人图片信息 */}
        <img className="robotBox-info-robotPic" src={robotsImagesMap.get(`${robotDesc.model}`)|| robotsImg.get(`${robotDesc.serialNo}`) || robotsImagesMap.get('DefaultRobot')}></img>
        {/* 机器人电量 状态 充电等信息 */}
        <div className="robotBox-info-robotStatus">
          {/* 机器人当前状态 */}
          <div className="robotBox-info-status">
              <StatusTips itemData={robotDesc}></StatusTips>
          </div>
          {/* 电量 */}
          <div className="robotBox-info-powerContainer">
              {
                  robotDesc.robotStatus === 'Offline' ?
                  ''
                  :
                  <PowerProgress itemData={robotDesc}></PowerProgress>
              }
          </div>
        </div>
      </div>
      <div className='robotBox-alias'>
        <div className='robotBox-alias-name'>
          <span className='robotBox-alias-title'>机器人名称/SN</span>
          {
            robotDesc.isLoadRobot?
            <span className={`robotBox-alias-load ${robotDesc.isLoad ? '' : 'unLoad'}`}>{robotDesc.isLoad?'已装载':'未装载'}</span>
            :
            ''
          }
        </div>
        <div className='robotBox-alias-type'>类型TRV-09</div>
      </div>
      <div className='robotBox-calling'>
      {
          btnNum === 'single' ?
            (robotDesc.robotStatus === 'Available' || robotDesc.robotStatus === 'StandBy') && robotDesc.modules[0].isOnline && robotDesc.stopped === false && robotDesc.powerLevel > 20 ?
              <Button type="primary" onClick={() => {handleRobotClick(robotDesc)}}>呼叫机器人</Button>
            :
              <Button disabled type="primary" onClick={() => {handleRobotClick(robotDesc)}}>呼叫机器人</Button>
          :
            <div className='robotBox-calling-btns'>
              <Button onClick={() => {handleRobotClick(robotDesc)}}>次要操作</Button>
              <Button type="primary" onClick={() => {handleRobotClick(robotDesc)}}>主要操作</Button>
            </div>
      }
      </div>
    </div>
  )
}

export default RobotCard