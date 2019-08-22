import firebase from "firebase/app";
import * as constants from './constants';

export const AddCard = (add: boolean) => {
  return {
    type: constants.ADDCARD,
    payload: add
  }
}

export const AddCardType = (type: string) => {
  return {
    type: 'ADD_CARD_TYPE',
    payload: type
  }
}


const Fetch= (res: string) => {
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

export const getUser = () => (dispatch: any) => {
  let user = firebase.auth().currentUser;
  if (user) {
    dispatch(Fetch(user.uid));
  } else if (localStorage.getItem('FirebaseUID')){
    dispatch(Fetch(localStorage.getItem('FirebaseUID') || ''));
  } else {
    dispatch(FetchError());
  }
}


const FetchTaskList = (res: any) => {
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

export const TaskList = (list: any) => (dispatch: any) => {
  if (list) {
    dispatch(FetchTaskList(list));
  } else {
    dispatch(EmptyTaskList());
  }
}