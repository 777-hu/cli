import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ConfigProvider, DatePicker, Pagination } from 'antd';
import { imageUrl } from './constants/Resources';
import MessageCenterAlert from './components/MessageCenterAlert';
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
import './index.scss';

const { RangePicker } = DatePicker;
const readKey = {
  "ALL": null,
  "UNREAD": false,
  "ISREAD": true,
}

export default function MessageCenter({ value }) {
  const {total, size: pageSize, records } = value
  const [activeKey, setActiveKey] = useState("ALL");
  // 分页相关
  const [pageNo, setPageNo] = useState(1)
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    let params = {
      ...dateRange,
      pageNo,
      pageSize,
      isRead: readKey[activeKey]
    }
    getMessageData(params)
  }, [dateRange, pageNo, activeKey])

  const getMessageData = (params) => {
  }

  const changeTab = (key) => {
    setPageNo(1)
    setActiveKey(key);
  }

  // 时间范围改变
  const dateRangeChange = (date, dateString) => {
    setPageNo(1)
    setDateRange({
      startDate: dateString?.[0],
      endDate: dateString?.[1],
    });
  };

  const allMessageRead = () => {
    if(records.length === 0) return;
  }

  return (
    <ConfigProvider 
      locale={locale} 
    >
      <div className='message-center'>
        <div className='message-center-tabs'>
          <div className='message-center-tabs-left'>
            <div onClick={() => changeTab('ALL')} className={`message-center-tabs-item ${activeKey === 'ALL'? 'checked':''}`}>全部</div>
            <div onClick={() => changeTab('UNREAD')} className={`message-center-tabs-item ${activeKey === 'UNREAD'? 'checked':''}`}>未读</div>
            <div onClick={() => changeTab('ISREAD')} className={`message-center-tabs-item ${activeKey === 'ISREAD'? 'checked':''}`}>已读</div>
          </div>
          <div onClick={allMessageRead} className={`message-center-tabs-right ${records.length === 0 ? 'no-data' : ''}`}>全部已读</div>
        </div>
        <div className="message-center-picker">
          <RangePicker
            showTime
            onChange={dateRangeChange}
            format={'YYYY-MM-DD HH:mm'}
          />
        </div>
        {
          records.length === 0 ?
          <div className='message-center-empty'>
            <img className='message-center-empty-image' src={imageUrl.EMPTY} />
          </div>
          :
          <>
            <div className='message-center-content'>
              {
                records.map(item => {
                  return (
                    <MessageCenterAlert item={item} />
                  )
                })
              }
            </div>
            <div className='message-center-pagination'>
              {total > 5 && (
                <Pagination
                  current={pageNo}
                  pageSize={pageSize}
                  total={total}
                  onChange={(current) =>
                    setPageNo(current)
                  }
                  showJump={false}
                  showSizeChanger={false}
                  totalRender={(total) => `共${total}条`}
                ></Pagination>
              )}
            </div>
          </>
        }
      </div>
    </ConfigProvider>
  );
}

MessageCenter.propTypes = {
  value: PropTypes.string,
};

MessageCenter.defaultProps = {
  value: {
    "current": 1,
    "hitCount": false,
    "optimizeCountSql": true,
    "orders": [],
    "pages": 3,
    "records": [
        {
            "content": "[{\"days\": 13, \"packName\": \"20240606164416930无菌包1\"}, {\"days\": 0, \"packName\": \"20240607150625444无菌包2\"}, {\"days\": 19, \"packName\": \"20240612141528148无菌包5\"}, {\"days\": 18, \"packName\": \"20240611112330769无菌包4\"}]",
            "createTime": "2024-06-13T09:27:37",
            "id": "1801063842941710338",
            "isRead": false,
            "showMessage": "20240606164416930无菌包1、20240607150625444无菌包2、20240612141528148无菌包5、20240611112330769无菌包4临期失效，请及时回收处理！",
            "type": "ExpirationWarn",
            "updateTime": "2024-06-13T09:27:37"
        },
        {
            "content": "[\"无菌包灭菌质量抽查的抽查日期为2024年06月13日，请及时进行质控抽查！\", \"无菌包灭菌质量抽查的抽查日期为2024年06月13日，请及时进行质控抽查！\"]",
            "createTime": "2024-06-13T09:27:37",
            "id": "1801063843365335042",
            "isRead": false,
            "showMessage": "无菌包灭菌质量抽查的抽查日期为2024年06月13日，请及时进行质控抽查！无菌包灭菌质量抽查的抽查日期为2024年06月13日，请及时进行质控抽查！",
            "type": "QualitySpotWarn",
            "updateTime": "2024-06-13T09:27:37"
        },
        {
            "content": "\"清洗设备3、清洗设备4、清洗设备8、清洗设备9、清洗设备10、清洗设备11、清洗设备12、灭菌设备2、灭菌设备1、灭菌程序4的保养日期为2024年06月13日，请及时进行保养！\"",
            "createTime": "2024-06-13T09:27:37",
            "id": "1801063844564905985",
            "isRead": false,
            "showMessage": "清洗设备3、清洗设备4、清洗设备8、清洗设备9、清洗设备10、清洗设备11、清洗设备12、灭菌设备2、灭菌设备1、灭菌程序4的保养日期为2024年06月13日，请及时进行保养！",
            "type": "EquipmentUpkeepWarn",
            "updateTime": "2024-06-13T09:27:37"
        },
        {
            "content": "\"请及时清洗ccc1无菌包6\"",
            "createTime": "2024-06-12T17:29:15",
            "id": "1800822660907085826",
            "isRead": false,
            "showMessage": "请及时清洗ccc1无菌包6",
            "type": "WashWarn",
            "updateTime": "2024-06-12T17:29:15"
        },
        {
            "content": "\"请及时灭菌20240612162944407无菌包1\"",
            "createTime": "2024-06-12T17:07:53",
            "id": "1800817285772271618",
            "isRead": false,
            "showMessage": "请及时灭菌20240612162944407无菌包1",
            "type": "SterileWarn",
            "updateTime": "2024-06-12T17:07:53"
        },
        {
            "content": "\"请及时清洗aaa1无菌包1\"",
            "createTime": "2024-06-12T15:14:38",
            "id": "1800788783547232257",
            "isRead": false,
            "showMessage": "请及时清洗aaa1无菌包1",
            "type": "WashWarn",
            "updateTime": "2024-06-12T15:14:38"
        },
        {
            "content": "\"请及时清洗20240611142439227无菌包1\"",
            "createTime": "2024-06-12T14:18:38",
            "id": "1800774690715152386",
            "isRead": false,
            "showMessage": "请及时清洗20240611142439227无菌包1",
            "type": "WashWarn",
            "updateTime": "2024-06-12T14:18:38"
        },
        {
            "content": "\"请及时清洗20240611142433414无菌包1\"",
            "createTime": "2024-06-12T14:18:08",
            "id": "1800774564839895042",
            "isRead": false,
            "showMessage": "请及时清洗20240611142433414无菌包1",
            "type": "WashWarn",
            "updateTime": "2024-06-12T14:18:08"
        },
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
        }
    ],
    "searchCount": true,
    "size": 10,
    "total": 30
  },
};
