import { userConstants } from "../actions/constants";

const initialState = {
  user: {
    name: "",
    email: "",
    lastname: "",
    token: "",
  },
  loginSuccess: false,
  msg: "",
  request: false,
};

const userReducer = (state = initialState, action) => {
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
    case userConstants.USER_REGISTER_REQUEST:
      state = { ...state, request: true };
      break;
    case userConstants.USER_REGISTER_SUCCESS:
      state = { ...state, ...action.payload, request: false };
      break;
    case userConstants.USER_REGISTER_FAILURE:
      state = { ...state, ...action.payload, request: false };
      break;
    default:
      return state;
  }
  return state;
};

export default userReducer;
