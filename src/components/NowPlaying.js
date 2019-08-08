import React, { Component} from 'react';
import './css/NowPlaying.scss';
import PlayTimeCard from './PlayTimeCard';

class NowPlaying extends Component{
  constructor(props){
    super(props);
    this.state = {
      moviePlayList: [],
      show: false,
      movie: '',
      detail: [],
      area: '',
      chooseList: [],
      matchList: [],
      search: false,
      posterData: [],
      poster: {}
    }
  }

  componentDidMount(){
    this.props.Firebase
    .getMoviePlayList()
    .once("value", snap => {
      if (snap.val() !==  null){
        this.setState({
          moviePlayList: snap.val(),
          show: true
        })
      }
    })

    this.props.Firebase
    .getMoviePosterDataList()
    .once("value", snap => {
      if (snap.val() !==  null){
        this.setState({
          posterData: snap.val()
        })
      }
    })
  }

  detail = (e) => {
    this.state.moviePlayList.forEach( (item) => {
      if (Object.keys(item)[0] === e.target.value){
        this.setState({
          movie: e.target.value,
          detail: item[e.target.value],
          area: '',
          chooseList: [],
          poster: {}
        })
      }
    })
  }

  renderMatchMovie = (e) => {
    this.state.detail.forEach( (item) => {
      if (Object.keys(item)[0] === e.target.value){
        //get poster
        let poster = {};
        this.state.posterData.forEach((data) => {
          if (Object.keys(data)[0] === this.state.movie){
            poster = data;
          }
        })
        this.setState({
          area: e.target.value,
          chooseList: item[e.target.value],
          poster: poster
        })
      }
    })
  }

  closeSearch = () => {
    this.setState({
      search: false,
      matchList: []
    })
  }

  search = (e) =>{
    let movie = e.currentTarget.innerHTML;
    this.state.moviePlayList.forEach( (item) => {
      if (Object.keys(item)[0] === movie){
        let combinedList = {};
        item[movie].forEach( (item) => {
          combinedList = Object.assign(combinedList, item[Object.keys(item)])
        })
        //get poster
        let poster = {};
        this.state.posterData.forEach((data) => {
          if (Object.keys(data)[0] === movie){
          poster = data;
          }
        })
        this.setState({
          movie: movie,
          chooseList: combinedList,
          area: '',
          matchList: [],
          detail: item[Object.keys(item)],
          search: false,
          poster: poster
        })
      }
    })
  }

  getMatchList = (name) => {
    let matchList = [];
    this.state.moviePlayList.forEach( (item) => {
      if (name.trim() !== '' && Object.keys(item)[0].includes(name)){
        matchList.push(Object.keys(item)[0]);
      }
    })
    this.setState({
      matchList: matchList,
      movie: name,
      chooseList: [],
      area: '',
      detail: [],
      poster: {}
    })
  }

  render(){
    if (this.state.show){
      return (
        <div className="moviePlayList">
          <div className="moviePlayList__top">
            <div className="top__selectArea">
              <select className="top__selectArea-movie" value={this.state.movie ? this.state.movie : '請選擇'} onChange={(e) => this.detail(e)}>
                <option>請選擇</option>
                {
                  this.state.moviePlayList.map( (item) => {
                    return <option key={Object.keys(item)} value={Object.keys(item)} >{Object.keys(item)}</option>
                  })
                }
              </select>
              <select className="top__selectArea-area" value={this.state.area ? this.state.area : '請選擇'} onChange={(e) => this.renderMatchMovie(e)}>
                <option>請選擇</option>
                {
                  this.state.detail.map( (item) => {
                    return <option key={Object.keys(item)} value={Object.keys(item)} >{Object.keys(item)}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div className="moviePlayList__down">
            <div className="moviePoster__box">
              <div className="moviePoster__poster">
                <img alt="" src={Object.keys(this.state.poster).length === 0 ? '' : Object.values(this.state.poster)[0][0]}/>
              </div>
              <a className="moviePoster__title" target="_blank" href={`https://movies.yahoo.com.tw/movieinfo_main/${Object.keys(this.state.poster).length === 0 ? '' : Object.values(this.state.poster)[0][1]}`}>{Object.keys(this.state.poster)}</a>
            </div>
            {
              Object.keys(this.state.chooseList).map((key) => {
                return <PlayTimeCard key={key} theater={key} time={this.state.chooseList[key]} />
              })
            }
          </div>
          {this.state.search ?
          <div>
            <div className="search__mask" onClick={this.closeSearch}></div>
            <div className="search__Box">
              <div className="search__inputArea">
                <input placeholder="搜尋電影" className="search__input" onChange={(e) => {this.getMatchList(e.target.value)}}></input>
                {/* <div className="search__icon" onClick={this.search}></div> */}
                <div className="matchbox">
                  {
                    this.state.matchList.map((item) => {
                      return <li key={item} onClick={(e) => this.search(e)}>{item}</li>
                    })
                  }
                </div>
              </div>
              <div className="search__cancel" onClick={this.closeSearch}>Ｘ</div>
            </div>
          </div>
          :
          <div className="movieSearch" onClick={() => {this.setState({search: true})}}></div>
          }
        </div>
      );
    } else {
      return (
        <div className="noData">
          <div className="noData__text">資料更新中</div>
        </div>    
      );
    }
  }
};

export default NowPlaying;