import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { Link, Route, Routes } from "react-router-dom";
import { mainPageArr } from '../../utility/MainPageArray';

const Navbar = () => {

  return (
    <div className="w-[10%] bg-gray-300 p-4">
    <ul style={{ marginTop: "20px" }}>
      {mainPageArr.map((Component, index) => (
        <li key={index}>
          <Link to={`/${Component.name}`}>{Component.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Navbar;
