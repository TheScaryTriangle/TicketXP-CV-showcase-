import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Route, Routes } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import vendorModule from '../../api/vendorModule';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import VendorForm from '../../components/VendorForm';
import VendorTable from '../../components/VendorTable';

const VendorDashboard = () => {

    return (
        <div>
            <VendorTable />
            <VendorForm />
        </div>
    );
};

export default VendorDashboard;