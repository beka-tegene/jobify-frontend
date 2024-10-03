import React from "react";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { ManageJob } from "./ManageJob";
import { ManageCompany } from "./ManageCompany";
import { Settings } from "./Settings";
import { DetailJob } from "./DetailJob";
import { PostJob } from "./PostJob";

export const Admin = () => {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<ManageJob />} />
        <Route path="jobs/post" element={<PostJob />} />
        <Route path="jobs/post/:id" element={<PostJob />} />
        <Route path="jobs/:id" element={<DetailJob />} />
        <Route path="companies" element={<ManageCompany />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};
