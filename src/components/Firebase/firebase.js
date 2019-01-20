import app from '../../../node_modules/firebase/app';
import '../../../node_modules/firebase/auth';
import '../../../node_modules/firebase/database';



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

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;