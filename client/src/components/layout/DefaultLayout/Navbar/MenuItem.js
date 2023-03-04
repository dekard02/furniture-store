import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ title = "", to, icon, className = "" }) => {
  return (
    <NavLink
      className={`menu-item py-4 text-base font-medium cursor-pointer nav-bar-item text-textPrimary ${className}`}
      style={(nav) => ({ active: nav.isActive })}
      to={to}
    >
      {icon}
      <span className="menu-item__title hide-on-mobile-tablet">{title}</span>
    </NavLink>
  );
};

export default MenuItem;
