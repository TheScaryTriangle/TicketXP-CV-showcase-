import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Dashboard from "../screens/Dashboard/Dashboard";
import Header from "../screens/Dashboard/Header";

const mainPageArr = [
    Dashboard
]

const DashboardRoute = () => {
    return (
        <div className="flex">
            {/* Sidebar on the left */}
            <div className="w-[15%] bg-gray-300 p-4">
                <ul>
                    {mainPageArr.map((Component, index) => (
                        <li key={index}>
                            <Link to={`/${Component.name}`}>{Component.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content on the right */}
            <div className="w-[85%] p-4">
                <Header />
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    {/* Add a wildcard route for unmatched paths */}
                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
};

export default DashboardRoute;
