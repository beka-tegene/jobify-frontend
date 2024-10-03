import React, { useEffect } from "react";
import { ButtonUi } from "../../../Components";
import { NavLink, useMatch, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo-no-background.png";
export const Navigate = () => {
  const home = useMatch("/");
  const find = useMatch("/find-job") || useMatch("/find-job/:id");
  const about = useMatch("/about-us");
  const contact = useMatch("/contact-us");
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <nav className="flex items-center justify-between px-[15%] border-b-[.8px] border-gray-400 py-3">
      <div className="w-20 h-10 overflow-hidden">
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex items-center gap-7">
          <li>
            <NavLink to={"/"} className={`${home ? "font-medium" : ""}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/find-job"}
              className={`${find ? "font-medium" : ""}`}
            >
              Find Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className={`${about ? "font-medium" : ""}`}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={`${contact ? "font-medium" : ""}`}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <ButtonUi
          onClick={() => navigate("/login")}
          label="Post Job"
          type="button"
          className="bg-transparent border border-[#1EBBD7] py-1 px-3 rounded-md text-[#1EBBD7] font-semibold"
        />
      </div>
      <div className="flex items-center ml-7 gap-3">
        <ButtonUi
          onClick={() => navigate("/login")}
          label="Login"
          type="button"
          className="bg-[#1EBBD7] border border-[#1EBBD7] py-1 px-3 rounded-md text-[#f8feff] font-semibold"
        />
        <ButtonUi
          onClick={() => navigate("/register")}
          label="Register"
          type="button"
          className="bg-transparent border border-[#1EBBD7] py-1 px-3 rounded-md text-[#1EBBD7] font-semibold"
        />
      </div>
    </nav>
  );
};
