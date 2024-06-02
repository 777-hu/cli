import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import './index.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const FormWithTitle = (props) => {
  const { history, conventionalForm = true } = props;
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="common-wrapper">
      <div className="common-form-header">
        <div className="common-form-title" onClick={() => {}}>
          <LeftOutlined />
          <span>新建用户信息</span>
        </div>
      </div>
      {/* 常规表单项 */}
      {
        conventionalForm && <div className="common-form-wrapper">
          <Form
            name="basic"
            {...layout}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入姓名!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="所属科室"
              name="departmentID"
              rules={[
                {
                  required: true,
                  message: '请输入所属科室!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="角色"
              name="role"
              rules={[
                {
                  required: true,
                  message: '请选择角色!',
                },
              ]}
            >
              <Select>
                <Select.Option value="doctor">医生</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
              help="密码要求"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="确认密码"
              name="remember"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('和密码不一致!'));
                  },
                }),
              ]}
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                确定
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </div>
      }
    </div>
  );
};

export default FormWithTitle;
