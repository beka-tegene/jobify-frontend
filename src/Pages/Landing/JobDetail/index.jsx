import React from "react";
import { Navigate } from "../Navigate";
import { Footer } from "../Footer";
import { JobData } from "./JobData";

export const JobDetail = () => {
  return (
    <div>
      <Navigate />
      <JobData />
      <Footer />
    </div>
  );
};
