import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import authApi from '../api/authApi';
import common from 'commonLib/common';
import {message} from 'antd';

const {session} = common;
const {setUserIdPC, setTokenPC, setUsernamePC} = session;
import '../style/login.scss';

const Login = () => {
	const navigate = useNavigate()
	const [loginControl, setLoginControl] = useState(true)

	const onLoginClick = (data, error) =>{
		if (error) {
			return;
		}
		authApi.login(data).then((resp) => {
			const {data, code} = resp;
			if (code === 0) {
				const { id, userName } = data
				setUserIdPC(id);
				setUsernamePC(userName);
				navigate('/history');
			} else {
				message.error("登录失败, 请检查用户名或密码");
			}
		}).catch((err) => {
			message.error("登录失败, 请检查用户名或密码");
		})
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
			<div className="position-absolute system-label">
				<div style={{fontSize:'4vw'}}>无人仓储</div>
				<div style={{fontSize:'3vw'}}>通用框架111</div>
			</div>
			<div className="login-form">
				<p className="login-form-title">登录</p>
				<LoginForm
					onClick={onLoginClick}
					loginControl={loginControl}
					onFormChang={onFormChang}
				/>
			</div>
		</div>
	)
}

export default Login;

Login.propTypes = {
	history: PropTypes.object,
	actions: PropTypes.object,
};

Login.defaultProps = {
	history: {},
	actions: {},
};