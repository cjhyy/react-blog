import * as React from 'react';
import { Avatar, Button, Modal, Form, Input, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Login() {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [visible, setVisible]: [boolean, any] = React.useState(false);
  function closeModal() {
    setVisible(false);
  }
  function openModal() {
    setVisible(true);
  }
  function handleOk() {
    closeModal();
  }

  return (
    <div>
      <Button type='primary' onClick={openModal}>
        登录
      </Button>
      <Button>注册</Button>
      <Avatar size={32} icon={<UserOutlined />} />
      <Modal title='登录' visible={visible} footer={null}>
        <Form
          {...layout}
          name='basic'
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Form.Item label='账号' name='username' rules={[{ required: true, message: '请输入账号!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit' onClick={handleOk}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
