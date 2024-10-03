import React from "react";
import { Sidebar } from "../../../../Components";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaBuilding,
  FaCog,
} from "react-icons/fa";

export const AdminSidebar = () => {
  const sideLinks = [
    { path: "/admin/dashboard", name: "Dashboard", icon: FaTachometerAlt },
    { path: "/admin/jobs", name: "Manage Jobs", icon: FaBriefcase },
    { path: "/admin/companies", name: "Manage Companies", icon: FaBuilding },
    { path: "/admin/settings", name: "Settings", icon: FaCog },
  ];

  return (
    <div className="h-full p-3 bg-gray-50">
      <Sidebar
        links={sideLinks}
        color={"bg-white text-gray-800"}
        bgSide={"bg-gray-50"}
        bgSideHover={"hover:bg-gray-100"}
        icon={"text-gray-600"}
      />
    </div>
  );
};
