import React, { useEffect, useState } from 'react';

//Web3
import TokenFunctions from '../web3/TokenFunctions';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TokenTransfer = ({currentBalance = 0, contract,account}) => {
        // Define the Formik form
        const formik = useFormik({
            initialValues: {
                toAddress: '',
                transferAmount: '',
            },
            validationSchema: Yup.object().shape({
                toAddress: Yup.string()
                .matches(/^0x[0-9a-fA-F]{40}$/, 'Invalid Ethereum address')
                .required('Ethereum address is required'),          
                transferAmount: Yup.number()
                    .typeError('Transfer amount must be a number')
                    .required('Transfer amount is required')
                    .positive('Transfer amount must be positive')
                    .max(
                        currentBalance,
                        `Transfer amount must be less than or equal to ${currentBalance}`
                    ),
            }),
            onSubmit: async (values, { resetForm }) => {
                try {
                    // Perform the transfer
                    const { toAddress, transferAmount } = values;
                    const response = await TokenFunctions.transfer({
                      contract,
                      to: toAddress,
                      amount: transferAmount,
                      from: account, // Pass the 'from' parameter
                    });
                    // Handle the response as needed
                    console.log('Transfer response:', response);
                    // Reset the form
                    // resetForm();
                  } catch (error) {
                    console.error('Transfer error:', error);
                  }              
            },
        });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="toAddress">To Address:</label>
                <input
                    type="text"
                    id="toAddress"
                    name="toAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.toAddress}
                />
                {formik.touched.toAddress && formik.errors.toAddress && (
                    <div className="error">{formik.errors.toAddress}</div>
                )}
            </div>
            <div>
                <label htmlFor="transferAmount">Transfer Amount:</label>
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
            <button type="submit">Transfer</button>
        </form>
    )
}

export default TokenTransfer;
