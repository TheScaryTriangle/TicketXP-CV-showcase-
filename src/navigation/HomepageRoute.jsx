import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../App.css';

import Homepage from "../screens/Homepage";

const HomepageRoute = () => {
  return (
    <div className="flex flex-col h-screen">
        <Homepage/>
    </div>
  );
};

export default HomepageRoute;
