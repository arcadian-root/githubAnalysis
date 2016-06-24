let userReducer = (state = null, action) {
  if ( action.type === 'ADD_USER_INFO' || action.type === 'REMOVE_USER_INFO') {
    state = action.userInfo;
  }
  return state;
}


default export { userReducer };