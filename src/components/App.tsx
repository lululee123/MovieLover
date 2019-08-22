import React, { Component } from 'react';
import './css/App.scss';
import User from './User';
import Signout from './Signout';
import CardCom from './CardCom';
import Home from './Home';
import Calculate from './Calculate';
import NowPlaying from './NowPlaying';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { TaskList, getUser } from '../actions/index';

interface State{
  sidemenu: boolean;
  get: boolean;
}

interface Props{
  getUser: typeof getUser;
  TaskList: typeof TaskList;
  firebaseUID: string;
  CheckLogin: string;
  Firebase: any;
}

class App extends Component<Props, State> {
  state: State = {
    sidemenu: false,
    get: false
  }

  componentDidMount(){
    this.props.getUser();
  }

  changeSideMenuStatus = () => {
    this.setState({
      sidemenu: !this.state.sidemenu
    })
  }

  getListWhileFirebaseIDReady = () => {
    if (this.props.Firebase && !this.state.get){
      this.props.Firebase.user(this.props.firebaseUID).on("value", (snap: any) => {
        if (snap.val() !==  null){
          this.props.TaskList(snap.val());
        } else {
          this.props.TaskList('');
        }
      })
      this.setState({
        get: true
      })
    }
  }

  render() {
    if (this.props.CheckLogin === 'Unlogin'){
      return (
        <div className="App">
          <User Firebase={this.props.Firebase} />
        </div>        
      );
    }
    if (this.props.CheckLogin === 'Loading'){
      return (
        <div className="welcome">
          <div className="welcome__text">Welcome Back</div>
        </div>        
      );
    } else {
      this.getListWhileFirebaseIDReady();
      return (
        <Router>
          <div className="App">
            <ul className="navBar">
              <div className="left">
                <Link to="/"><li className="navBar__logo"></li></Link>
                <li><Link to="/Card">我的清單</Link></li>
                <li><Link to="/Calculate">分析</Link></li>
                <li><Link to="/NowPlaying">電影時刻表</Link></li>
              </div>
              <div className="right">
                <Signout Firebase={this.props.Firebase} closeSideMenu={this.changeSideMenuStatus} />
              </div>
            </ul>
            <ul className="navBar__mobile">
              <Link to="/"><li className="navBar__mobile__logo"></li></Link>
              <div className="navBar__mobile__icon" onClick={this.changeSideMenuStatus}></div>
              {
                this.state.sidemenu ? 
                  <div className="sidemenu">
                  <div className="close" onClick={this.changeSideMenuStatus}>&#10060;</div>
                  <li onClick={this.changeSideMenuStatus}><Link to="/">現正熱映</Link></li>
                  <li onClick={this.changeSideMenuStatus}><Link to="/Card">我的清單</Link></li>
                  <li onClick={this.changeSideMenuStatus}><Link to="/Calculate">分析</Link></li>
                  <li onClick={this.changeSideMenuStatus}><Link to="/NowPlaying">電影時刻表</Link></li>
                  <Signout Firebase={this.props.Firebase} closeSideMenu={this.changeSideMenuStatus} />
                </div>
                : ''
              }
            </ul>
            <Route exact path="/" render={() => <Home Firebase={this.props.Firebase} />}/>
            <Route  path="/Card" render={() => <CardCom Firebase={this.props.Firebase} />}/>
            <Route path="/Calculate" component={Calculate}/>
            <Route  path="/NowPlaying" render={() => <NowPlaying Firebase={this.props.Firebase} />}/>
          </div>
        </Router>
    );
    }
    
  }
}

const mapStateToProps = (state: any) => {
  return { 
    firebaseUID: state.CheckLoginReducer.uid,
    CheckLogin: state.CheckLoginReducer.status
  }
}

export default connect(mapStateToProps, {getUser: getUser, TaskList: TaskList})(App);
