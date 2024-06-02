import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Input, Table, Space, Popconfirm, message,Select, DatePicker, Tabs } from 'antd';
import { SearchOutlined, LeftOutlined } from '@ant-design/icons';
import './index.scss';
import SelectList from './components/SelectList';
import ApplyList from './components/ApplyList';

export default function WarehousingEntry({ value }) {
  const items = [
    {
      key: 'outbound-sign',
      label: '新建申领',
      children: <ApplyList />,
    },
    {
      key: 'select-list',
      label: '申领单',
      children: <SelectList />,
    },
  ]
  return (
    <div className="common-table">
      {/* <div className="common-table-header">
        <div className="common-table-title">
          <LeftOutlined />
          新建
        </div>
      </div> */}
      <div className="common-table-wrapper">
        <div className="wrapper-main-tabs">
          <Tabs destroyInactiveTabPane size="middle" defaultActiveKey="outbound-sign" items={items} style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  );
}

WarehousingEntry.propTypes = {
  value: PropTypes.string,
};

WarehousingEntry.defaultProps = {
  value: 'string data',
};
