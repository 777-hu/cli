// import { Button, DatePicker, Icon, Pagination, Select, Table } from '@alifd/next'
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Popconfirm, Select, Space, Table, message, Modal } from 'antd';
import './index.scss';

const tableData1 = {
  dataSource: [],
  columns: [
    {
      title: 'ID号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '站点信息',
      dataIndex: 'stationId',
      key: 'stationId',
      render: (text, record, index) => {
        return positionMap[text];
      },
    },
    {
      title: '层数',
      dataIndex: 'powerLevel',
      key: 'powerLevel',
    },
    {
      title: '每层药盒数 ',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '状态 ',
      key: 'state',
      dataIndex: 'state',
      render: (text, record, index) => {
        return (
          <Space>
            <div className={`state ${text}`}></div>
            <span>{maps[text]}</span>
          </Space>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => {
        return (
          <Space size="small">
            <Button
              type="link"
              onClick={() => history.push({ pathname: 'equipment-form', query: { cabinetId: text } })}
            >
              编辑
            </Button>
            <Button
              type="link"
              onClick={() => history.push({ pathname: 'equipment-detail', query: { cabinetId: text } })}
            >
              查看配置
            </Button>
            <Popconfirm
              title="删除药柜"
              description="确定删除此药柜吗?"
              onConfirm={() => deleteCabinetById(text)}
              okText="确定"
              cancelText="取消"
            >
              <Button type="link" danger>
                删除
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ],
};
// 出入库统计
// const tableData = {
//   tableTitle: '出入库物资统计',
//   dataSource: [],
//   columns: [
//     {
//       title: '物资名称',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: '仓库',
//       dataIndex: 'warehouseId',
//       key: 'warehouseId',
//       render: (text, record, index) => {
//         return warehouseMap[text] || '-';
//       },
//     },
//     {
//       title: '入库数量',
//       dataIndex: 'entryNumber',
//       key: 'entryNumber',
//     },
//     {
//       title: '出库数量 ',
//       key: 'outNumber',
//       dataIndex: 'outNumber',
//     },
//     {
//       title: '当前库存',
//       dataIndex: 'currentNumber',
//       key: 'currentNumber',
//     },
//     {
//       title: '退库数量 ',
//       key: 'exitNumber',
//       dataIndex: 'exitNumber',
//     },
//   ],
// };

// 申领单
const orderStatus = {
  failed: ['失败', '#F53F3F'],
  canceled: ['已取消', '#C9CDD4'],
  partSucceed: ['部分完成', '#00B42A'],
  succeed: ['已完成', '#00B42A'],
};
const tableData = {
  tableTitle: '申领单',
  dataSource: [
    {
      status: 'succeed',
    },
  ],
  columns: [
    {
      title: '单号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '创建人',
      dataIndex: 'createName',
      key: 'createName',
    },
    {
      title: '手术室 ',
      key: 'operateId',
      dataIndex: 'operateId',
    },
    {
      title: '仓库',
      dataIndex: 'warehouseId',
      key: 'warehouseId',
    },
    {
      title: '货架组',
      key: 'shelfGroup',
      dataIndex: 'shelfGroup',
    },
    {
      title: '出库人',
      dataIndex: 'outName',
      key: 'outName',
    },
    {
      title: '预计出库数量',
      key: 'applicationsNumber',
      dataIndex: 'applicationsNumber',
    },
    {
      title: '实际出库数量',
      dataIndex: 'realApplicationsNumber',
      key: 'realApplicationsNumber',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (text, record) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 5px' }}>
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: `${orderStatus[text][1]}`,
                marginRight: '10px',
              }}
            >
              {' '}
            </div>
            {orderStatus[text][0]}
          </div>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      type: 'action',
      width: 100,
      key: 'action',
      render: (text, record) => (
        <Button type="link" onClick={() => {}}>
          物资清单
        </Button>
      ),
    },
  ],
};

const pageData = {
  pageNo: 1,
  pageSize: 10,
  total: 0,
};

const btnsAccess = ['add', 'export'];

const TableWithPage = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { batch = {}, relevance = true, pageProps = pageData, tableProps = tableData, btnsProps = btnsAccess } = props;
  const { columns, dataSource, cellProps = () => {}, tableTitle } = tableProps;
  const { pageNo, pageSize, total } = pageProps;
  // 物资清单
  const [materialListVisible, setMaterialListVisible] = useState(false);
  const [materialList, setMaterialList] = useState([]);

  const pagination = {
    pageNo,
    total,
    pageSize,
    showTotal: (total) => `共 ${total} 条`,
    pageSizeOptions: [10, 20, 50, 100],
    // onChange: pageChange,
    size: 'default',
  };

  const exportToExcel = () => {};

  const handleCancel = () => {
    materialListVisible(false);
  };

  return (
    <div className="common-table">
      <div className="common-table-header">
        <div className="common-table-title">{tableTitle}</div>
        <div className="common-table-buttons">
          {/* 按钮操作，比如新建/导出功能/...，不用可以删除 */}
          {btnsProps.includes('add') && (
            <Button className="common-table-button" type="primary" onClick={() => {}}>
              <>
                <PlusOutlined className="mr-8 " />
                新建
              </>
            </Button>
          )}
          {btnsProps.includes('export') && (
            <Button
              className="common-table-button"
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                exportToExcel();
              }}
            >
              导出
            </Button>
          )}
        </div>
      </div>
      <div className="common-table-wrapper">
        {/* table上方操作，不使用可进行删除 */}
        {relevance && (
          <div className="common-table-relevance">
            <div className="common-table-relevance-item">
              <DatePicker.RangePicker
                className="mr-16"
                format="YYYY-MM-DD"
                showTime={{ format: 'HH:mm' }}
                onChange={(value, dateString) => {
                  console.log('Selected Time: ', value, 'Formatted Selected Time: ', dateString);
                }}
                onOk={(v) => {}}
              />
            </div>
            <div className="common-table-relevance-item">
              仓库：
              <Select
                showSearch={false}
                style={{ width: '200px' }}
                defaultValue="clear"
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </div>
            <div className="common-table-relevance-item">
              货架组：
              <Select
                showSearch={false}
                defaultValue="clear"
                style={{ width: '200px' }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </div>
            <div className="common-table-relevance-item">
              手术室：
              <Select
                showSearch={false}
                defaultValue="clear"
                style={{ width: '200px' }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </div>
            <div className="common-table-relevance-item">
              创建人：
              <Select
                showSearch={false}
                defaultValue="clear"
                style={{ width: '200px' }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </div>
          </div>
        )}
        {/* 批量操作，不使用可进行删除 */}
        {batch && (
          <div className="common-table-batch">
            <div>
              <span>已选择 {1} 项</span>
              <span className="common-table-batch-button cancel" onClick={() => {}}>
                取消选择
              </span>
            </div>
            <div>
              <span className="common-table-batch-button" onClick={() => {}}>
                批量绑定尺码
              </span>
            </div>
          </div>
        )}
        <Table
          size="small"
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          cellProps={cellProps}
          pagination={pagination}
          rowSelection={batch}
          scroll={{
            scrollToFirstRowOnChange: true,
            y: 500,
          }}
        />
      </div>
      <div>
        <Modal
          open={materialListVisible}
          title={`${materialList?.title || ''}明细`}
          onOk={handleCancel}
          onCancel={handleCancel}
          centered
          width={'9.94rem'}
          footer={[
            <Button key="submit" type="primary" onClick={handleCancel}>
              知道了
            </Button>,
          ]}
        >
          {/* <Table
            size="small"
            rowKey="id"
            columns={columns}
            dataSource={materialList?.materialList}
            pagination={false}
            scroll={{
              scrollToFirstRowOnChange: true,
              y: '4.2rem',
            }}
          /> */}
        </Modal>
      </div>
    </div>
  );
};

export default TableWithPage;
