import firebase from "firebase/app";

export const AddCard = (add) => {
  return {
    type: "ADD_CARD",
    payload: add
  }
}

export const AddCardType = (type) => {
  return {
    type: 'ADD_CARD_TYPE',
    payload: type
  }
}


const Fetch= (res) => {
  return {
    type: 'FETCH',
    payload: res
  }
}
const FetchError = () => {
  return {
    type: 'FETCH_ERROR'
  }
}

export const getUser = () => (dispatch) => {
  let user = firebase.auth().currentUser;
  if (user) {
    dispatch(Fetch(user.uid));
  } else if (localStorage.getItem('FirebaseUID')){
    dispatch(Fetch(localStorage.getItem('FirebaseUID')));
  } else {
    dispatch(FetchError());
  }
}


const FetchTaskList = (res) => {
  return {
    type: 'FETCHTASKLIST',
    payload: res
  }
} 

const EmptyTaskList = () => {
  return {
    type: 'EMPTYTASKLIST',
    payload: {}
  }
} 

export const TaskList = (list) => (dispatch) => {
  if (list) {
    dispatch(FetchTaskList(list));
  } else {
    dispatch(EmptyTaskList());
  }
}