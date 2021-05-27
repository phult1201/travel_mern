import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items = [] }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="dropdown">
      <div tabIndex={0} className="dropdown__header" role="button" onClick={toggle}>
        <div className="dropdown__header-title">
          <FaUserCircle />
          <p>{title}</p>
        </div>
        <div className="dropdown__header-action">
          <p>{open ? <FaCaretDown /> : <FaCaretUp />}</p>
        </div>
      </div>
      {open && (
        <ul className="dropdown__list">
          {items.map((item, index) => (
            <li className="dropdown__list-item" key={index}>
              <Link to={item.href} onClick={() => dispatch(item.event())}>
                {item.icon} {item.value}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
