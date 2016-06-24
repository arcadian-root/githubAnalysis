let userReducer = (state = null, action) => {
  if ( action.type === 'ADD_USER_INFO' || action.type === 'REMOVE_USER_INFO') {
    state = action.userInfo;
  }
  return state;
}

let mockReducer = (state = null, action) => {
  if ( action.type === 'ADD_MOCK') {
    state = action.mocker;
  }
  return state;
}


export default { userReducer, mockReducer };