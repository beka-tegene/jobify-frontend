import React from "react";
import { Sidebar } from "../../../../Components";
import {
  FaChartBar,
  FaCog,
  FaTachometerAlt,
  FaUserShield,
} from "react-icons/fa";

export const AdminSidebar = () => {
  const sideLinks = [
    { path: "/super-admin/dashboard", name: "Dashboard", icon: FaTachometerAlt },
    { path: "/super-admin/manage-admins", name: "Manage Admins", icon: FaUserShield },
    // { path: "/super-admin/reports", name: "Reports & Analytics", icon: FaChartBar },
    { path: "/super-admin/settings", name: "Settings", icon: FaCog },
  ];

  return (
    <div className="h-full p-3 bg-gray-50">
      <Sidebar
        links={sideLinks}
        color={"bg-white text-gray-800"}
        bgSide={"bg-gray-200"}
        bgSideHover={"hover:bg-gray-100"}
        icon={"text-gray-800"}
      />
    </div>
  );
};
