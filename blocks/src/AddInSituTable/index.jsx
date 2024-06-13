import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Table,
  Typography,
  InputNumber,
  Popconfirm,
  Form,
  Search,
  App,
} from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { EditableCell } from "./components/EditableCell";
import './index.scss';

const AddInSituTable = ({ value }) => {
	const { message, modal, notification } = App.useApp();
	const [form] = Form.useForm();
	const [tableDatalist, setTableDatalist] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [total, setTotal] = useState(0);
	// 当前编辑的key
	const [editingKey, setEditingKey] = useState("");
	
	const isEditing = (record) => record.id === editingKey;

	// 创建新物资大类
	const creact = () => {
		if (tableDatalist[0]?.id === -1) {
			
		//   return message.warning("请完成当前新建,后再点击新建");
		}
		const newData = [
		  {
				serialNo: '',
				name: "",
				warehouseId: '',
				warehouseName: '',
				id: -1,
		  },
		  ...tableDatalist,
		];
		setTableDatalist(newData);
		setEditingKey("");
		edit({
			serialNo: '',
			name: "",
			warehouseId: '',
			warehouseName: '',
			id: -1,
		});
	  };

	// 删除
	const deleteById = (id) => {
		// message.success('删除成功')
		/**
		 * mock删除逻辑
		 */
		const newData = [...tableDatalist];
		const index = newData.findIndex((item) => item.id === id);
		newData.splice(index, 1);
		setTableDatalist(newData)
	};
	
	// 编辑
	const edit = (record) => {
		form.setFieldsValue({
			serialNo: '',
			name: "",
			warehouseId: '',
			warehouseName: '',
			...record,
		});
		setEditingKey(record.id);
	};

	// 取消
	const cancel = (record) => {
		let cancelList = tableDatalist.filter((item) => item.id !== -1);
		setTableDatalist(cancelList);
		setEditingKey("");
	};

	// 保存
	const save = async (record) => {
		try {
			const row = await form.validateFields();
			const newData = [...tableDatalist];
			const newRow = { ...row, id: Math.random() * 10 };
			if (record.id === -1) {
				// 新建后保存
				/**
				 * 此逻辑为mock逻辑，项目开发可以直接使用重新请求替换
				 */
				const index = newData.findIndex((item) => item.id === -1);
				newData.splice(index, 1, newRow);
				setTableDatalist(newData)
				setEditingKey("");
			} else {
				// 编辑后保存
				/**
				 * 此逻辑为mock逻辑，项目开发可以直接使用重新请求替换
				 */
				const index = newData.findIndex((item) => item.id === editingKey);
				newData.splice(index, 1, row);
				setTableDatalist(newData)
				setEditingKey("");
			}
		} catch (errInfo) {
			console.log("Validate Failed:", errInfo);
		}
	};

	// 搜索
	const onSearch = (value) => {
		setPageNo(1)
		setSearchData(value)
	}

	// 表头
	const columns = [
		{
		  title: "层架类型",
		  dataIndex: "name",
		  key: "name",
		  editable: true,
		},
		{
		  title: "绑定仓库 ",
		  dataIndex: "warehouseId",
		  key: "warehouseId",
		  inputType: 'select',
		  options: [{ label: 1, value: '112sad' }],
		  editable: true,
		},
		{
		  title: "操作",
		  dataIndex: "operation",
		  key: "operation",
		  render: (_, record) => {
			const editable = isEditing(record);
			return editable ? (
			  <span>
				<Typography.Link
				  onClick={() => save(record)}
				  style={{
					marginRight: 8,
				  }}
				>
				  保存
				</Typography.Link>
				<Typography.Link
				  onClick={() => cancel(record)}
				  style={{
					marginRight: 8,
				  }}
				>
				  取消
				</Typography.Link>
			  </span>
			) : (
			  <span>
				<Typography.Link
				  disabled={editingKey !== ""}
				  onClick={() => edit(record)}
				>
				  编辑
				</Typography.Link>
				<Popconfirm
				  title="删除货架组"
				  description="确定删除此货架组吗?"
				  onConfirm={() => deleteById(record.id)}
				  okText="确定"
				  cancelText="取消"
				>
				  <Button disabled={editingKey !== ""} type="link">
					删除
				  </Button>
				</Popconfirm>
			  </span>
			);
		  },
		},
	];

	// 根据colums处理编辑字段信息（例）
	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
				...col,
				onCell: (record) => ({
					record,
					inputType: col.inputType || 'text',
					options: col.options || [],
					dataIndex: col.dataIndex,
					title: col.title,
					editing: isEditing(record),
			}),
		};
	});

	const pageChange = (pageNo, pageSize) => {
		setPageNo(pageNo);
		setPageSize(pageSize);
	};

	const pagination = {
		pageNo,
		total,
		pageSize,
		showQuickJumper: true,
		showSizeChanger: true,
		showTotal: (total) => `共 ${total} 条`,
		pageSizeOptions: [10, 20, 50, 100],
		onChange: pageChange,
		size: "default",
	};

	const handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
		// setFilterWarehouseId(filters.warehouseId ? filters.warehouseId[0]: '');
		setFilteredValue(filters)
	};

	return (
		<div className="content">
			<div className="common-table-header">
				<div className="common-table-title">原位新增表格</div>
				<Button
					className="common-table-button"
					type="primary"
					onClick={creact}
				>
					<>
					<PlusOutlined className="mr-8 " />
					新建
					</>
				</Button>
			</div>
			<div className="common-table-wrapper">
				<div className='common-table-relevance' style={{justifyContent: 'flex-end',}}>
					{/* <Search className='common-table-relevance-search' placeholder="请输入层" onSearch={onSearch} /> */}
				</div>
				<Form form={form} component={false}>
					<Table
						components={{
							body: {
								cell: EditableCell,
							},
						}}
						size="small"
						rowKey="id"
						columns={mergedColumns}
						dataSource={tableDatalist}
						// cellProps={cellProps} 
						pagination={pagination}
						// rowSelection={batch}
						onChange={handleChange}
						scroll={{
							scrollToFirstRowOnChange: true,
							y: "5.2rem",
						}}
					/>
				</Form>
			</div>
		</div>
	);
}

export default AddInSituTable;
