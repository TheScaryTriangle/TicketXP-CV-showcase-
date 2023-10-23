import React from "react";
import { Route, Routes } from "react-router-dom"
import Login from "../screens/Login/login";

const LoginRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
          {/* Add a wildcard route for unmatched paths */}
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default LoginRoute;
