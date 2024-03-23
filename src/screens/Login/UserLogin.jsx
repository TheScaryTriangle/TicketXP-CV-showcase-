import React, { useEffect, useState } from 'react';
import LoginForm from '../../components/LoginForm';
import RegistrationForm from '../../components/RegistrationForm';
import UserTable from '../../components/UserTable';
/**
 * @dev Use this as the login page if the user dosen't have a wallet provider
 * @returns Login page
 */
const UserLogin = () => {

    return (
        <div>
            <LoginForm/>
            <RegistrationForm/>
            <UserTable/>
        </div>
    )
}

export default UserLogin;