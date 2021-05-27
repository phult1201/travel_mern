import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import "./app.css";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Component
import Home from "./components/container/home";
import Login from "./components/container/register_login/Login";
import Register from "./components/container/register_login/Register";
import Chat from "./components/container/chat";
import Header from "./components/header";
import Footer from "./components/footer";

import { userConstants } from "./actions/constants";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  if (user) {
    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: { loginSuccess: true, user: { ...JSON.parse(user) } },
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/chat" exact component={Chat} />
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
