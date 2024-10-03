import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminNav } from "./AdminNav";

export const Layout = ({ children }) => {   
  return (
    <div className="grid grid-cols-11 h-screen">
      <div className="col-span-2 h-full">
        <AdminSidebar />
      </div>
      <div className="col-span-9 h-full">
        <AdminNav />
        <main className="max-h-[91vh] overflow-y-scroll h-full bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};
