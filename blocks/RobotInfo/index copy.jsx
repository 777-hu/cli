import React from 'react';
import PropTypes from 'prop-types';
import StatusTips from './components/StatusTips'
import PowerProgress from './components/PowerProgress'
import { robotsImagesMap, imageUrl, robotsImg } from './constants/Resources'
import { Button } from '@alifd/next'
import '@alifd/next/dist/next.css';
import './index.scss';

// 存储机器人信息
const dataList = [
  {
      "serialNo": "SN5301B2208001",
      "alias": "8001",
      "powerLevel": 50,
      "paused": false,
      "stopped": false,
      "modules": [
          {
              "isOnline": true,
              "updateTime": 1673257851702
          }
      ],
      "robotStatus": "Available",
      "model": "TRV-15",
      "isCharging": true,
      "active": true,
      "project": "AGVProject",
      "robotType": "DetachableRobot",
      "errorStatus": "Normal",
      "isLessThanWorkingPower": false,
      "thresholdPowerLevel": 20,
      "businessNames": null,
      "robotName": "8001",
      "jobsWithRobot": []
  },
  {
    "serialNo": "SN5301B2208001",
    "alias": "8001",
    "powerLevel": 50,
    "paused": false,
    "stopped": false,
    "modules": [
        {
            "isOnline": false,
            "updateTime": 1673257851702
        }
    ],
    "robotStatus": "Available",
    "model": "TRV-15",
    "isCharging": true,
    "active": true,
    "project": "AGVProject",
    "robotType": "DetachableRobot",
    "errorStatus": "Normal",
    "isLessThanWorkingPower": false,
    "thresholdPowerLevel": 20,
    "businessNames": null,
    "robotName": "8001",
    "jobsWithRobot": []
  },
  {
    "serialNo": "SN5301B2208001",
    "alias": "8001",
    "powerLevel": 50,
    "paused": false,
    "stopped": false,
    "modules": [
        {
            "isOnline": true,
            "updateTime": 1673257851702
        }
    ],
    "robotStatus": "Busy",
    "model": "TRV-15",
    "isCharging": true,
    "active": true,
    "project": "AGVProject",
    "robotType": "DetachableRobot",
    "errorStatus": "Normal",
    "isLessThanWorkingPower": false,
    "thresholdPowerLevel": 20,
    "businessNames": null,
    "robotName": "8001",
    "jobsWithRobot": []
  },
  {
    "serialNo": "SN5301B2208001",
    "alias": "8001",
    "powerLevel": 50,
    "paused": false,
    "stopped": true,
    "modules": [
        {
            "isOnline": true,
            "updateTime": 1673257851702
        }
    ],
    "robotStatus": "StandBy",
    "model": "TRV-15",
    "isCharging": true,
    "active": true,
    "project": "AGVProject",
    "robotType": "DetachableRobot",
    "errorStatus": "Normal",
    "isLessThanWorkingPower": false,
    "thresholdPowerLevel": 20,
    "businessNames": null,
    "robotName": "8001",
    "jobsWithRobot": []
  }
]

const RobotInfo = (props) => {
  const { robotList = dataList } = props

  // 呼叫机器人
  const handleRobotClick = (robotInfo) => {
    console.log(robotInfo)
  }

  return (
    <div className='robotList'>
      {
        robotList.length ? 
        // 机器人列表不为空
        <div className="robotList_box">
          {
            robotList.map((item, index) => {
                return (
                    // 机器人
                    <div className="robotList_box_content" key={index}>

                        {/* 机器人状态-头部 */}
                        <div className="robotList_box_robotStatus">

                            {/* 机器人当前状态 */}
                            <div className="robotList_box_status">
                                <StatusTips itemData={item}></StatusTips>
                            </div>

                            {/* 电量 */}
                            <div className="robotList_box_powerContainer">
                                {
                                    item.robotStatus === 'Offline' ?
                                    ''
                                    :
                                    <PowerProgress itemData={item}></PowerProgress>
                                }
                            </div>
                        </div>

                        {/* 机器人图片-中间 */}
                        <div className="robotList_box_robotImg">
                            <img className="robotList_box_robotPic" src={robotsImagesMap.get(`${item.model}`)|| robotsImg.get(`${item.serialNo}`) || robotsImagesMap.get('DefaultRobot')}></img>
                        </div>

                        {/* 机器人是否在执行-尾部 */}
                        {
                            item.robotStatus === 'Busy' ? 
                            <div className="robotList_box_robotName">
                                <div className="robotList_box_robotAlias alias">{item.alias ? item.alias : ''}</div>
                                <span className="robotList_box_robotBusy executed">执行中</span>
                            </div>
                            :
                            <div className="robotList_box_robotName unexecuted">
                                <div className="robotList_box_robotAlias">{item.alias ? item.alias : ''}</div>
                                <div className="robotList_box_robotBtn">
                                    {
                                        (item.robotStatus === 'Available' || item.robotStatus === 'StandBy') && item.modules[0].isOnline && item.stopped === false && item.powerLevel > 20 ?
                                            <Button type="primary" onClick={() => {handleRobotClick(item)}}>呼叫机器人</Button>
                                        :
                                            <Button disabled type="primary" onClick={() => {handleRobotClick(item)}}>呼叫机器人</Button>
                                    }
                                    
                                </div>
                            </div>
                        }
                    </div>
                )
            })
          }
        </div>
      :
      // 机器人列表为空
      <div className="robotList_empty">
          <img className="robotList_empty_img" src={imageUrl.EMPTY_CONTENT}></img>
          <span className="robotList_empty_text">暂无可监控的机器人</span>
      </div>
    }
    </div>
  );
}

RobotInfo.propTypes = {
  value: PropTypes.string,
};

RobotInfo.defaultProps = {
  value: '',
};

export default RobotInfo