import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { imgUrl } from '../constants/imgUrl';
import '../style/UserSetting.scss'

const UserSetting = () => {
	const navigate = useNavigate()
	
	return (
		<div className='common-wrapper'>
			<div className='common-table-header'>
				<div className='common-table-title'>用户信息表</div>
				<Button
					className='common-table-button'
					type="primary"
					onClick={() => { navigate('/user-form') }}
				>
					<>
						<PlusOutlined className='mr-8 '/>
						新建
					</>
				</Button>
			</div>
			<div className='dialog'>
				<img className='dialog-btn' src={imgUrl.BUTTON} alt='按钮' />
			</div>
		</div>
	)
}

export default UserSetting