import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import RegisterLogin from "./container/register_login";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/login" component={RegisterLogin} />
      </div>
    </Switch>
  );
}

export default App;
