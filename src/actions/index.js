export const LoginState = (status) =>{
  return {
    type: 'LOGIN_STATUS',
    payload: status
  }
}

export const AddCard = (add) => {
  return {
    type: "ADD_CARD",
    payload: add
  }
}

export const UserId = (id) => {
  return {
    type: 'USER_ID',
    payload: id
  }
}
export const AddCardType = (type) => {
  return {
    type: 'ADD_CARD_TYPE',
    payload: type
  }
}