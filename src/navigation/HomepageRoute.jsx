import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../App.css';

import Homepage from "../screens/Homepage";
import EventPage from "../screens/Homepage/EventPage";
const HomepageRoute = () => {
  return (
    <div className="flex flex-col h-screen">
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/EventPage" element={<EventPage />} />
        {/* Default to Dashboard */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default HomepageRoute;
