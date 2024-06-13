# MessageBox

<font size=4 face="微软雅黑">简介：这是钛米前端物料库中消息盒子，可使用命令create-tmi addComponent进行引入</font>

```jsx
import React from 'react'
import { MessageBox } from 'tmi-material';

const timeOutReminder = {
	'LostInstrument': "回收器械丢损提醒",
	"ExpirationWarn": "无菌包临期预警",
	"RecoveryWarn": "回收超时提醒",
	"WashWarn": "清洗超时提醒",
	"SterileWarn": "灭菌超时提醒",
	"SterileAuditWarn": "灭菌审核超时提醒",
	"WashAuditWarn": "清洗审核超时提醒",
	"AnnounceSet": "公告提醒",
	"QualitySpotWarn": "质控抽查提醒",
	"EquipmentUpkeepWarn": "设备保养提醒",
	"WashFailWarn": "清洗不合格提醒",
}

const mockData = {
    "total": 22,
    "data": [
      {
          "content": "[{\"days\": 14, \"packName\": \"20240606164416930无菌包1\"}, {\"days\": 0, \"packName\": \"20240607150625444无菌包2\"}, {\"days\": 19, \"packName\": \"20240611112330769无菌包4\"}]",
          "createTime": "2024-06-12T09:31:05",
          "id": "1800702328191799297",
          "isRead": false,
          "showMessage": "20240606164416930无菌包1、20240607150625444无菌包2、20240611112330769无菌包4临期失效，请及时回收处理！",
          "type": "ExpirationWarn",
          "updateTime": "2024-06-12T09:31:05"
      },
      {
          "content": "[\"无菌包灭菌质量抽查的抽查日期为2024年06月12日，请及时进行质控抽查！\"]",
          "createTime": "2024-06-12T09:31:05",
          "id": "1800702328485400578",
          "isRead": false,
          "showMessage": "无菌包灭菌质量抽查的抽查日期为2024年06月12日，请及时进行质控抽查！",
          "type": "QualitySpotWarn",
          "updateTime": "2024-06-12T09:31:05"
      },
      {
          "content": "\"清洗设备5、清洗设备10、清洗设备11、灭菌设备1的保养日期为2024年06月12日，请及时进行保养！\"",
          "createTime": "2024-06-12T09:31:05",
          "id": "1800702329278124034",
          "isRead": false,
          "showMessage": "清洗设备5、清洗设备10、清洗设备11、灭菌设备1的保养日期为2024年06月12日，请及时进行保养！",
          "type": "EquipmentUpkeepWarn",
          "updateTime": "2024-06-12T09:31:05"
      },
      {
          "content": "\"请及时回收20240611142439227无菌包1、20240611142433414无菌包1\"",
          "createTime": "2024-06-11T15:37:10",
          "id": "1800432067445915649",
          "isRead": false,
          "showMessage": "请及时回收20240611142439227无菌包1、20240611142433414无菌包1",
          "type": "RecoveryWarn",
          "updateTime": "2024-06-11T15:37:10"
      },
      {
          "content": "\"ffgf\"",
          "createTime": "2024-06-11T14:01:44",
          "id": "1800408051746271233",
          "isRead": false,
          "showMessage": "ffgf",
          "type": "AnnounceSet",
          "updateTime": "2024-06-11T14:01:44"
      },
      {
          "content": "{\"washBatch\": \"20240611135523330\", \"deviceName\": \"444\", \"operateRecords\": [{\"id\": \"1800406454504955907\", \"cost\": 1.0, \"detail\": \"{\\\"batchNum\\\":\\\"20240611135523330\\\",\\\"createTime\\\":\\\"2024-06-11T13:55:23\\\",\\\"deviceId\\\":\\\"1793929103646638081\\\",\\\"id\\\":\\\"1800406454437847041\\\",\\\"status\\\":\\\"Fail\\\",\\\"updateTime\\\":\\\"2024-06-11T14:00:21\\\",\\\"washAuditId\\\":\\\"1795717145269014530\\\",\\\"washDate\\\":\\\"2024-06-11T13:55:23\\\",\\\"washDuration\\\":20,\\\"washIndex\\\":5,\\\"washProgress\\\":\\\"1784412225492443138\\\",\\\"washType\\\":\\\"MachineWash\\\",\\\"washResult\\\": \\\"Pass\\\", \\\"allocationResult\\\": \\\"Pass\\\", \\\"packageDimension\\\": true}\", \"status\": \"Recovered\", \"typeId\": \"1788524918902083586\", \"modelId\": \"1795398674782031874\", \"deviceId\": \"1793929103646638081\", \"washType\": \"MachineWash\", \"imageData\": \"data:image/png;base64,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tWlCZX/jE9mkF/OiFEME3k0ECgRx/4Kqaqpzsg6Y/G+t9mVk0tD0wr9WsnWc+xfvd1Pi9K5E4GwIcEEefPBXWLXqKixbvRYfveV2bPzt/djy9H/i63f+HFNakpgw9UIE1QH85Zd3w3fp7Uh17cCXb/kybrv5swhgJxKtd+LGxV489PTzWPfTn57Nc+keIvCuIJCdQU69+Wec9M3CKwdO4GMrFyBiAH9edx8W3vglHOk6jRUzAlj3rdvgmXsDPrFmKTq2rMP2o168tPl5TF52Mz51/SIMnujGpPpJ74rE6SWJwNkQKOkepPPIITRPGfvP92fzMnQPEXinESipIO+05Oh9iIAoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJScKAESRJQgxUtNgASRuryUnCgBEkSUIMVLTYAEkbq8lJwoARJElCDFS02ABJG6vJSc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\", \"imageName\": \"屏幕截图(1).png\", \"isOutside\": false, \"isSpecial\": true, \"packageId\": \"1795403435044442113\", \"washBatch\": \"20240611135523330\", \"createTime\": \"2024-06-11T13:55:23\", \"dressingId\": \"1796030411811741697\", \"operateNum\": 0, \"updateTime\": \"2024-06-11T13:55:23\", \"hasImplants\": true, \"operateTime\": \"2024-06-11T13:55:23\", \"operateType\": \"Wash\", \"packageName\": \"无菌包1\", \"isSelfBasket\": false, \"operateIndex\": 3, \"operateResult\": \"Pass\", \"operateUserId\": \"1795717145269014530\", \"sterilizeType\": \"HIGH_TEMPERATURE\", \"packageBarcode\": \"20240528183504442\", \"packageDetails\": [{\"id\": \"1778355872248307714\", \"num\": 1, \"name\": \"包明细1\", \"badNum\": 5, \"typeId\": \"1778355835271323650\", \"lostNum\": 5, \"typeName\": \"包明细类型1333\", \"isSpecial\": true, \"hasImplants\": true}], \"operateUserName\": \"root\", \"belongDepartmentId\": \"1795037787990704130\", \"packageAssembleBarcode\": \"20240611135547003\"}]}",
          "createTime": "2024-06-11T14:00:21",
          "id": "1800407703119917057",
          "isRead": false,
          "showMessage": "20240611135523330清洗批次自动审核不合格，请重新进行机洗登记",
          "type": "WashFailWarn",
          "updateTime": "2024-06-11T14:00:21"
      },
      {
          "content": "[{\"days\": 15, \"packName\": \"20240606164416930无菌包1\"}, {\"days\": 0, \"packName\": \"20240607150625444无菌包2\"}, {\"days\": 20, \"packName\": \"20240611112330769无菌包4\"}]",
          "createTime": "2024-06-11T13:59:00",
          "id": "1800407363880415233",
          "isRead": false,
          "showMessage": "20240606164416930无菌包1、20240607150625444无菌包2、20240611112330769无菌包4临期失效，请及时回收处理！",
          "type": "ExpirationWarn",
          "updateTime": "2024-06-11T13:59:00"
      },
      {
          "content": "[\"无菌包灭菌质量抽查的抽查日期为2024年06月11日，请及时进行质控抽查！\"]",
          "createTime": "2024-06-11T13:59:00",
          "id": "1800407364228542465",
          "isRead": false,
          "showMessage": "无菌包灭菌质量抽查的抽查日期为2024年06月11日，请及时进行质控抽查！",
          "type": "QualitySpotWarn",
          "updateTime": "2024-06-11T13:59:00"
      },
      {
          "content": "\"清洗设备2、清洗设备7、清洗设备10、清洗设备11、灭菌设备2、灭菌设备1、灭菌设备7的保养日期为2024年06月11日，请及时进行保养！\"",
          "createTime": "2024-06-11T13:59:00",
          "id": "1800407364744441857",
          "isRead": false,
          "showMessage": "清洗设备2、清洗设备7、清洗设备10、清洗设备11、灭菌设备2、灭菌设备1、灭菌设备7的保养日期为2024年06月11日，请及时进行保养！",
          "type": "EquipmentUpkeepWarn",
          "updateTime": "2024-06-11T13:59:00"
      },
      {
          "content": "\"bbb\"",
          "createTime": "2024-06-11T13:56:46",
          "id": "1800406801956904961",
          "isRead": false,
          "showMessage": "bbb",
          "type": "AnnounceSet",
          "updateTime": "2024-06-11T13:56:46"
      },
      {
          "content": "\"aaa\"",
          "createTime": "2024-06-11T13:56:31",
          "id": "1800406738992013313",
          "isRead": false,
          "showMessage": "aaa",
          "type": "AnnounceSet",
          "updateTime": "2024-06-11T13:56:31"
      },
      {
          "content": "[{\"detail\": [{\"badNum\": 5, \"lostNum\": 5, \"equipment\": \"包明细1\"}], \"packName\": \"20240611135547003无菌包1\"}]",
          "createTime": "2024-06-11T13:55:47",
          "id": "1800406553767354371",
          "isRead": false,
          "showMessage": "20240611135547003无菌包1：包明细1：丢失5，损坏5；",
          "type": "LostInstrument",
          "updateTime": "2024-06-11T13:55:47"
      },
      {
          "content": "\"请及时灭菌20240531180701586无菌包1\"",
          "createTime": "2024-06-11T13:55:46",
          "id": "1800406550562906114",
          "isRead": false,
          "showMessage": "请及时灭菌20240531180701586无菌包1",
          "type": "SterileWarn",
          "updateTime": "2024-06-11T13:55:46"
      },
      {
          "content": "\"请及时清洗审核20240531180701586无菌包1\"",
          "createTime": "2024-06-11T13:55:46",
          "id": "1800406550625820674",
          "isRead": false,
          "showMessage": "请及时清洗审核20240531180701586无菌包1",
          "type": "WashAuditWarn",
          "updateTime": "2024-06-11T13:55:46"
      },
      {
          "content": "\"请及时清洗20240530170723094无菌包1、20240531180701586无菌包1\"",
          "createTime": "2024-06-11T13:55:16",
          "id": "1800406424717008897",
          "isRead": false,
          "showMessage": "请及时清洗20240530170723094无菌包1、20240531180701586无菌包1",
          "type": "WashWarn",
          "updateTime": "2024-06-11T13:55:16"
      },
      {
          "content": "\"请及时回收20240611134554291无菌包1、20240611134547056无菌包1\"",
          "createTime": "2024-06-11T13:54:16",
          "id": "1800406173008437249",
          "isRead": false,
          "showMessage": "请及时回收20240611134554291无菌包1、20240611134547056无菌包1",
          "type": "RecoveryWarn",
          "updateTime": "2024-06-11T13:54:16"
      },
      {
          "content": "\"请及时审核20240611134646264灭菌批次的灭菌质量\"",
          "createTime": "2024-06-11T13:47:16",
          "id": "1800404411430117378",
          "isRead": false,
          "showMessage": "请及时审核20240611134646264灭菌批次的灭菌质量",
          "type": "SterileAuditWarn",
          "updateTime": "2024-06-11T13:47:16"
      },
      {
          "content": "\"请及时灭菌20240528182711491无菌包1、20240604162328303无菌包1\"",
          "createTime": "2024-06-11T13:45:16",
          "id": "1800403908319158274",
          "isRead": false,
          "showMessage": "请及时灭菌20240528182711491无菌包1、20240604162328303无菌包1",
          "type": "SterileWarn",
          "updateTime": "2024-06-11T13:45:16"
      },
      {
          "content": "\"请及时清洗审核20240528182711491无菌包1、20240604162328303无菌包1\"",
          "createTime": "2024-06-11T13:45:16",
          "id": "1800403908319158275",
          "isRead": false,
          "showMessage": "请及时清洗审核20240528182711491无菌包1、20240604162328303无菌包1",
          "type": "WashAuditWarn",
          "updateTime": "2024-06-11T13:45:16"
      },
      {
          "content": "\"请及时清洗20240528182711491无菌包1、20240604162328303无菌包1\"",
          "createTime": "2024-06-11T13:43:16",
          "id": "1800403404977512449",
          "isRead": false,
          "showMessage": "请及时清洗20240528182711491无菌包1、20240604162328303无菌包1",
          "type": "WashWarn",
          "updateTime": "2024-06-11T13:43:16"
      },
      {
          "content": "\"请及时审核20240611112435250灭菌批次的灭菌质量\"",
          "createTime": "2024-06-11T13:42:46",
          "id": "1800403279169363970",
          "isRead": false,
          "showMessage": "请及时审核20240611112435250灭菌批次的灭菌质量",
          "type": "SterileAuditWarn",
          "updateTime": "2024-06-11T13:42:46"
      },
      {
          "content": "\"aaaaa\"",
          "createTime": "2024-06-11T11:22:53",
          "id": "1800368074845028354",
          "isRead": false,
          "showMessage": "aaaaa",
          "type": "AnnounceSet",
          "updateTime": "2024-06-11T11:22:53"
      }
    ]
  }

export default () => {
	let data = mockData.data.map(item => ({ ...item, type: timeOutReminder[item.type] }))
	const newData = {
		total: mockData.total,
		data
	}
	return <MessageBox value={newData} />
}
```