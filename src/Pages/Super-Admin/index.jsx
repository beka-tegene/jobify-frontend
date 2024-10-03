import React from "react";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { ManageAdmin } from "./ManageAdmin";
import { Report } from "./Report";
import { Settings } from "./Settings";

export const SuperAdmin = () => {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage-admins" element={<ManageAdmin />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};
