import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { PanalNav } from "../../../../Components";

export const AdminNav = () => {
  return (
    <PanalNav
      username="John"
      ProfileIcon={FaUser}
      notificationLink="/admin/notifications"
      profileLink="/admin/profile"
      settingsLink="/admin/settings"
    />
  );
};
