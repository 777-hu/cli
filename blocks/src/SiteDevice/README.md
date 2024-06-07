# SiteDevice

<font size=4 face="微软雅黑">简介：站点设备卡片，脱卸站点监控，包括站点的有无任务状态、站点上是否有货架，货架内是否有货物、站点的离线/在线状态、站点信息、以及扩展功能（功能按钮）等。</font>

## 站点设备卡片

### 普通站点

```jsx
import React from 'react'
import { SiteDevice } from 'tmi-material';

export default () => {
	const dataList = [
        {
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
        },
         {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": null, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": false, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
    ]

    const withBtn = false

	return <SiteDevice robotInfo={dataList} extendBtn={withBtn} />
}
```

普通站点设备不同状态展示：


```jsx
import React from 'react'
import { SiteDevice } from 'tmi-material';

export default () => {
	const dataList = [
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": null, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": false, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": 12, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": false, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": 12, 
            "medicalWasteTicketId": 11, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": false, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
    ]

    const withBtn = false

	return <SiteDevice robotInfo={dataList} extendBtn={withBtn} />
}
```

### 称重站点

```jsx
import React from 'react'
import { SiteDevice } from 'tmi-material';

export default () => {
	const dataList = [
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": null, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": true, // 是否可称重
            "online": true,
            "occupied": false, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
         {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": null, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": true, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
    ]

    const withBtn = false

	return <SiteDevice robotInfo={dataList} extendBtn={withBtn} />
}
```

称重站点设备不同状态展示：

```jsx
import React from 'react'
import { SiteDevice } from 'tmi-material';

export default () => {
	const dataList = [
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": null, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": true, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": 12, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": true, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
        {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": 12, 
            "medicalWasteTicketId": 11, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": true, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
    ]

    const withBtn = false

	return <SiteDevice robotInfo={dataList} extendBtn={withBtn} />
}
```

## 扩展功能

```jsx
import React from 'react'
import { SiteDevice } from 'tmi-material';

export default () => {
	const dataList = [
        {
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
        },
         {
            "stationId": 27,
            "stationName": "暂存处智能站点2", // 站点名称
            "areaType": "TEMPORARY_STORAGE",
            "medicalWasteBinId": null, 
            "medicalWasteTicketId": null, 
            "callRobotState": 'CALL',
            "scaleDeviceActive": true,
            "weighable": false, // 是否可称重
            "online": true,
            "occupied": true, // 是否有任务
            "recycled": false,
            "taskName": '垃圾回收任务' // 任务名称
        },
    ]

    const withBtn = true

	return <SiteDevice robotInfo={dataList} extendBtn={withBtn} />
}
```

| 参数        | 说明                  | 类型      | 默认值   |
|-----------|---------------------|---------|-------|
| robotInfo |  站点设备数据源            | Array   | -     |
| extendBtn | 是否具有扩展功能，true/false | Boolean | false |