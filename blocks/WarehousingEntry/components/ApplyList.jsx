import React, { useEffect, useRef, useState } from 'react';
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Row, Select, Table, message } from 'antd';
import '../index.scss';

const { Search } = Input;

const EditableRow = ({ index, ...props }) => {
  return <tr {...props} />;
};


const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, signType, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const [number, setNumber] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    setNumber(record.number);
  };
  const save = async (e) => {
    try {
      let entryNumber = Math.round(Number(e.target.value));
      if (entryNumber > record.stockNum) {
        message.warning('出库数量不能大于库存数量');
        entryNumber = record.stockNum;
      }
      const values = {
        number: entryNumber || 1,
      };
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <InputNumber
        style={{ width: '180px' }}
        min={1}
        defaultValue={record.number}
        precision={0}
        ref={inputRef}
        onPressEnter={(e) => {
          save(e);
        }}
        onBlur={(e) => {
          save(e);
        }}
      />
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

// 传递左边的dataList,右边空图片的URL，左右两边的筛选项不需要的可以删除
const ApplyList = (props) => {
  const [searchForm] = Form.useForm();
  const [signForm] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [applyList, setApplyList] = useState([]);
  const [searchData, setSearchData] = useState({});
  const columns = [
    {
      title: '物资名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '规格',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '库存',
      dataIndex: 'stockNum',
      key: 'stockNum',
    },
  ];
  const [dataList, setDataList] = useState([
    {
      id: 1,
      key: '1',
      name: 'John Brown',
      stockNum: 32,
      number: 1,
    },
    {
      id: 2,
      key: '2',
      name: 'Jim Green',
      stockNum: 42,
      number: 1,
    },
    {
      id: 3,
      key: '3',
      name: 'Joe Black',
      stockNum: 32,
      number: 1,
    },
  ]);
  const applyColumns = [
    {
      title: '物资名称',
      dataIndex: 'name',
      width: 120,
      key: 'name',
    },
    {
      title: '规格',
      dataIndex: 'age',
      width: 120,
      key: 'age',
    },
    {
      title: '数量',
      type: 'input',
      dataIndex: 'number',
      key: 'number',
      width: 120,
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'id',
      type: 'action',
      width: 120,
      key: 'id',
      render: (text, record) => (
        <Button type="link" key={record.key} onClick={() => handleParentAction(record, record.key, record.id)}>
          删除
        </Button>
      ),
    },
  ];

  const handleParentAction = (record) => {
    setApplyList((prevApplyList) => {
      return prevApplyList.filter((item) => item.id !== record.id);
    });
    // 触发左侧表格行的选中状态
    const newSelectedRowKeys = selectedRowKeys.filter((key) => key !== record.key);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  // 可编辑表格
  const handleSave = (row) => {
    const newData = [...applyList];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setApplyList(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const applyColumns1 = applyColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const rowSelection = {
    onChange: (newSelectedRowKeys, selectedRows, preserveSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    onSelect: (record, selected, selectedRows, nativeEvent) => {
      if (selected) {
        const allSelectedData = applyList.concat(record);
        setApplyList(allSelectedData);
        setSelectedRowKeys(selectedRowKeys.concat(record.id));
      } else {
        const selectedRow = applyList.filter((item) => item.id !== record.id);
        setSelectedRowKeys(selectedRowKeys.filter((key) => key !== record.id));
        setApplyList(selectedRow);
      }
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      if (selected) {
        const selectIds = selectedRows.map((item) => item.id);
        setSelectedRowKeys(selectedRowKeys.concat(selectIds));
        // 累加选择的数据
        const allSelectedData = applyList.concat(selectedRows);
        setApplyList(allSelectedData);
      } else {
        const selectIds = changeRows.map((item) => item.id);
        const newSelectIds = selectedRowKeys.filter((item) => !selectIds.includes(item));
        const newSelectData = applyList.filter((item) => !selectIds.includes(item.id));
        setSelectedRowKeys(newSelectIds);
        setApplyList(newSelectData);
      }
    },
  };

  const onFinish = () => {};
  const onFinishSign = () => {};

  return (
    // <div className='apply-list'>
    <div className="common-table-content">
      <div className="common-table-content-separate">
        <div className="select-list">
          <div className="select-list-title">可选耗材</div>
          <div className="select-list-relevance">
            <Form form={searchForm} name="searchForm" onFinish={onFinish}>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }} className="select-list-relevance-row">
                <div style={{ display: 'flex' }}>
                  <Form.Item
                    label="货架类型"
                    name="type"
                    style={{ marginRight: '0.24rem' }}
                    rules={[
                      {
                        required: true,
                        message: '请选择货架类型!',
                      },
                    ]}
                  >
                    <Radio.Group onChange={(value) => {}}>
                      <Radio value={1}>人工货架</Radio>
                      <Radio value={2}>自动货架</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    label="仓库"
                    name="warehouseId"
                    rules={[
                      {
                        required: true,
                        message: '请选择仓库!',
                      },
                    ]}
                    style={{ marginRight: '0.24rem' }}
                  >
                    <Select allowClear placeholder="请选择" style={{ width: 120 }}>
                      <Select.Option value={1}>仓库1</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="warehouseId" style={{ marginRight: '0.24rem' }}>
                    <Select allowClear placeholder="请选择" style={{ width: 120 }}>
                      <Select.Option value={1}>仓库1</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Checkbox>隐藏0库存品类</Checkbox>
                </div>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }} className="select-list-relevance-row">
                <div style={{ display: 'flex' }}>
                  <Form.Item label="供应商" name="warehouseId" style={{ marginRight: '0.24rem' }}>
                    <Select allowClear placeholder="请选择" style={{ width: 120 }}>
                      <Select.Option value={1}>仓库1</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="厂商" name="warehouseId" style={{ marginRight: '0.24rem' }}>
                    <Select allowClear placeholder="请选择" style={{ width: 120 }}>
                      <Select.Option value={1}>仓库1</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="name" style={{ marginRight: '0.24rem' }}>
                    <Search style={{ width: '180px' }} placeholder="请输入物资名称/ID" />
                  </Form.Item>
                </div>
              </Row>
            </Form>
          </div>
          <div className="select-list-table">
            <Table
              pagination={false}
              scroll={{ height: 760 }}
              columns={columns}
              dataSource={dataList}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys,
                ...rowSelection,
              }}
            />
          </div>
        </div>

        <div className="apply-list">
          <div className="apply-list-title">
            <div>
              XX单<span>xx人：库管4</span>
            </div>
            <div>
              <Button
                type="link"
                onClick={() => {
                  searchForm.resetFields();
                  signForm.resetFields();
                }}
              >
                全部清空
              </Button>
            </div>
          </div>
          <div className="apply-list-relevance">
            <Form form={signForm} name="signForm" onFinish={onFinishSign}>
              <Row className="select-list-relevance-row">
                <div style={{ display: 'flex' }}>
                  <Form.Item
                    label="手术室"
                    name="operationId"
                    rules={[
                      {
                        required: true,
                        message: '请选择手术室!',
                      },
                    ]}
                    style={{ marginRight: '0.24rem' }}
                  >
                    <Select allowClear name="operationId" placeholder="请选择" style={{ width: 120 }}>
                      <Select.Option value={1}>手术室1</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="手术单号" name="operationNumber" style={{ marginRight: '0.24rem' }}>
                    <Input className="mr-16" placeholder="请输入" name="operationNumber" style={{ width: 120 }} />
                  </Form.Item>
                  <Form.Item label="预约时间" name="operationDate" style={{ marginRight: '0.24rem' }}>
                    <DatePicker style={{ width: 240 }} name="operationDate" />
                  </Form.Item>
                </div>
              </Row>
            </Form>
          </div>
          {applyList.length == 0 ? (
            <div className="apply-list-table-empty">
              <div>
                <img src="https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images/empty-status-application.png" />
                <div className="apply-list-table-empty-tip">从左侧选择耗材添加到申领单</div>
              </div>
            </div>
          ) : (
            <Table
              className="apply-list-table"
              pagination={false}
              size="small"
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              scroll={{ height: 760 }}
              columns={applyColumns1}
              dataSource={applyList}
            />
          )}
          <div className="apply-list-bottom">
            <Button
              disabled={applyList.length == 0}
              type="primary"
              onClick={() => {
                console.log(signForm.getFieldsValue(), applyList);
                message.success('提交成功');
              }}
            >
              提交入库单
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyList;
