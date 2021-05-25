import React, { useState } from "react";

const RegisterLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
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
          <button className="register-login__btn" onSubmit={submitForm}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterLogin;
