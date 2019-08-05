import app from '../../../node_modules/firebase/app';
import '../../../node_modules/firebase/auth';
import '../../../node_modules/firebase/database';
import moment from "moment";

const config = {
  apiKey: "AIzaSyBqd2lmJTdVxcmAMUtmVjNNOef9JkHCvJA",
  authDomain: "todolist-7a64c.firebaseapp.com",
  databaseURL: "https://todolist-7a64c.firebaseio.com",
  projectId: "todolist-7a64c",
  storageBucket: "todolist-7a64c.appspot.com",
  messagingSenderId: "248405903996"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();

  }
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doFetchSignInMethodsForEmail = email => this.auth.fetchSignInMethodsForEmail(email);

  user = uid => this.db.ref(`users/${uid}`);

  getMoviePlayList = () => this.db.ref(`moviePlayList/${moment(new Date()).format('YYYY-MM-DD')}`)

  getMoviePosterDataList = () => this.db.ref(`moviePosterDataList/${moment(new Date()).format('YYYY-MM-DD')}`)

}

export default Firebase;