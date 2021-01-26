// 登录页面
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

  // 调整格式
  const tailLayout = {
    wrapperCol: { offset: 6, span:12 },
  };
  // 表单验证模板
  const validateMessages = {
    required: 'password is required!',
    types: {
      string:'it is not a valid string',
    },
    string: {
      range: 'length must be between 6 and 12 ',
    },
  };
   const url1='http://81.68.155.14:3302/user/login';
  //  const url2='http://81.68.155.14:8080/user/logout';
    // 失败后的打印
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
 class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          date: '',
        };
      };
      // 成功后的打印
      onFinish(values) {
        axios.defaults.withCredentials = true;
        console.log('Success:');
        axios.post(url1,values)
        .then(response=>{
            console.log('Success',response)
        })
        .catch(error =>{
              console.log('fail',error)
        })
      };   
      // onFinish2() {
      //   const a = {
      //       "username":"hei123456",
      //       "password":"123456"
      //     };
      //   axios.post(url1,a)
      //   .then(response=>{
      //       console.log('Success',response)
      //   })
      //   .catch(error =>{
      //         console.log('fail',error)
      //   })
      // };   

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
        <Input 
        prefix={<UserOutlined />}   
         placeholder="用户名:请输出用户名"/>
      </Form.Item>

      <Form.Item
      
        // label="Password"
        name="password"
        
        rules={[{  required:true }]}
      >
        <Input.Password placeholder="用户名:请输出用户名" prefix={<LockFilled />} />
      </Form.Item>

      

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" >
          登录
        </Button>
      </Form.Item>
    </Form>
    
    
    </div>
  )
}
}



export default Login