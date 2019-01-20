import { combineReducers } from 'redux';

const AddCardReducer = (add = false, action) => {
  if (action.type === "ADD_CARD"){
    return action.payload;
  }
  return add;
}

const UserIdReducer = (id = localStorage.getItem('ID'), action) => {
  if (action.type === 'USER_ID'){
    localStorage.setItem('ID', action.payload);
    return action.payload;
  }
  return id;
}

const CardTypeReducer = (type = 'watch' , action) => {
  if (action.type === 'ADD_CARD_TYPE'){
    return action.payload;
  }
  return type;
}

export default combineReducers({
  AddCardReducer: AddCardReducer,
  UserIdReducer: UserIdReducer,
  CardTypeReducer: CardTypeReducer
})