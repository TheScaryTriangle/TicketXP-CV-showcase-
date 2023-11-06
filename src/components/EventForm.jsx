import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import eventModule from '../api/eventModule';

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
  const [contract, setContract] = useState([])

  const initialValues = {
    EventName: '',
    EventID: '',
    EventDetails: '',
    VendorID: '',
    IsActive: true, // Default value for boolean
    EndOfSale: null,
    EventDate: null,
    TicketPrice: null,
    ContractAddress: '0xe4f638506e6DBA6EF0488770FD5eA8f8712bf64142FcdF871485F61332D89D78'
  };

  const handleSubmit = async(values) => {
    console.log('Form values:', values);
    const addEventCall = await eventModule.addNewEvent(values)
    console.log(addEventCall)
  };

  return (
    <div>
      <h2>Event Information</h2>
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
