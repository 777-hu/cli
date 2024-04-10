import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input, Popover, Button } from 'antd';
import common from 'commonLib/common';

const {utils} = common;
const {emptyFun} = utils;

const FormItem = Form.Item;
const formLayout = {
	labelCol: {span: 10},
};

const LoginForm = (props) => {
	const {onClick, onFormChang, loginControl} = props;
	const [form] = Form.useForm();

	return (
		<Form
			{...formLayout}
			form={form}
			onValuesChange={onFormChang}
			onFinish={onClick}
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
	)
}

export default LoginForm;

LoginForm.propTypes = {
	onClick: PropTypes.func,
	loading: PropTypes.bool,
};

LoginForm.defaultProps = {
	loading: false,
	onClick: emptyFun,
};
