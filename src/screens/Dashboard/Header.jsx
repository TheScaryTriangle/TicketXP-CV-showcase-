import React from 'react';
import { useWeb3React } from '@web3-react/core';
import '../../css/Header.css'; // Import your CSS file for styling

const Header = () => {
  const { active, chainId, account } = useWeb3React();

  return (
    <div className="header-bar">
      <div className="header-content">
        <div className="connection-status">
          Connection Status: {active.toString()}
        </div>
        <div className="account">Account: {account}</div>
        <div className="network-id">Network ID: {chainId}</div>
      </div>
    </div>
  );
};

export default Header;
