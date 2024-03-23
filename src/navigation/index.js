import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'

//Routes
import LoginRoute from './LoginRoute';
import DashboardRoute from "./DashboardRoute";
import HomepageRoute from './HomepageRoute';
import VendorRoute from './VendorRoute'

import QRCode from '../components/qrCode';

//APIs
import vendorModule from '../api/vendorModule';

const MainRouter = () => {
    const [apiCheck, setApiCheck] = useState(false);
    const { active, chainId, account } = useWeb3React();

    useEffect(() => {
        checkConnection();
    }, []);
    const checkConnection = async () => {
        try {
            await vendorModule.getVendorDetails();
            setApiCheck(true)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div>
            {apiCheck ?
                <div>
                    <DashboardRoute />
                    {/* <VendorRoute /> */}
                    {/* <QRCode/> */}
                </div>
                :
                <div>
                    <h1>Loading...</h1>
                </div>
                }

            {/* If there is a web3 provider use the dashboard otherwise go to login*/}
            {/* {active ? <DashboardRoute /> : <LoginRoute />} */}
        </div>
    )
}

export default MainRouter