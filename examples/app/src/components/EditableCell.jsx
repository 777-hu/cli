import React, { useEffect, useState } from 'react';
import {  Button, Input, Table, Typography, InputNumber, Popconfirm, Form, App, Select } from 'antd';
import {SearchOutlined, PlusOutlined} from '@ant-design/icons';

// 表格中输入框
export const EditableCell = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	options,
	disabled,
	...restProps
  }) => {
	
	const inputNode = (inputType) => {
		switch (inputType) {
			case 'text':
				return <Input disabled={disabled && record.id !== -1} />;
			case 'select':
				return <Select
					disabled={disabled && record.id !== -1}
					placeholder="请选择"
					allowClear
					options={options}
				/>;
			default:
				return <Input />;
		}
	}

	const rulesNode = dataIndex === 'telephone' ? {
		pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
		message: '请填写正确手机号!',
	}
	: {}
	return (
	  <td {...restProps}>
		{editing ? (
		  <Form.Item
			name={dataIndex}
			style={{
			  	margin: 0,
			}}
			rules={[
				{
					required: true,
					message: `请输入${title}!`,
				},
				rulesNode
			]}
		  >
			{inputNode(inputType)}
		  </Form.Item>
		) : (
		  children
		)}
	  </td>
	);
};