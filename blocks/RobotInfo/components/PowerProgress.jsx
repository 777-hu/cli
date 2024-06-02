import React from "react";
import { imageUrl } from '../constants/Resources'
import '../style/PowerProgress.scss'

const PowerProgress = (props) => {
    // 当前机器人相关数据
    const { itemData } = props
    const { isCharging, powerLevel, robotStatus, modules } = itemData

    const getProgressStyles = () => {
        if(powerLevel === 0){
			return "progress_power_emergency"
		}

		if(powerLevel && powerLevel < 60){
			return "progress_power_warning"
		}

		return null
	}

    const getPowerNumStyles = () => {
        if(powerLevel === 0){
			return "progress_numEmergency"
		}

		if(powerLevel && powerLevel < 60){
			return "progress_numWarning"
		}

		return null
    }

    if (modules && modules[0] && modules[0].isOnline === false) {
        return null
    }

    return (
        <div className="progress">
            {/* 机器人电量可视化 */}
            <div className={`progress_container`}>
                <img className="progress_powerImg" src={imageUrl.POWER}></img>
                <div className="progress_power">
                    <div className={`progress_power_progress ${getProgressStyles()}`} style={{width: `${powerLevel || 0}%`}}></div>
                    {
                        isCharging ? 
                        <img className="progress_power_lightIcon" src={imageUrl.ROBOT_POWER_ICON}></img>
                        :
                        ''
                    }
                </div>
            </div>
            {/* 机器人剩余电量 */}
            <span className={`progress_progressNum ${getPowerNumStyles()}`}>{powerLevel}%</span>
        </div>
    )
}

export default PowerProgress