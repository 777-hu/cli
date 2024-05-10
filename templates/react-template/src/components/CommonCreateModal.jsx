import React from 'react';
import { Button, Modal, Radio, Form, Select } from 'antd';

function CommonCreateModal(props) {
  const {
    open,
    loading,
    handleOk,
    handleCancel,
    form,
    typeList,
  } = props;

  return (
    <Modal
      className='common-modal'
      open={open}
      title={'创建XXX'}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      maskClosable={false}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          提交
        </Button>,
      ]}
    >
      <Form
        name="createOrder"
        initialValues={{
          transportType: 'ROBOT_TRANSPORTATION',
        }}
        form={form}
      >
        <Form.Item
          label="XX类型"
          name="productId"
          rules={[
            {
              required: true,
              message: '请选择XX类型',
            },
          ]}
        >
          <Select
            placeholder="请选择XX类型"
            style={{
              width: '2.64rem',
            }}
            options={typeList}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CommonCreateModal;
