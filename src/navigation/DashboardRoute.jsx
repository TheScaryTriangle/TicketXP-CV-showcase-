import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../App.css';

import Dashboard from "../screens/Homepage/Dashboard";
import Header from "../screens/Homepage/Header";
import Navbar from "../screens/Homepage/Navbar";
import EventPage from "../screens/Homepage/EventPage";

const mainPageArr = [Dashboard];

const DashboardRoute = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      {/* <div style={{ paddingTop: "50px" }}>
        <Navbar />
      </div> */}

      <div className="flex flex-grow">
        <div className="w-[90%] p-4">
          <div >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} /> {/* Use lowercase "dashboard" */}
              <Route path="/EventPage" element={<EventPage />} />
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
