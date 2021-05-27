import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoIosPerson, IoIosLogOut } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userLogout } from "../../actions";
import Dropdown from "../utils/dropdown";

const Header = (props) => {
  const [checked, setChecked] = useState(false);
  const userReducer = useSelector((state) => state.userReducer);

  const items = [
    { value: "Details", icon: <IoIosPerson />, href: "/#" },
    { value: "Logout", icon: <IoIosLogOut />, event: userLogout, href: "/#" },
  ];

  useEffect(() => {
    setChecked(false);
    // eslint-disable-next-line
  }, [props.location.pathname]);

  const toggle = () => setChecked(!checked);

  const LoggedNav = () => {
    return (
      <ul className="header__link">
        <li className="header__link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__link-item">
          <Link to="/chat">Chat</Link>
        </li>
        <li className="header__link-item">
          <Dropdown title={userReducer.user.name} items={items} />
        </li>
      </ul>
    );
  };

  const NonLoggedNav = () => {
    return (
      <ul className="header__link">
        <li className="header__link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__link-item">
          <Link to="/login">login</Link>
        </li>
        <li className="header__link-item">
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

        <label className="header__overlay" onClick={toggle}></label>

        {userReducer.loginSuccess ? <LoggedNav /> : <NonLoggedNav />}

        <div className="header__cart-icon">
          <span className="header__span">{0}</span>
          <Link to="/cart">
            <FaCartPlus />
          </Link>
        </div>

        <label className="header__burger" onClick={toggle}>
          <div className="header__burger-line header__burger-line--1"></div>
          <div className="header__burger-line header__burger-line--2"></div>
          <div className="header__burger-line header__burger-line--3"></div>
        </label>
      </div>
    </header>
  );
};

export default withRouter(Header);
