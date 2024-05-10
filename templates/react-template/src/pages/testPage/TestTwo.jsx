import React, { useState, useEffect } from 'react';
import CommonTable from '../../components/CommonTable';
import { App } from 'antd';

function TestTwo() {
	const { message, notification } = App.useApp();

	const [dataList, setDataList] = useState([])
	// 分页相关数据
	const [current, setCurrent] = useState(1)
	const [pageSize, setPageSize] = useState(10)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		// 获取入库订单列表
		getDataList({pageCurrent: current, pageSize})
	}, [current, pageSize])

	// 获取订单列表
	const getDataList = (params) => {
		
	}

	const pageChange = (page, pageSize) => {
		setCurrent(page)
		setPageSize(pageSize)
	}

	// 表格每列信息
	const columns = [
		{
			title: '入库单号',
			dataIndex: 'code',
			key: 'code',
		},
		{
			title: '创建人',
			dataIndex: 'createUserName',
			key: 'createUserName',
		},
		{
			title: '创建时间',
			dataIndex: 'createTime',
			key: 'createTime',
		},
		{
			title: '运输方式',
			dataIndex: 'transportType',
			key: 'transportType',
		},
		{
			title: '状态',
			key: 'state',
			dataIndex: 'state',
		},
	];

	return (
		<CommonTable columns={columns} dataList={dataList} total={total} current={current} pageSize={pageSize} pageChange={pageChange} />
	);
}

export default TestTwo;
