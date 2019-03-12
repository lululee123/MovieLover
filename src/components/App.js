import React, { Component } from 'react';
import './css/App.scss';
import User from './User';
import Signout from './Signout';
import CardCom from './CardCom';
import Home from './Home';
import Calculate from './Calculate';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from './Firebase';
import { CardWantedData, CardWatchData } from '../actions/index';

class App extends Component {
  constructor(){
    super()

    this.state = {
      loginStatus: localStorage.getItem('ID') === 'null' || localStorage.getItem('ID') === null  ? true : false,
      sidemenu: false
    }
  }

  componentDidMount(){
    this.props.firebase.user(this.props.userId).on("value", snap => {
      if (snap.val() !==  null){
        if (snap.val().hasOwnProperty("watch")){
          this.props.CardWatchData(snap.val().watch);
        }
        else{
          this.props.CardWatchData({});
        }
        if (snap.val().hasOwnProperty("wanted")){
          this.props.CardWantedData(snap.val().wanted);
        }
        else{
          this.props.CardWantedData({});
        }
      }
      if (snap.val() === null){
        this.props.CardWantedData({});
        this.props.CardWatchData({});
      }
    })
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
            <li><Link to="/Card">我的清單</Link></li>
            <li><Link to="/Calculate">分析</Link></li>
          </div>
          <div className="right">
            <Signout closeSideMenu={this.changeSideMenuStatus} changeLoginStatus = {this.changeLoginStatus} />
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
              <li onClick={() => this.changeSideMenuStatus()}><Link to="/Calculate">分析</Link></li>
              <Signout closeSideMenu={this.changeSideMenuStatus} changeLoginStatus = {this.changeLoginStatus} />
            </div>
             : ''
          }
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/Card" component={CardCom}/>
        <Route path="/Calculate" component={Calculate}/>
      </div>
    </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {userId: state.UserIdReducer, cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}

export default connect(mapStateToProps, {CardWantedData: CardWantedData, CardWatchData: CardWatchData})(withFirebase(App));
