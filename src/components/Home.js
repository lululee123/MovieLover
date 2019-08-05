import React, { Component } from 'react';
import './css/Home.scss';
import HomeMovie from './HomeMovie';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [],
      weather: 0,
      weatherIcon: '',
      weatherArea: false,
      movieArea: true
    }
  }

  async componentDidMount() {
    try {
      let responseMovie = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=62e89effcdf6600bdd0c99c694029d19&language=zh-TW&region=tw");
      if (!responseMovie.ok) {
        throw Error(responseMovie.statusText);
      }
      let jsonMovie = await responseMovie.json();
      let movie = jsonMovie.results.map((item, idx) => {
        return (
          <HomeMovie Firebase={this.props.Firebase} item={item} key={idx}/>
        )
      })
      this.setState({
        movie: movie
      })
    } catch (error) {
      this.setState({
        movieArea: false
      })
    }

    try {
      let responseWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Taipei,tw&APPID=bb26d8de2301acc163da7859740eaec3&units=metric")
      if (!responseWeather.ok) {
        throw Error(responseWeather.statusText);
      }
      let jsonWeather = await responseWeather.json();
      this.setState({
        weather: jsonWeather.main.temp,
        weatherIcon: 'https://openweathermap.org/img/w/' + jsonWeather.weather[0].icon + '.png',
        weatherArea: true
      })
    } catch (error) {
      //do nothing
    }
  }

  render(){
    return (
      <div className="Home__box">
        {
          this.state.weatherArea 
          ?
          <div>
            <div className="weather__box">現在溫度 {this.state.weather}°C <img src={this.state.weatherIcon} alt=""></img></div>
            <div>{parseInt(this.state.weather) >= 20 ? '好天氣，出門看場電影吧' : '有點冷，在家看場電影吧'}</div>
          </div>
          : 
          ''
        }
        <br />
        現正熱映
        {
          this.state.movieArea
          ?
          <div className="movie__box">
            {this.state.movie}
          </div>
          :
          <div>無資料...</div>
        } 
        
      </div>
    )
  }  
}

export default Home;