import { Table } from 'antd';
import React from 'react';

function CommonTable(props) {
  const { columns, dataList, total, current, pageSize, pageChange } = props;

  // 分页配置项
  const pagination = {
		current,
		total,
		pageSize,
		showTotal: (total) => `共 ${total} 条`,
		pageSizeOptions: [10, 20, 50, 100],
		onChange: pageChange,
		size: "default",
	}

  return (
		<div className='common-table'>
			{/* 公共table 入库、出库、历史记录共用 */}
			<Table 
				columns={columns} 
				dataSource={dataList}
				pagination={total<=10?false:pagination}
				rowKey={record => record.id}
				scroll={{
					scrollToFirstRowOnChange: true,
					y: '7rem',
				}}
			/>
		</div>
  );
}

export default CommonTable;
