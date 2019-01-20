import React, { Component } from 'react';
import './App.scss';
import User from './User';
import Signout from './Signout';
import CardCom from './CardCom';
import Home from './Home';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()

    this.state = {
      loginStatus: localStorage.getItem('ID') == null ? true : false,
      sidemenu: false
    }
  }

  changeLoginStatus = () => {
    this.setState({
      loginStatus: !this.state.loginStatus
    })
  }

  changeSideMenuStatus = () => {
    this.setState({
      sidemenu: !this.state.sidemenu
    })
  }

  render() {
    if (this.state.loginStatus === true){
      return (
        <div className="App">
          <User changeLoginStatus = {this.changeLoginStatus} />
        </div>        
      );
    }
    return (
      <Router>
      <div className="App">
        <ul className="navBar">
          <div className="left">
            <Link to="/"><li className="navBar__logo"></li></Link>
            <li><Link to="/">靈感</Link></li>
            <li><Link to="/Card">我的清單</Link></li>
          </div>
          <div className="right">
            <Signout changeLoginStatus = {this.changeLoginStatus} />
          </div>
        </ul>
        <ul className="navBar__mobile">
          <Link to="/"><li className="navBar__mobile__logo"></li></Link>
          <div className="navBar__mobile__icon" onClick={() => this.changeSideMenuStatus()}></div>
          {
            this.state.sidemenu ? 
              <div className="sidemenu">
              <div className="close" onClick={() => this.changeSideMenuStatus()}>X</div>
              <li onClick={() => this.changeSideMenuStatus()}><Link to="/">靈感</Link></li>
              <li onClick={() => this.changeSideMenuStatus()}><Link to="/Card">我的清單</Link></li>
              <Signout closeSideMenu={this.changeSideMenuStatus} changeLoginStatus = {this.changeLoginStatus} />
            </div>
             : ''
          }
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/Card" component={CardCom}/>
      </div>
    </Router>
    );
  }
}

export default App;
