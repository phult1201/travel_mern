import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Login from "./container/register_login/Login";
import Register from "./container/register_login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Switch>
        <div className="App">
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
