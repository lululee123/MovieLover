const firebase = require("firebase");
const moment = require("moment");
const request = require('request');
const cheerio = require('cheerio');
var finalData = [];
var posterData = [];
var imageLink = {};
var movieNum;
var playlistDone = false;
var posterListDone = false;
const config = {
  apiKey: "AIzaSyBqd2lmJTdVxcmAMUtmVjNNOef9JkHCvJA",
  authDomain: "todolist-7a64c.firebaseapp.com",
  databaseURL: "https://todolist-7a64c.firebaseio.com",
  projectId: "todolist-7a64c",
  storageBucket: "todolist-7a64c.appspot.com",
  messagingSenderId: "248405903996"
};
 
firebase.initializeApp(config);
var db = firebase.database();

getMovieId((movieId, movieName) => {
    getTheaterAndTime(movieId, movieName);
  }, (movieIdList, movieName) => {
    getMoviePoster(movieIdList, movieName)
  }
);

function getMovieId(callbackTheaterAndTime, callbackPoster) {
  request('https://movies.yahoo.com.tw/movie_intheaters.html', (_err, _res, body) => {
    let $ = cheerio.load(body);
    let movieId = [];
    let movieName = [];
    $('select[name=movie_id] option').each(function() {
      movieName.push($(this).text());
      movieId.push($(this).val());
    });
    movieId.shift(); //移除 "請選擇片名" 選項
    movieNum = movieId.length;
    movieName.shift(); //移除 "請選擇片名" 選項
    movieId.map( (id, index) => {
      return callbackTheaterAndTime(id, movieName[index]);
    });
    movieId.map( (id, index) => {
      return callbackPoster(id, movieName[index]);
    });
  });
}

function getTheaterAndTime(movieId, movieName){
  var resultData = {};
  function requestPage(movieId, areaId){
    return new Promise( (resolve, reject) => {
      request(`https://movies.yahoo.com.tw/ajax/pc/get_schedule_by_movie?movie_id=${movieId}&area_id=${areaId}&date=${moment(new Date()).format('YYYY-MM-DD')}`, (_err, _res, body) => {
        if (!_err && _res.statusCode === 200) {
          resolve(body);
        } else {
          reject(_res);
        }
      });
    });
  }
  const areaIdList = ["28", "3", "8", "16", "20", "15", "2", "22", "13", "19", "21", "10", "17", "14", "18", "11", "12", "9", "24", "23"];
  const areaNameList = ["台北市", "台北二輪", "新北市", "桃園", "新竹", "苗栗", "台中", "彰化", "南投", "雲林", "嘉義", "台南", "高雄", "屏東", "基隆", "宜蘭", "花蓮", "台東", "金門", "澎湖"];
  let promises = areaIdList.map( (areaId, index) => {
    return requestPage(movieId, areaId);
  });
  
  Promise.all(promises)
  .then((body) => {
    let TaiwanMovieArray = [];
    body.map( (body, index) => {
      var bodyView = JSON.parse(body).view;
      var $ = cheerio.load(bodyView);
      let data = {};
      let theaterAndtime = {};
      if ($('.area_timebox ul').length !== 0){
        $('.area_timebox ul').each(function() {
          let theaterName = $(this).attr('data-theater_name');
          let theaterId = $(this).attr('id');
          let time = [];
          $('.area_timebox ul[id=' + theaterId + '] input').each(function() {
            time.push($(this).val());
          });
          data[theaterName] = time;
        });
        theaterAndtime[areaNameList[index]] = data;
        TaiwanMovieArray.push(theaterAndtime);
        data = {};
        theaterAndtime = {};
      }
      return resultData[movieName] = TaiwanMovieArray;
    });
  })
  .then(() => {
    finalData.push(resultData);
    var ref = db.ref(`/moviePlayList/${moment(new Date()).format('YYYY-MM-DD')}`);
    if (finalData.length === movieNum){
      ref.set(finalData)
      .then(() => {
        console.log('playlist done');
        playlistDone = true;
        if (playlistDone && posterListDone){
          console.log('done');
        }
      });
    }
  });
}

function getMoviePoster(movieId, movieName){
  let requestPage = new Promise((resolve, reject) => {
    request(`https://movies.yahoo.com.tw/movieinfo_main/${movieId}`, (_err, _res, body) => {
      var $ = cheerio.load(body);
      let moviePosterURL = $('.movie_intro_foto img').attr('src');
      imageLink[movieName] =[moviePosterURL, movieId];
      posterData.push(imageLink);
      imageLink = {};
      resolve();
    });
  })

  requestPage.then(() => {
    if (posterData.length === movieNum){
      var ref = db.ref(`/moviePosterDataList/${moment(new Date()).format('YYYY-MM-DD')}`);
      ref.set(posterData)
      .then(() => {
        console.log('poster done');
        posterListDone = true;
        if (playlistDone && posterListDone){
          console.log('done');
        }
      });
    }
  })
}