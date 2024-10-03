import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.jsx";
import { FindJob } from "./FindJob/index.jsx";
import { About } from "./About/index.jsx";
import { Contact } from "./Contact/index.jsx";
import { JobDetail } from "./JobDetail/index.jsx";

export const Landing = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="find-job" element={<FindJob />} />
      <Route path="find-job/:id" element={<JobDetail />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
    </Routes>
  );
};
