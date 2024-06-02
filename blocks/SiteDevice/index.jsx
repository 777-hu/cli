import React from 'react';
import PropTypes from 'prop-types';
import SiteDeviceRobot from './components/SiteDeviceRobot'
import './index.scss';

const robotData = [{
  "stationId": 27,
  "stationName": "暂存处智能站点2", // 站点名称
  "areaType": "TEMPORARY_STORAGE",
  "medicalWasteBinId": null, 
  "medicalWasteTicketId": null, 
  "callRobotState": 'CALL',
  "scaleDeviceActive": true,
  "weighable": false, // 是否可称重
  "online": true,
  "occupied": false, // 是否有任务
  "recycled": false,
  "taskName": '垃圾回收任务' // 任务名称
}]

const withBtn = true

export default function SiteDevice(props) {
  const { robotInfo=robotData, extendBtn=withBtn  } = props
  
  return (
    <div className='siteDeviceBox'>
      {
        robotInfo.length &&
        robotInfo.map((item, index) => {
          return <SiteDeviceRobot key={index} robotInfo={item} extendBtn={extendBtn}></SiteDeviceRobot>
        })
      }
    </div>
  );
}

SiteDevice.propTypes = {
  value: PropTypes.string,
};

SiteDevice.defaultProps = {
  value: '',
};
