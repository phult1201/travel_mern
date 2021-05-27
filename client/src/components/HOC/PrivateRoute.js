import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const user = localStorage.getItem("user");
        if (user) return <Component {...props} />;
        return <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
