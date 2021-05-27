import { userConstants } from "./constants";
import { toast } from "react-toastify";
import axios from "axios";

export const userLogin = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.USER_LOGIN_REQUEST });
      const res = await axios.post("/api/users/login", user).catch(function (error) {
        return error.response;
      });
      if (res.status === 200) {
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success(res.data.msg);
      }
      if (res.status === 401) {
        dispatch({ type: userConstants.USER_LOGIN_FAILURE, payload: res.data });
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const userRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.USER_REGISTER_REQUEST });
      const res = await axios.post("/api/users/register", user).catch(function (error) {
        return error.response;
      });
      if (res.status === 201) {
        dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: res.data });
        toast.success(res.data.msg);
      }
      if (res.status === 400) {
        dispatch({ type: userConstants.USER_REGISTER_FAILURE, payload: res.data });
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
