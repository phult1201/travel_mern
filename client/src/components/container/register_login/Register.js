import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userRegister } from "../../../actions";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [rePassword, setRePassword] = useState("");

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    if (user.password !== rePassword) {
      return toast.error("Confirm password is incorrect");
    }
    dispatch(userRegister(user));
  };

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="register-login">
      <div className="register-login__title">
        <h1>register</h1>
      </div>
      <form className="register-login__form" onSubmit={submitForm}>
        <div className="register-login__row">
          <input
            type="text"
            name="name"
            className="register-login__input"
            id="register-login__input--name"
            value={user.name}
            required
            onChange={onChangeInput}
          />
          <label htmlFor="register-login__input--name" className="register-login__label">
            Name
          </label>
        </div>
        <div className="register-login__row">
          <input
            type="text"
            name="lastName"
            className="register-login__input"
            id="register-login__input--last-name"
            value={user.lastName}
            required
            onChange={onChangeInput}
          />
          <label htmlFor="register-login__input--last-name" className="register-login__label">
            Last name
          </label>
        </div>
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
            Email
          </label>
        </div>
        <div className="register-login__row">
          <input
            type="password"
            name="password"
            className="register-login__input"
            id="register-login__input--password"
            value={user.password}
            required
            onChange={onChangeInput}
          />
          <label htmlFor="register-login__input--password" className="register-login__label">
            Password
          </label>
        </div>
        <div className="register-login__row">
          <input
            type="password"
            name="rePassword"
            className="register-login__input"
            id="register-login__input--rePassword"
            value={rePassword}
            required
            onChange={(e) => setRePassword(e.target.value)}
          />
          <label htmlFor="register-login__input--rePassword" className="register-login__label">
            Confirm Password
          </label>
        </div>
        <div className="register-login__row">
          <button className="register-login__btn" onSubmit={submitForm}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
