import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const VendorLogin = () => {
    
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default VendorLogin;