import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../App.css';

import VendorLogin from "../screens/VendorDashboard/VendorLogin";

const HomepageRoute = () => {
  return (
    <div className="flex flex-col h-screen">
        <VendorLogin/>
    </div>
  );
};

export default HomepageRoute;
