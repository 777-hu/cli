# TableWithPage

<font size=4 face="微软雅黑">简介：这是钛米前端物料库中表格区块，可使用AppWorks进行引入</font>

## 基础样式
<code src="./src/index.jsx"></code>

## 配合导航区块使用
```jsx
import React from 'react'
import TableWithPage from './src'
import TmiNavigate from '../Navigate/src'
export default () => {
	const tableData = {
		dataSource: [],
		columns: [
			{ title: '设备类型', dataIndex: 'type', },
			{ title: '设备SN号', dataIndex: 'sn' },
			{ title: '名称', dataIndex: 'name' },
			{ title: '所属手术室', dataIndex: 'operatingRoomName' },
			{ title: '所属位置', dataIndex: 'location' },
			{ title: '状态', dataIndex: 'status' },
			{ title: '操作',  }
		]
	}

	const pageData = {
		current: 1,
		pageSize: 10,
		total: 0,
	}
	return <TmiNavigate>
		<TableWithPage batch={{}} tableData={tableData} pageData={pageData}/>
	</TmiNavigate>
}
```

## 添加批量选择
```jsx
import React from 'react'
import TableWithPage from './src'
export default () => {
	const tableData = {
		dataSource: [],
		columns: [
			{ title: '设备类型', dataIndex: 'type', },
			{ title: '设备SN号', dataIndex: 'sn' },
			{ title: '名称', dataIndex: 'name' },
			{ title: '所属手术室', dataIndex: 'operatingRoomName' },
			{ title: '所属位置', dataIndex: 'location' },
			{ title: '状态', dataIndex: 'status' },
			{ title: '操作',  }
		]
	}

	const pageData = {
		current: 1,
		pageSize: 10,
		total: 0,
	}

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
		  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: (record) => ({
		  disabled: record.name === 'Disabled User',
		  // Column configuration not to be checked
		  name: record.name,
		}),
	  };
	return <TableWithPage batch={rowSelection} tableData={tableData} pageData={pageData}/>
}
```

## 表格上方其他关联操作

```jsx
import React from 'react'
import TableWithPage from './src'

export default () => {
	const tableData = {
		dataSource: [],
		columns: [
			{ title: '设备类型', dataIndex: 'type', },
			{ title: '设备SN号', dataIndex: 'sn' },
			{ title: '名称', dataIndex: 'name' },
			{ title: '所属手术室', dataIndex: 'operatingRoomName' },
			{ title: '所属位置', dataIndex: 'location' },
			{ title: '状态', dataIndex: 'status' },
			{ title: '操作',  }
		]
	}

	const pageData = {
		current: 1,
		pageSize: 10,
		total: 0,
	}
	return <TableWithPage relevance={true} tableData={tableData} pageData={pageData}/>
}
```

| 参数        | 说明                                                                               | 类型      | 默认值   |
|-----------|----------------------------------------------------------------------------------|---------|-------|
| tableData | 表格数据源，包括dataSource与columns两个key值，其中dataSource是表格中显示的数据，columns是表格的表头以及每列对应的key值。 | Object  | \-    |
| pageData  | 分页数据，其中current代表当前页，pageSize表示每页显示的条数，total代表数据条数。                               | Object  | \-    |
| batch     | 获得批量选择后的数据。                                                                      | Object  | \-    |
| relevance | 表格上方是否有其他关联操作，默认值为false                                                          | Boolean | false |
