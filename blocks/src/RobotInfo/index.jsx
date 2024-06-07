import React from 'react';
import PropTypes from 'prop-types';
import RobotCard from './components/RobotCard';
import './index.scss';

// 机器人基本信息
const dataList = [{
  "serialNo": "SN5301B2208001",
  "alias": "8001",
  "powerLevel": 80,
  "paused": false,
  "stopped": false,
  "modules": [
      {
          "isOnline": true,
          "updateTime": 1673257851702
      }
  ],
  "robotStatus": "Available", // Available Busy
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
  "jobsWithRobot": [],
  "isLoad": false,
  "isLoadRobot": false
}]

// single 单个按钮 more 多个按钮 默认为 single
const btnCount = 'single' // 'more' 'single'

// 按钮操作选项
const btnList = ['其他操作1', '其他操作2']

const RobotInfo = (props) => {
  const { 
    robotDesc = dataList, 
    btnNum = btnCount,
    btnData = btnList
  } = props

  return (
    <div className='robotCardBox'>
      {
        robotDesc.length &&
        robotDesc.map((item, index) => {
          return <RobotCard 
                  key={index}
                  robotDesc={item} 
                  btnNum={btnNum}
                  btnData={btnData}
                ></RobotCard>
        })
      }
    </div>
  )
}

RobotInfo.propTypes = {
  value: PropTypes.string,
};

RobotInfo.defaultProps = {
  value: '',
};

export default RobotInfo