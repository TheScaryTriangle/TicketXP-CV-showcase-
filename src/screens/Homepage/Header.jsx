import React from 'react';
import { Formik, Form, Field } from 'formik';

function Header() {
  const handleSubmit = (values, actions) => {
    // Handle the form submission here (e.g., perform search).
    console.log(values.searchQuery);
    actions.setSubmitting(false); // Optional: Reset the form's submission state
  };

  return (
    <div className="header" style={{ background: 'blue', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <a href="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>Ticket XP</h1>
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Formik
          initialValues={{ searchQuery: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              type="text"
              name="searchQuery"
              placeholder="Search"
              style={{ padding: '5px', marginRight: '10px' }}
            />
            <button type="submit" style={{ background: 'blue', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
              Search
            </button>
          </Form>
        </Formik>
        <a href="/cart" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Cart</a>
        <a href="/EventPage" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Events</a>
        <a href="/contact-us" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</a>
        <a href="/UserLogin" style={{ textDecoration: 'none', color: 'white' }}>Login</a>
      </div>
    </div>
  );
}

export default Header;
