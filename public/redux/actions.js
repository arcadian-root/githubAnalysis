// ADD_USER_INFO
let addUserInfo = (userInfo) => {
  return {
    type: 'ADD_USER_INFO',
    userInfo
  }
};

// REMOVE_USER_INFO
let removeUserInfo = {
  type: 'REMOVE_USER_INFO',
  userInfo: null
};


export default { addUserInfo, removeUserInfo };