# RobotInfo

<font size=4 face="微软雅黑">简介：机器人设备卡片，卡片内容包括设备图片、设备名称、设备类型、设备状态、电量、功能按钮（支持多个），同时支持特殊状态（是否装载，适用于可脱卸机器人）。</font>

## 单个按钮

```jsx
import React from 'react'
import { RobotInfo } from 'tmi-material';

export default () => {
	const dataList = [
        {
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
        },
        {
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
            "robotStatus": "Busy", // Available Busy
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
        },
        {
            "serialNo": "SN5301B2208001",
            "alias": "8001",
            "powerLevel": 80,
            "paused": false,
            "stopped": false,
            "modules": [
                {
                    "isOnline": false,
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
        },
    ]

    const btnCount = 'single'

	return <RobotInfo robotDesc={dataList} btnNum={btnCount} />
}
```

## 多个按钮

```jsx
import React from 'react'
import { RobotInfo } from 'tmi-material';

export default () => {
	const dataList = [
        {
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
        },
        {
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
            "robotStatus": "Busy", // Available Busy
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
        },
        {
            "serialNo": "SN5301B2208001",
            "alias": "8001",
            "powerLevel": 80,
            "paused": false,
            "stopped": false,
            "modules": [
                {
                    "isOnline": false,
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
        },
    ]

    const btnCount = 'more'

	return <RobotInfo robotDesc={dataList} btnNum={btnCount} />
}
```

## 特殊状态

```jsx
import React from 'react'
import { RobotInfo } from 'tmi-material';

export default () => {
	const dataList = [
        {
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
            "isLoadRobot": true
        },
        {
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
            "robotStatus": "Busy", // Available Busy
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
            "isLoad": true,
            "isLoadRobot": true
        },
    ]

    const btnCount = 'single'

	return <RobotInfo robotDesc={dataList} btnNum={btnCount} />
}
```

| 参数        | 说明                     | 类型     | 默认值    |
|-----------|------------------------|--------|--------|
| robotDesc |  机器人数据源                | Array  | -      |
| btnNum    | 机器人卡片中按钮个数，single/more | String | single |
| btnData   | 按钮列表中的数据               | Array  | -      |