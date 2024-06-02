const RobotStatusData = {
	ROBOT_STATUS_AVAILABLE: 'Available',
	ROBOT_STATUS_RUN: 'Run',
	ROBOT_STATUS_BUSY: 'Busy',
	ROBOT_STATUS_ERROR: 'Error',
	ROBOT_STATUS_OFFLINE: 'Offline',
	ROBOT_STATUS_POWER_NOT_ENOUGH: 'PowerNotEnough',
	ROBOT_STATUS_STOPPED: 'RobotStopped',
	ROBOT_STATUS_STAND_BY: 'StandBy',
};

const robotFormTypeKey = {
	DETACHABLE_ROBOT: 'detachable',
	NON_DETACHABLE_ROBOT: 'fixed',
};

const Constants = {
	RobotStatusData,
	robotFormTypeKey
};

export default Constants;