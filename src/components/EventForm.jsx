import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import eventModule from '../api/eventModule';

import { init } from '../web3/initiation';
import { useContractContext } from '../context/contractContext';
import { useWeb3React } from '@web3-react/core'
import TicketNFTContractABI from '../web3/contracts/TicketXP.json'

import Web3Login from './Web3Login';

const EventSchema = Yup.object().shape({
  EventName: Yup.string().required('Event Name is required'),
  EventID: Yup.string(),
  EventDetails: Yup.string(),
  VendorID: Yup.string(),
  IsActive: Yup.boolean(),
  EndOfSale: Yup.date(),
  EventDate: Yup.date(),
  TicketPrice: Yup.number(),
});
 
const EventForm = () => {
  const { setContract, contract } = useContractContext();
  const { active, chainId, account } = useWeb3React();

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
    EventName: '',
    EventID: '10',
    EventDetails: 'Test event for backend',
    VendorID: 'true',
    IsActive: true,
    EndOfSale: "2023-11-17",
    EventDate: "2023-11-17",
    TicketPrice: 1,
    ContractAddress: '0xe4f638506e6DBA6EF0488770FD5eA8f8712bf64142FcdF871485F61332D89D78',
    IsApproved: false,
    IsOnContract: false,
  };

  const handleSubmit = async (values) => {
    console.log('Form values:', values);
    const addEventCall = await eventModule.addNewEvent(values)
    if (addEventCall.success) {
      // alert("Created")
      console.log("Created")
      console.log(account)
      const contractCallRequest = await contract.methods.createEvent(
        addEventCall.data._id,
        values.TicketPrice
      ).send({ from: account })
      console.log(contractCallRequest)
    } else {
      alert("Failed")
    }
  };

  return (
    <div>
      <h2>Add event</h2>
      <Web3Login/>
      <Formik
        initialValues={initialValues}
        validationSchema={EventSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="EventName">Event Name</label>
            <Field type="text" id="EventName" name="EventName" placeholder="Event Name" />
            <ErrorMessage name="EventName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="EventID">Event ID</label>
            <Field type="text" id="EventID" name="EventID" placeholder="Event ID" />
            <ErrorMessage name="EventID" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="EventDetails">Event Details</label>
            <Field type="text" id="EventDetails" name="EventDetails" placeholder="Event Details" />
            <ErrorMessage name="EventDetails" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="VendorID">Vendor ID</label>
            <Field type="text" id="VendorID" name="VendorID" placeholder="Vendor ID" />
            <ErrorMessage name="VendorID" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="IsActive">Is Active</label>
            <Field type="checkbox" id="IsActive" name="IsActive" />
          </div>

          <div>
            <label htmlFor="EndOfSale">End of Sale</label>
            <Field type="date" id="EndOfSale" name="EndOfSale" />
            <ErrorMessage name="EndOfSale" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="EventDate">Event Date</label>
            <Field type="date" id="EventDate" name="EventDate" />
            <ErrorMessage name="EventDate" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="TicketPrice">Ticket Price</label>
            <Field type="number" id="TicketPrice" name="TicketPrice" placeholder="Ticket Price" />
            <ErrorMessage name="TicketPrice" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EventForm;
