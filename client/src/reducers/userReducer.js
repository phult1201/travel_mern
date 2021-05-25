import { userConstants } from "../actions/constants";

const initialState = {
  loginSuccess: false,
  msg: "",
  request: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      state = { ...state, request: true };
      break;
    case userConstants.USER_LOGIN_SUCCESS:
      state = { ...state, ...action.payload, request: false };
      break;
    case userConstants.USER_LOGIN_FAILURE:
      state = { ...state, ...action.payload, request: false };
      break;
  }
  return state;
};
