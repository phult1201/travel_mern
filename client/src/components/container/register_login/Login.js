import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "../../../actions";

const Login = (props) => {
  const userReducer = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Run useEffect login");
    if (userReducer.loginSuccess) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [userReducer.loginSuccess]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(userLogin(user));
  };

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="register-login">
      <div className="register-login__title">
        <h1>login</h1>
      </div>
      <form className="register-login__form" onSubmit={submitForm}>
        <div className="register-login__row">
          <input
            type="text"
            name="email"
            className="register-login__input"
            id="register-login__input--email"
            value={user.email}
            required
            onChange={onChangeInput}
          />
          <label htmlFor="register-login__input--email" className="register-login__label">
            Username
          </label>
        </div>
        <div className="register-login__row">
          <input
            type="password"
            name="password"
            className="register-login__input"
            id="register-login__input--password"
            value={user.password}
            autoComplete="on"
            required
            onChange={onChangeInput}
          />
          <label htmlFor="register-login__input--password" className="register-login__label">
            Password
          </label>
        </div>
        <div className="register-login__row">
          <button className="register-login__btn" onSubmit={submitForm}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
