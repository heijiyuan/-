import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import '../css/sign.css';
import axios from 'axios';
import {
    UserOutlined,
    AntDesignOutlined,
    LockFilled
  } from '@ant-design/icons';
  axios.defaults.withCredentials = true;
  const url2='http://81.68.155.14:3302/user/logout';
const tailLayout = {
    wrapperCol: { offset: 6, span:12 },
  };
  const validateMessages = {
    required: 'password is required!',
    types: {
      string:'it is not a valid string',
    },
    string: {
      range: "length must be between 6 and 12 ",
    },
  };
 
    // const onFinish = function (values) {
    //   console.log('Success:', values);
    // };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
export default class Logout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          date: '',
        };
      };
      onFinish(values) {
        // const a = {
        //   "username":"123456789",values
        //   "password":"123"
        // };
        console.log(values);
        axios.get(url2,values)
        .then(response=>{
            console.log('Success',response)
        })
        .catch(error =>{
              console.log('fail',error)
        })
      };   


render(){
  return (
    <div  className="mainwindow">
      <div  className="title">
      <AntDesignOutlined />后台管理系统
      </div>
    <Form
      validateMessages={validateMessages}
      {...tailLayout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish.bind(this)}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        // label="Username"
        name="username"
        rules={[{ required:true , type: 'string',min: 6,max: 12}]}
      >
        <Input  placeholder="用户名:请输出用户名"   prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
      
        // label="Password"
        name="password"
        rules={[{  required:true  }]}
      >
        <Input.Password placeholder="用户名:请输出用户名"prefix={<LockFilled />} />
      </Form.Item>

      

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"  >
          注销 
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
}