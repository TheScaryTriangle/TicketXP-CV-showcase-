import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../App.css';

import Dashboard from "../screens/Dashboard/Dashboard";
import Header from "../screens/Dashboard/Header";
import Navbar from "../screens/Dashboard/Navbar";

const mainPageArr = [Dashboard];

const DashboardRoute = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div style={{ paddingTop: "50px" }}>
        <Navbar />
      </div>

      <div className="flex flex-grow">
        <div className="w-[90%] p-4">
          <div style={{ paddingTop: "50px" }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} /> {/* Use lowercase "dashboard" */}
              {/* Default to Dashboard */}
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoute;
