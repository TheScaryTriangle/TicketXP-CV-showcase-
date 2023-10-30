import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  const initialValues = {
    EventName: '',
    EventID: '',
    EventDetails: '',
    VendorID: '',
    IsActive: true, // Default value for boolean
    EndOfSale: null,
    EventDate: null,
    TicketPrice: null,
  };

  const handleSubmit = (values) => {
    console.log('Form values:', values);
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
