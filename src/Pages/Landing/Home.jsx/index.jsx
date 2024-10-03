import React from "react";
import { Navigate } from "../Navigate";
import { Hero } from "./Hero";
import { Latest } from "./Latest";
import { About } from "./About";
import { Footer } from "../Footer";
export const Home = () => {
  return (
    <div>
      <Navigate />
      <Hero />
      <Latest />
      <About />
      <Footer />
    </div>
  );
};
