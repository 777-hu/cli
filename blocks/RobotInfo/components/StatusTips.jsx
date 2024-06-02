import React from "react";
import Constants from '../constants/constants';
import '../style/statusTips.scss'

const {RobotStatusData} = Constants;

const StatusTips = (props) => {
    const { itemData } = props
	const { robotStatus, paused, stopped, modules } = itemData

	if (modules && modules[0] && modules[0].isOnline === false) {
		return (
			<div className="statusTips">
				<div className="statusTips_offline">
					<span>离线</span>
				</div>
			</div>
		);
	}
	if (paused) {
		return (
			<div className="statusTips">
				<div className="statusTips_stop">
					<span>暂停</span>
				</div>
			</div>
		);
	}
	if (stopped) {
		return (
			<div className="statusTips">
				<div className="statusTips_stop">
					<span>急停</span>
				</div>
			</div>
		);
	}

    const renderRobotStatus = (robotStatus) => {
		switch (robotStatus) {
			case RobotStatusData.ROBOT_STATUS_AVAILABLE:
				return (
					<div className="statusTips_normal">
						<span>正常</span>
					</div>
				);
			case RobotStatusData.ROBOT_STATUS_RUN:
				return (
					<div className="statusTips_normal">
						<span>正常</span>
					</div>
				);
			case RobotStatusData.ROBOT_STATUS_STAND_BY:
				return (
					<div className="statusTips_normal">
						<span>正常</span>
					</div>
				);
			case RobotStatusData.ROBOT_STATUS_BUSY:
				return (
					<div className="statusTips_busy">
						<span>忙碌</span>
					</div>
				);
			case RobotStatusData.ROBOT_STATUS_OFFLINE:
				return (
					<div className="statusTips_offline">
						<span>离线</span>
					</div>
				);
			case RobotStatusData.ROBOT_STATUS_ERROR:
				return (
					<div className="statusTips_error">
						<span>异常</span>
					</div>
				);
			default:
				return (
					<div className="statusTips_error">
						<span>异常</span>
					</div>
				);
		}
	};

    return (
        <div className="statusTips">
            {renderRobotStatus(robotStatus)}
        </div>
    )
}

export default StatusTips