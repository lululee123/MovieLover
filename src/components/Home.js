import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import './Home.scss';
import HomeMovie from './HomeMovie';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [],
      weather: []
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=62e89effcdf6600bdd0c99c694029d19&language=zh-TW&region=tw")
    .then((res) => res.json())
    .then(data => {
      let movie = data.results.map((item, idx) => {
        return (
          <HomeMovie item = {item} idx = {idx}/>
        )
      })
      this.setState({
        movie: movie
      })
    })

    fetch("//api.openweathermap.org/data/2.5/weather?q=Taipei,tw&APPID=bb26d8de2301acc163da7859740eaec3&units=metric")
    .then((res) => res.json())
    .then(data => {
      let weather = (
        <div>
          <div> {data.main.temp} </div>
        </div>
      )
      
      this.setState({
        weather: weather
      })
    })

  }

  render(){
    return (
      <div className="Home__box">
        <div className="weather__box">現在溫度 {this.state.weather}°C</div>
        <div>{this.state.weather >= '20' ? '好天氣，出門看場電影吧' : '有點冷，在家看場電影吧'}</div>
        <br />
        熱門影片 
        <div className="movie__box">
          {this.state.movie}
        </div>
      </div>
    )
  }  
}

export default withFirebase(Home);