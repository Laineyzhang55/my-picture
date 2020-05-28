import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useStores } from '../stores';
import { useHistory } from "react-router-dom";

const Register = styled.div`
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
  
  const { AuthStore } = useStores();
  const history = useHistory();
  const onFinish = values => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.register().then(() => {
      history.push('/')
    }).catch(err => {
      console.log('注册失败')
      console.log(err)
    }); 
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const validateUsername = (rule, value)=> {
    if(/\W/.test(value)) return Promise.reject('只能是字母数字和下划线');
    if(value.length < 4 || value.length > 10 ) return Promise.reject('长度为4-10个字符');
    return Promise.resolve();
  }

    return (
      <Register>
        <H2>注册</H2>
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
            { validator: validateUsername}
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
              { min: 4, message: '最小4个字符' },
              { max: 10, message: '最多10个字符'}
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: '请再次输入密码',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次密码不一致');
                },
              }),
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
      </Register>
    );
  };  

export default Rejister;