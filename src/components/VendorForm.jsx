import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import vendorModule from '../api/vendorModule';

/**
 * @dev This form is for adding a new vendor onto the system
 * @todo Remove the VendorId field once the vendor ID changes have been made on the backend
 * @todo Add validation and loading icon when sending 
 */
const VendorForm = () => {
    const initialValues = {
        VendorName: '',
        VendorDescription: '',
        VendorID: '5',
        IsActive: 1,
    };

    const validationSchema = Yup.object().shape({
        VendorName: Yup.string().required('Vendor Name is required'),
        VendorDescription: Yup.string().required('Vendor Description is required'),
    });

    const handleSubmit = async (values) => {
        const newVendorRequest = await vendorModule.createVendor(values)
        console.log(newVendorRequest)
    };

    return (
        <div>
            <h2>Vendor Information</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="VendorName">Vendor Name</label>
                        <Field
                            type="text"
                            id="VendorName"
                            name="VendorName"
                            placeholder="Vendor Name"
                        />
                        <ErrorMessage name="VendorName" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="VendorDescription">Vendor Description</label>
                        <Field
                            type="text"
                            id="VendorDescription"
                            name="VendorDescription"
                            placeholder="Vendor Description"
                        />
                        <ErrorMessage name="VendorDescription" component="div" className="error" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default VendorForm;
