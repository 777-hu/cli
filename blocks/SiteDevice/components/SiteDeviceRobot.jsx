import React from "react";
import { imageUrl } from '../constants/Resources'
import { Button, message } from 'antd';
import '../style/SiteDeviceRobot.scss'

const SiteDeviceRobot = (props) => {
    const { robotInfo, extendBtn } = props
    const { occupied, stationName, online, scaleDeviceActive, callRobotState, taskName } = robotInfo

    const getStationImgUrl = (props) => {
        const {
          weighable,
          medicalWasteBinId,
          medicalWasteTicketId,
          recycled,
        } = props;
        let isShowTicket = false;

        if (!medicalWasteTicketId) {
          isShowTicket = false;
        } else {
          if (!recycled) {
            isShowTicket = true;
          }
        }
  
        if (!medicalWasteBinId) {
          isShowTicket = false;
        }
        if (!weighable && !medicalWasteBinId && !isShowTicket) {
          return imageUrl.STATION1;
        }
        if (weighable && !medicalWasteBinId && !isShowTicket) {
          return imageUrl.STATION4;
        }
        if (weighable && medicalWasteBinId && isShowTicket) {
          return imageUrl.STATION6;
        }
        if (weighable && medicalWasteBinId && !isShowTicket) {
          return imageUrl.STATION5;
        }
        if (!weighable && medicalWasteBinId && isShowTicket) {
          return imageUrl.STATION3;
        }
        if (!weighable && medicalWasteBinId && !isShowTicket) {
          return imageUrl.STATION2;
        }
    };

    const callingRobot = () => {
        message.success('机器人呼叫成功')
    }

    const cancelCalling = () => {
        message.success('机器人取消呼叫成功')
    }

    return (
        <div className={`siteDeviceRobot ${occupied?'':'noTask'}`}>
            <div className="siteDeviceRobot-title">
                <span className="siteDeviceRobot-title-name">{stationName}</span>
                <span className={`siteDeviceRobot-title-task ${occupied?'yellow':'green'}`}>{occupied?'有任务':'无任务'}</span>
            </div>
            <div className="siteDeviceRobot-content">
                <img
                    className="siteDeviceRobot-content-img"
                    src={getStationImgUrl(robotInfo)}
                    alt=""
                />
                <div className="siteDeviceRobot-content-status">
                    {online === false && (
                    <div className="siteDeviceRobot-content-offline">站点离线</div>
                    )}
                    {scaleDeviceActive === false && (
                    <div className="siteDeviceRobot-content-scaleOffline">称重离线</div>
                    )}
                </div>
            </div>
            <div className="siteDeviceRobot-footer">
                {
                    extendBtn ?
                        <div className="siteDeviceRobot-footer-btn">
                            {callRobotState === "CALL" && (
                                <Button
                                    type="primary"
                                    onClick={callingRobot}
                                >
                                呼叫机器人
                                </Button>
                            )}
                            {callRobotState === "CANNOT_CALL" && (
                                <Button
                                    type="primary"
                                    disabled={true}
                                >
                                呼叫机器人
                                </Button>
                            )}
                            {callRobotState === "CANCEL" && (
                                <Button
                                    onClick={cancelCalling}
                                >
                                取消呼叫
                                </Button>
                            )}
                        </div>
                    :
                        <div className="siteDeviceRobot-footer-title">
                            <span className="siteDeviceRobot-footer-tip">接收站</span>
                            <span className="siteDeviceRobot-footer-taskName">{taskName}</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default SiteDeviceRobot