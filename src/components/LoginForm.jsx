import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginModule from '../api/loginModule';

import { useContractContext } from '../context/contractContext';
import { useWeb3React } from '@web3-react/core'

const Login = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {

  useEffect(() => {
    setup()
  }, []);
  const setup = async () => {
    try {
      // const contract = await init(TicketNFTContractABI);
      // setContract(contract);

    } catch (e) {
      console.log(e)
    }
  }

  const initialValues = {
    username: 'Test',
    password: 'Test',
  };

  /**
   * 
   * @param {Obj} values Object form values from inital values
   */
  const handleSubmit = async (values) => {
    const loginCall = await loginModule.login(values)

    if (loginCall != "Failed") {
      console.log("Login successful")
    } else {
      alert("Failed")
    }
  };
  return (
    <div>
      {/* <Web3Login/> */}
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={EventSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" placeholder="Event Name" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="Event ID" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
