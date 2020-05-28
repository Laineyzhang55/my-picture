import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useStores } from '../stores';
import { useHistory } from "react-router-dom";


const Login = styled.div`
  margin: 50px auto;
  padding: 30px 20px;
  max-width: 600px;
  border-radius: 6px;
  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.5)
`;
const H2 = styled.h2`
  padding: 15px 0;
  text-align: center;
  font-size: 24px;
`;

const Rejister = () => {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 18,
    },
  };

  const history = useHistory();
  const { AuthStore } = useStores();
  const onFinish = values => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login().then(()=>{
      history.push('/');
    }).catch((err)=> {
      console.log(err)
      console.log('登录失败');
    })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
    return (
      <Login>
        <H2>登录</H2>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      </Login>
    );
  };  

export default Rejister;