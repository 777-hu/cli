import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Table,
  Typography,
  InputNumber,
  Popconfirm,
  Form,
  App,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EditableCell } from "./components/EditableCell";
import manufacturerApi from "../../api/manufacturerApi.js";

function ManufacturerSetting() {
	const { message, modal, notification } = App.useApp();
	const [form] = Form.useForm();
	const [manufacturerList, setManufacturerList] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [total, setTotal] = useState(0);
	// 当前编辑的key
	const [editingKey, setEditingKey] = useState("");

	const isEditing = (record) => record.id === editingKey;

	useEffect(() => {
		setEditingKey("");
		loadManufacturerList({ pageCurrent: pageNo, pageSize });
	}, [pageSize, pageNo]);

	const loadManufacturerList = (params) => {
		// manufacturerApi
		// .loadManufacturerList(params)
		// .then((res) => {
		// 	if (res.code === 0) {
		// 	if (
		// 		Number(res.data.current) > Number(res.data.pages) &&
		// 		Number(res.data.pages) !== 0
		// 	) {
		// 		setPageNo(res.data.pages);
		// 		return;
		// 	}
		// 	setManufacturerList(res.data?.records);
		// 	setTotal(res.data.total);
		// 	} else {
		// 	}
		// })
		// .catch((err) => {});
	};

	const deleteManufacturerById = (id) => {
		manufacturerApi
		.deleteManufacturerById(id)
		.then((res) => {
			if (res.code === 0) {
			message.open({
				type: "success",
				content: "删除成功",
			});
			loadManufacturerList({ pageCurrent: pageNo, pageSize });
			} else {
			message.open({
				type: "error",
				content: res.message,
			});
			}
		})
		.catch((err) => {
			message.open({
			type: "error",
			content: "删除失败",
			});
		});
	};

	// 编辑
	const edit = (record) => {
		form.setFieldsValue({
		name: "",
		...record,
		});
		setEditingKey(record.id);
	};

	// 取消
	const cancel = (record) => {
		let cancelList = manufacturerList.filter((item) => item.id !== -1);
		setManufacturerList(cancelList);
		loadManufacturerList({ pageCurrent: pageNo, pageSize: pageSize });
		setEditingKey("");
	};

	// 保存
	const save = async (record) => {
		try {
		const row = await form.validateFields();
		const newData = { ...row, id: record.id };
		if (record.id === -1) {
			manufacturerApi
			.createManufacturer(row)
			.then((res) => {
				if (res.code === 0) {
				message.success("新建成功");
				} else {
				message.error(res.message);
				}
				loadManufacturerList({ pageCurrent: 1, pageSize: pageSize });
				setEditingKey("");
			})
			.catch((err) => {
				console.log("err", err);
				message.error(err.message);
				loadManufacturerList({ pageCurrent: 1, pageSize: pageSize });
				setEditingKey("");
			});
		} else {
			manufacturerApi
			.updateManufacturer(newData)
			.then((res) => {
				if (res.code === 0) {
				message.success("编辑成功");
				} else {
				message.error(res.message);
				}
				loadManufacturerList({ pageCurrent: pageNo, pageSize: pageSize });
				setEditingKey("");
			})
			.catch((err) => {
				console.log("err", err);
				message.error(err.message);
				loadManufacturerList({ pageCurrent: pageNo, pageSize: pageSize });
				setEditingKey("");
			});
		}
		} catch (errInfo) {
		console.log("Validate Failed:", errInfo);
		}
	};

	// 表头
	const columns = [
		{
		title: "名称",
		dataIndex: "name",
		key: "name",
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
				<Button type='text' onClick={() => cancel(record)}>取消</Button>
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
				title="删除厂商"
				description="确定删除此厂商吗?"
				onConfirm={() => deleteManufacturerById(record.id)}
				okText="确定"
				cancelText="取消"
				>
				<Button disabled={editingKey !== ""} type="link" danger>
					删除
				</Button>
				</Popconfirm>
			</span>
			);
		},
		},
	];

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

	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
		return col;
		}
		return {
		...col,
		onCell: (record) => ({
			record,
			inputType: "text",
			dataIndex: col.dataIndex,
			title: col.title,
			editing: isEditing(record),
		}),
		};
	});

	// 创建新物资大类
	const createNewManufacturer = () => {
		if (manufacturerList[0]?.id === -1) {
		return message.warning("请完成当前新建,后再点击新建");
		}
		const newData = [
		{
			name: "",
			id: -1,
		},
		...manufacturerList,
		];
		setManufacturerList(newData);
		setEditingKey("");
		edit({
		name: "",
		id: -1,
		});
	};

	return (
		<div className="content">
		<div className="common-table-header">
			<div className="common-table-title">厂商设置</div>
			<Button
			className="common-table-button"
			type="primary"
			onClick={createNewManufacturer}
			>
			<>
				<PlusOutlined className="mr-8 " />
				新建
			</>
			</Button>
		</div>
		<div className="common-table-wrapper">
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
				dataSource={manufacturerList}
				// cellProps={cellProps}
				pagination={pagination}
				// rowSelection={batch}
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

export default ManufacturerSetting;
