import React from "react";
import { Route, Switch } from "react-router";
import "./app.css";
import Login from "./container/register_login/Login";
import Register from "./container/register_login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { userConstants } from "../actions/constants";
import Home from "./container/home";

function App() {
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("user");
  if (isLogged) {
    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: { loginSuccess: true, user: { ...JSON.parse(isLogged) } },
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
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
