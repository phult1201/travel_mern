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
      <h1 className="register-login__title">login</h1>
      <form className="register-login__form" onSubmit={submitForm}>
        <div className="register-login__row">
          <input
            type="email"
            name="email"
            className="register-login__input"
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          />
        </div>
        <div className="register-login__row">
          <input
            type="password"
            name="password"
            className="register-login__input"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          />
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
