import React, { useState, useEffect } from 'react';
import { imageUrl } from "../../constants/Resources";
import { Button, Form, Input, App } from 'antd';
import loginApi from '../../api/loginApi';
import { setToken, setUserId, setUserRoles, setUsername, getShelfId, getWarehouseId, removeSetting } from '../../utils/session';
import { useNavigate } from 'react-router-dom';
import '../../style/login.scss'

const FormItem = Form.Item;
const formLayout = {
	labelCol: {span: 10},
};

function Login() {
	const navigate  = useNavigate()
	const { message, notification } = App.useApp();
	const shelfId = getShelfId();
	const warehouseId = getWarehouseId();
	const [form] = Form.useForm();
	// 测试专用，引用时删除即可
	const [loginControl, setLoginControl] = useState(true)

	useEffect(() => {
		// 如果没有配置仓库和货架，跳转到配置页面
		// if(!warehouseId || !shelfId) {
		// 	navigate("/setting");
		// }
	}, [])

	const onLoginClick = (values) =>{
		// 避免直接通过调试器清除cookie
		if (!getWarehouseId() || !getShelfId()) {
			message.error('请先进行基础配置！')
			navigate("/setting");
			return;
		}

		loginApi.login(values).then((res) => {
			if(res.code === 0 && res.data) {
				if(['DEVELOPER', 'WAREHOUSE_MANAGER'].some((role) => res.data?.roles.includes(role))) {
					setUserId(res.data?.userId)
					setUserRoles(JSON.stringify(res.data?.roles))
					setUsername(res.data?.name)
					setToken(res.data?.accessToken)
					message.success('登录成功')
					navigate('/home')
				} else {
					message.error('暂无权限，请联系管理员！')
				}
			} else {
				message.error(res.message)
			}

		}).catch((err) => {
			message.error(err.message)
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
	}

	// 返回配置页
	const goSetting = () => {
		removeSetting()
		navigate("/setting");
	}

  return (
    <div className='login'>
      <img className='login-bg' src={imageUrl.LOGIN_BG} />
	  <Button className='login-back' type='primary' onClick={goSetting}>返回配置页</Button>
      <div className='login-box'>
        <div className='login-title'>欢迎使用<span>XXXX系统</span></div>
        <Form
			{...formLayout}
			form={form}
			onValuesChange={onFormChang}
			onFinish={onLoginClick}
			initialValues={{
				remember: true,
			}}
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
					className="login-input"
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
					className="login-input"
				/>
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

export default Login;
