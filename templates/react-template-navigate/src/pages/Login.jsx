import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select, message, Popover } from 'antd';
import PropTypes from 'prop-types';

import '../css/login.scss';

const FormItem = Form.Item;
const formLayout = {
	labelCol: {span: 10},
};

const Login = ({ value }) => {
	const [formData, setFormData] = useState({})
	const [messageApi, contextHolder] = message.useMessage();
	const [form] = Form.useForm();
	// 测试专用，引用时删除即可
	const [loginControl, setLoginControl] = useState(true)
	// useEffect(() =>{
	// 	console.log('formData1', formData);

	// 	if(Object.keys(formData).length > 0) {
	// 		console.log('formData2', formData);
	// 	}
	// }, [formData])

	const onLoginClick = (value, err) =>{
		console.log('value, err', value, err);
		messageApi.open({
			type: 'success',
			content: '登录成功qqqq',
		});
	}

	const onFormChang = (changedValues, value) => {
		if(Object.keys(value).length === 2) {
			let loginButtonStatus = false
			for(let key in value) {
				if(value[key] !== '0' && !value[key]) {
					loginButtonStatus = true
				}
			}
			setLoginControl(loginButtonStatus)
		}
		console.log(value)
		// setFormData(value);
	}

	return (
		<div className="login-wrapper">
			{contextHolder}
			<div className="login-form">
				<p className="login-form-title">登录</p>
				<Form
					{...formLayout}
					// value={formData}
					form={form}
					onValuesChange={onFormChang}
					onFinish={onLoginClick}
				>
					<FormItem
						name="account"
						className="login-account"
						rules={[
							{
							required: true,
							message: '用户名是必填项!',
							},
						]}
					>
						<Input
							size="large"
							type="normal"
							asterisk="false"
							placeholder="请输入用户名"
							className="login-form-input"
						/>
					</FormItem>
					<FormItem
						name="password"
						rules={[
							{
							required: true,
							message: '密码是必填项!',
							},
						]}
					>
						<Input.Password
							size="large"
							type="normal"
							asterisk="false"
							placeholder="请输入密码"
							className="login-form-input"
						/>
					</FormItem>
					<FormItem>
						<div className="forgot-password">
							<Popover
								className="forgot-password"
								closable={false}
								trigger="hover"
								content={<span>请联系钛米技术支持17316423457</span>}
							>
								<span>忘记密码？</span>
							</Popover>
						</div>
					</FormItem>
					<FormItem>
						<Button
							htmlType="submit"
							type="primary"
							className={`${loginControl ? "login-button un-used" : "login-button" }`}
							disabled={loginControl}
						>
							登录
						</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	);
}

export default Login
