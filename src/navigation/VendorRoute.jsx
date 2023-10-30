import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../App.css';

import VendorLogin from "../screens/VendorDashboard/VendorLogin";
import VendorDashboard from "../screens/VendorDashboard/VendorDashboard";

const HomepageRoute = () => {
  return (
    <div className="flex flex-col h-screen">
        <VendorDashboard/>
    </div>
  );
};

export default HomepageRoute;
