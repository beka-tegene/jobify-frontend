import React from "react";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo-no-background.png";
export const Sidebar = ({
  links = [],
  color = "bg-[#191C24] text-white",
  bgSide = "bg-[#0F1015]",
  bgSideHover = "hover:bg-[#0F1015]",
  icon = "",
}) => {
  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <nav className={`w-full h-full ${color} flex flex-col p-4 rounded-md`}>
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <div className="w-16 h-16">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        Jobify
      </h2>
      <div className="flex flex-col justify-between h-full py-4">
        <ul className="flex flex-col gap-4">
          {links.map(({ path, name, icon: Icon }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center gap-3 p-2 ${bgSide} rounded`
                    : `flex items-center gap-3 p-2 ${bgSideHover} font-medium  rounded`
                }
              >
                {Icon && <Icon className={`${icon}`} />}
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          onClick={logoutHandler}
          className={`flex items-center gap-3 p-2 ${bgSideHover} rounded`}
        >
          <LuLogOut />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
};
