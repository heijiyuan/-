import axios from 'axios';
import './App.css'
import React from 'react';
import { Input,Button } from 'antd';
// import Item from 'antd/lib/list/Item';
// import Todolist from '../src/page/Todolist.js';
// import Sign from '../src/page/Sign.js';
// import Logout from '../src/page/Logout';
// import Nav from './common/nav'
//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
// import { BrowserRouter as Router,Route} from 'react-router-dom'


const url1='http://localhost:7001';
const urladd='http://localhost:7001/add';
const urldel='http://localhost:7001/del';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      value:'',
      id:'',
      time:''
    };
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handdelete(id){
    axios.post(urldel,{
      id:id,
    })
    .then(response=>{
        console.log('Success')
        this.setState({
          data: response.data,
          id:(parseInt(response.data[response.data.length-1].id)+1).toString()
        });
        console.log(this.state.data)
    })
    .catch(error =>{
          console.log('fail',error)
    })
  } 
  handleSubmit() {
    
    var time = new Date().toLocaleString( );
    console.log(this.state.value,time);
    axios.post(urladd,{
      id:this.state.id,
      name:this.state.value,
      time:time
    })
    .then(response=>{
        console.log('Success')
        this.setState({
          data: response.data,
          id:(parseInt(response.data[response.data.length-1].id)+1).toString()
        });
        console.log(this.state.data)
    })
    .catch(error =>{
          console.log('fail',error)
    })
    // this.setState({
    //   id:(parseInt(this.state.id+1)).toString()
    // });
  }
  componentDidMount() {
    // axios.defaults.withCredentials = true;
    axios.get(url1)
    .then(response=>{
        console.log('Success')
        this.setState({
          data: response.data.a,
          id:(parseInt(response.data.a[response.data.a.length-1].id)+1).toString()
        });
        
        console.log(this.state.id)
    })
    .catch(error =>{
          console.log('fail',error)
    })
    
  }
  render() {        
    return (
      
      <div  >
        <div className="input">
        <Input placeholder="请输入事件" value={this.state.value}  onChange={this.handleChange.bind(this)} />
        <Button type="primary" onClick={this.handleSubmit.bind(this)}  className="summit">提交</Button>
        </div>
        <div className="title">
        <ul>
         {this.state.data.map((item) =>
        <div key={item.id}>
          <li >{item.name}</li> 
          <Button type="primary"onClick={this.handdelete.bind(this,item.id)} >删除</Button>
          </div>
        )
        }
       </ul>
       </div>
      </div>
    );
  }
}

export default App;

