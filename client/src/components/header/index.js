import React, { useEffect, useState } from "react";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  const [checked, setChecked] = useState(false);
  const userReducer = useSelector((state) => state.userReducer);

  useEffect(() => {
    setChecked(false);
    // eslint-disable-next-line
  }, [props.location.pathname]);

  const handleToggleCheck = () => {
    setChecked(!checked);
  };

  const LoggedNav = () => {
    return (
      <ul className="header__link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <FaUserCircle />
          <Link to="/">{userReducer.user.name}</Link>
        </li>
      </ul>
    );
  };

  const NonLoggedNav = () => {
    return (
      <ul className="header__link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">LOGO</Link>
      </div>

      <div className="header__navbar">
        <input type="checkbox" checked={checked} className="header__check-box" readOnly />

        <label className="header__overlay" onClick={handleToggleCheck}></label>

        {userReducer.loginSuccess ? <LoggedNav /> : <NonLoggedNav />}

        <div className="header__cart-icon">
          <span className="header__span">{0}</span>
          <Link to="/cart">
            <FaCartPlus />
          </Link>
        </div>

        <label className="header__burger" onClick={handleToggleCheck}>
          <div className="header__burger-line header__burger-line--1"></div>
          <div className="header__burger-line header__burger-line--2"></div>
          <div className="header__burger-line header__burger-line--3"></div>
        </label>
      </div>
    </header>
  );
};

export default withRouter(Header);
