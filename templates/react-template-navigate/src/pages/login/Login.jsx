import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select, message, Popover, App } from 'antd';
import PropTypes from 'prop-types';

import '../../css/login.scss';
import loginApi from '../../api/loginApi';

const FormItem = Form.Item;
const formLayout = {
	labelCol: {span: 10},
};

const Login = ({ value }) => {
	const { message } = App.useApp()
	const [form] = Form.useForm();
	const [loginControl, setLoginControl] = useState(true)

	const onLoginClick = (value, err) =>{
		loginApi.login().then(res => {
			
		})
		console.log('value, err', value, err);
		message.success('登录成功qqqq');
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
	}

	return (
		<div className="login-wrapper">
			<div className="system-label">
				<div style={{fontSize:'4vw'}}>XXXX</div>
				<div style={{fontSize:'3vw'}}>XXX管理系统</div>
			</div>
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
