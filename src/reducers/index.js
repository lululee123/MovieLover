import { combineReducers } from 'redux';

const AddCardReducer = (add = false, action) => {
  if (action.type === "ADD_CARD"){
    return action.payload;
  }
  return add;
}

const CardTypeReducer = (type = 'watch' , action) => {
  if (action.type === 'ADD_CARD_TYPE'){
    return action.payload;
  }
  return type;
}

const CheckLoginReducer = (UserInit = {status: 'Loading', uid: '', list: {}}, action = 'FETCHING') => {
  switch( action.type ){
    case 'FETCH':
      return {...UserInit, status: 'Login', uid: action.payload};
    case 'FETCH_ERROR':
      return {status: 'Unlogin', uid: '', list: {}};
    case 'FETCHTASKLIST':
    case 'EMPTYTASKLIST':
      return {...UserInit, list: action.payload}
    default: 
      return UserInit;  
  }
}

export default combineReducers({
  AddCardReducer: AddCardReducer,
  CardTypeReducer: CardTypeReducer,
  CheckLoginReducer: CheckLoginReducer
})