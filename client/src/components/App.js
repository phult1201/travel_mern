import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Login from "./container/register_login/Login";
import Register from "./container/register_login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Header from "./header";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { userConstants } from "../actions/constants";

function App() {
  const dispatch = useDispatch();
  if (Cookies.get("x_auth")) {
    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: { loginSuccess: true } });
  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
      <Footer />
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </div>
  );
}

export default App;
