import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginModule from '../api/loginModule';

import { useContractContext } from '../context/contractContext';
import { useWeb3React } from '@web3-react/core'

import Web3Login from './Web3Login';

const RegistrationForm = () => {
    const { setContract, contract } = useContractContext();
    const { active, chainId, account } = useWeb3React();

    const initialValues = {
        Username: '',
        Password: '',
        WalletAddress: account
    };

    const handleSubmit = async (values) => {
        console.log('Form values:', values);
        const registerUser = await loginModule.registerUser(values)
        console.log(registerUser)
    };
    return (
        <div>
            <h2>Register</h2>
            <Web3Login />
            <Formik
                initialValues={initialValues}
                // validationSchema={EventSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="Username">Username</label>
                        <Field type="text" id="Username" name="Username" placeholder="Email Address" />
                        <ErrorMessage name="Username" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="Password">Password</label>
                        <Field type="Password" id="Password" name="Password" placeholder="Password" />
                        <ErrorMessage name="Password" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="WalletAddress">Wallet Address</label>
                        <Field type="WalletAddress" id="WalletAddress" name="WalletAddress" placeholder="WalletAddress" />
                        <ErrorMessage name="WalletAddress" component="div" className="error" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;
