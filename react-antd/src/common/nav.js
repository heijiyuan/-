// 用于页面的跳转
import React from 'react'
import {Link} from 'react-router-dom'
import '../css/nav.css'
import {Divider}  from 'antd'
export default class Nav extends React.Component{
    render(){
        return(
            <div>                
                        <Link to="/">登录</Link>
                        <Divider type="vertical" />    
                         <Link to="/Sign">注册</Link>        
                         <Divider type="vertical" />    
                         <Link to="/Logout">注销</Link>             
            </div>
        )
    }
}