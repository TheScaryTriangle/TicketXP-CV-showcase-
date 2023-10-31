
import { useWeb3React } from '@web3-react/core'
import LoginRoute from './LoginRoute';
import DashboardRoute from "./DashboardRoute";
import HomepageRoute from './HomepageRoute';
import VendorRoute from './VendorRoute'

const MainRouter = () => {
    const { active, chainId, account } = useWeb3React();

    return (
        <div>
            {/* <VendorRoute/> */}
            <DashboardRoute/>
            {/* If there is a web3 provider use the dashboard otherwise go to login*/}
            {/* {active ? <DashboardRoute /> : <LoginRoute />} */}
        </div>
    )
}

export default MainRouter