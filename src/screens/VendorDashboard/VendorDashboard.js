import React, { useEffect, useState } from 'react';

import VendorForm from '../../components/VendorForm';
import VendorTable from '../../components/VendorTable';

import EventTable from '../../components/EventTable';
import EventForm from '../../components/EventForm';

const VendorDashboard = () => {

    return (
        <div>
            {/* <VendorTable />
            <VendorForm /> */}
            <EventTable />
            <EventForm />
        </div>
    );
};

export default VendorDashboard;