import React, { useEffect, useState } from 'react'
import { Button, Modal, Table, Popconfirm } from 'antd';

const transportOrderStatus = {
  untreated: '未处理',
  connecting: '接驳中',
  transport: '运输中',
  failed: '失败',
  succeed: '已完成',
  canceled: '已取消',
};

const orderStatus = {
  processing: ['进行中', '#0062FF'],
  untreated: ['未处理', '#C9CDD4'],
  failed: ['失败', '#F53F3F'],
  canceled: ['已取消', '#C9CDD4'],
  partSucceed: ['部分完成', '#00B42A'],
  succeed: ['已完成', '#00B42A'],
};

const transportType = {
  machine: '机器人',
  people: '人工',
}

const SelectList = () => {
  const [dataList, setDataList] = useState([
    {
      oddNumber: 1,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'machine',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'processing',
    },
    {
      oddNumber: 1,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'machine',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'processing',
    },
    {
      oddNumber: 1,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'people',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'processing',
    },
    {
      oddNumber: 9,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'text',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'untreated',
    },
    {
      oddNumber: 9,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'text',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'untreated',
    },
    {
      oddNumber: 10,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'text',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'failed',
    },
    {
      oddNumber: 11,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'text',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'canceled',
    },
    {
      oddNumber: 12,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'text',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'partSucceed',
    },
    {
      oddNumber: 13,
      createTime: 'text',
      createPeople: 'text',
      operationRoom: 'text',
      name: 'text',
      shelfType: 'text',
      shelfName: 'text',
      transportType: 'text',
      realApplicationsNumber: 'text',
      applicationsNumber: 'text',
      number: 'text',
      id: 'text',
      orderStatus: 'succeed',
    },
  ]);
  // 分页相关
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  // 物资清单
  const [materialListVisible, setMaterialListVisible] = useState(false);
  const [materialList, setMaterialList] = useState([]);
  // 合并单元格相关数据
  const [arr, setArr] = useState([]);
  const [ind, setInd] = useState(0);

  // 合并单元格
  useEffect(() => {
    computedTable();
  }, []);

  const computedTable = () => {
    const newArr = [];
    let newInd = [];
    dataList.forEach((item, index) => {
      if (index === 0) {
        newArr.push(1);
        newInd = 0;
      } else {
        if (item.oddNumber === dataList[index - 1].oddNumber) {
          newArr[newInd] += 1;
          newArr.push(0);
        } else {
          newArr.push(1);
          newInd = index;
        }
      }
    });
    console.log(newArr, 'newArr');
    setArr(newArr);
    setInd(ind);
  };
  // 表头
  const columns = [
    {
      title: '单号',
      dataIndex: 'oddNumber',
      key: 'oddNumber',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
      // render: (operateTime) => <div>{moment(operateTime).format("YYYY-MM-DD HH:mm:ss")}</div>
    },
    {
      title: '创建人',
      dataIndex: 'createPeople',
      key: 'createPeople',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '手术室',
      dataIndex: 'operationRoom',
      key: 'operationRoom',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '出库人',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '货架类型',
      dataIndex: 'shelfType',
      key: 'shelfType',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '货架名称',
      dataIndex: 'shelfName',
      key: 'shelfName',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '预计申领数量',
      dataIndex: 'applicationsNumber',
      key: 'applicationsNumber',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '实际申领数量',
      dataIndex: 'realApplicationsNumber',
      key: 'realApplicationsNumber',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
    },
    {
      title: '运输单状态',
      dataIndex: 'transportStatus',
      key: 'transportStatus',
      width: 120,
    },
    {
      title: '运输方式',
      dataIndex: 'transportType',
      key: 'transportType',
      width: 120,
      render: (text) => {
        return <div>{transportType[text] || '-'}</div>;
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      type: 'action',
      width: 100,
      key: 'action',
      render: (text, record) => (
        <>
          {
            record.transportType === 'machine' ?
              <Button type="link" onClick={() => {}}>
                强制完成
              </Button>
              :
              <Button type="link" onClick={(e) => { e.preventDefault() }}>
                -
              </Button>
          }
        </>
      ),
    },
    {
      title: '订单状态',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      width: 120,
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
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
            ></div>
            {orderStatus[text][0]}
          </div>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      type: 'action',
      width: 350,
      key: 'id',
      onCell: (record, rowIndex) => {
        const row = arr[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
          rowSpan: row,
          colSpan: col,
        };
      },
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => { setMaterialListVisible(true) }}>
            物资清单
          </Button>
          {record.orderStatus === 'untreated' ? (
            <Popconfirm description="确定要取消订单吗?" onConfirm={() => {}} okText="确定" cancelText="取消">
              <Button type="link">取消订单</Button>
            </Popconfirm>
          ) : null}
          <Button type="link" onClick={() => {}}>
            重新下单
          </Button>
          {
            record.transportType === 'machine' ?
              <Button type="link" onClick={() => {}}>
                转人工运输
              </Button>
              :
              null
          }
        </>
      ),
    },
  ];
  const pageChange = (newpageNo, newpageSize) => {
    setPageNo(newpageNo);
    setPageSize(newpageSize);
  };
  const pagination = {
    pageNo,
    total,
    pageSize,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (newtotal) => `共 ${newtotal} 条`,
    pageSizeOptions: [10, 20, 50, 100],
    onChange: pageChange,
    size: 'default',
  };

  const handleCancel = () => {
    materialListVisible(false);
  };

  return (
    <div className="common-table-content">
      <Table
        scroll={{ height: 760 }}
        columns={columns}
        dataSource={dataList}
        pagination={pagination}
        bordered
        size="small"
      />
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

export default SelectList;
