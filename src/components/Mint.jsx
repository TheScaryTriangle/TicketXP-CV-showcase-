import React, { useEffect, useState } from 'react';

//Web3
import TokenFunctions from '../web3/TokenFunctions';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Mint = ({ contract, account, onSuccess, onFailure}) => {
    // Define the Formik form
    const formik = useFormik({
        initialValues: {
            transferAmount: '',
        },
        validationSchema: Yup.object().shape({
            transferAmount: Yup.number()
                .typeError('Transfer amount must be a number')
                .required('Transfer amount is required')
                .positive('Transfer amount must be positive')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                // Perform the transfer
                const { transferAmount } = values;
                const response = await TokenFunctions.mint({
                    contract,
                    amount: transferAmount,
                    from: account,
                });
                // Handle the response as needed
                console.log('Transfer response:', response);
                // Reset the form
                onSuccess()
                resetForm();
            } catch (error) {
                console.error('Transfer error:', error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="transferAmount">Mint Amount:</label>
                <input
                    type="number"
                    id="transferAmount"
                    name="transferAmount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.transferAmount}
                />
                {formik.touched.transferAmount && formik.errors.transferAmount && (
                    <div className="error">{formik.errors.transferAmount}</div>
                )}
            </div>
            <button type="submit">Mint</button>
        </form>
    )
}

export default Mint;
