import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Route, Routes } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

/**
 * 
 * @returns Vendor Login screen
 */
const VendorLogin = () => {

    /**
     * @todo Add a proper Value check from DB
     * @param {Obj} values Values from formik
     */
    const handleSubmit = (values) => {
        console.log(values)

        //This is the testing check remove this later
        const dummyLogin = {
            "email": "asd@asd",
            "password": "asd"
        };
        if (objectsMatch(values,dummyLogin)) {
            console.log("Match")
        }
    };

    function objectsMatch(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }

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