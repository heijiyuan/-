
import './App.css'
import React from 'react';
import Login from '../src/page/Login.js';
import Sign from '../src/page/Sign.js';
import Logout from '../src/page/Logout';
import Nav from './common/nav'
//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
import { BrowserRouter as Router,Route} from 'react-router-dom'






class App extends React.Component {
  render() {        
    return (
      // 路由分了两个页面
      <Router>
          <div>
              <Route path='/' exact={true}  component={Login}></Route>
              <Route path={'/sign'}  component={Sign}></Route>
              <Route path={'/logout'}  component={Logout}></Route>
          </div>
          <Nav></Nav>

          
      </Router>
    );
  }
}

export default App;

