import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const PanalNav = ({
  username,
  notifications = [],
  NotificationIcon,
  ProfileIcon,
  notificationLink,
  profileLink,
  settingsLink,
  link,
}) => { 
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };

  return (
    <header className="bg-[#FFF] text-black flex justify-between items-center p-4">
      <div className="text-black text-sm">Welcome, {username}!</div>
      <div className="flex items-center space-x-7">
        <div className="relative">
          <button onClick={handleProfileClick} className="relative">
            <ProfileIcon className="text-xl" />
          </button>
          {isProfileDropdownOpen && (
            <div className="fixed w-full">
              <div
                className="bg-[#0001] top-0 right-0 left-0 bottom-0 fixed"
                onClick={() => setIsProfileDropdownOpen(false)}
              ></div>
              <div className="fixed right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden p-2">
                <ul>
                  <li className="p-2 border-b hover:bg-gray-100">
                    <NavLink to={profileLink} className="block text-sm">
                      View Profile
                    </NavLink>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink to={settingsLink} className="block text-sm">
                      Settings
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
