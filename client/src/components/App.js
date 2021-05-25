import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import RegisterLogin from "./container/register_login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Switch>
        <div className="App">
          <Route path="/login" component={RegisterLogin} />
        </div>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
