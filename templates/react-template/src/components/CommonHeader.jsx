import React from 'react';
import { imageUrl } from '../constants/Resources';
import { useNavigate, NavLink } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';


function CommonHeader(props) {
	const { headerConfiguration, dataList, btnMsg, createNewOrder } = props;
	const { backPageTip, headerNavBarList } = headerConfiguration
	// 路由跳转
	const navigate  = useNavigate()

	return (
		<>
			<div className='common-header'>
				<div className='common-header-goBack' onClick={() => navigate('/home')}>
					<img alt='back' src={imageUrl.GO_BACK} className='common-header-img'></img>
					<span className='common-header-text'>{backPageTip}</span>
				</div>
				{/* 头部tabs大于一个 增加宽度 显示好看 */}
				<div className={`common-header-select ${headerNavBarList.length > 1 ? 'ml' : ''}`}>
					{
						headerNavBarList.map((item, index) => {
							return (
								<NavLink  
									className={({ isActive, isPending }) => {
										return isActive ? "common-header-order checked" : "common-header-order";
									  }}
									to={item.router}
								>
										{item.name}
								</NavLink>
							);
						})
					}
				</div>
				{
					// 如果订单列表不为空的时候才在头部显示创建按钮 空的时候创建按钮在页面上
					dataList&&dataList.length > 0 && <div className='common-header-create' onClick={createNewOrder}><PlusOutlined />{btnMsg}</div>
				}
			</div>
		</>
  	);
}

export default CommonHeader;
