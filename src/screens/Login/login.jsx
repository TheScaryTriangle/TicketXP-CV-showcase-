import React, { useEffect, useState } from 'react';
import Web3Login from '../../components/Web3Login';

/**
 * @dev Use this as the login page if the user dosen't have a wallet provider
 * @returns Login page
 */
const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <p>This app requires you to have a  wallet connected</p>
            <Web3Login/>
        </div>
    )
}

export default Login;