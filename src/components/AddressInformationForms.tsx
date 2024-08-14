import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { AddressFormValues } from "../Models/FormValues";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

type AddressFormProps = AddressFormValues & {
  updateFields: (fields: Partial<AddressFormValues>) => void;
};

const AddressInformationForms: React.FC<AddressFormProps> = ({
  streetAddress,
  city,
  zipCode,
  updateFields,
}) => {
  const initialValues: AddressFormValues = {
    streetAddress: "",
    city: "",
    zipCode: 0,
  };

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Please enter your Street Address"),
    city: Yup.string().required("Required"),
    zipCode: Yup.number().required("Please enter your Zip Code"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout((): void => {
          //   onSubmit(values);
          setSubmitting(false);
        }, 400);
        console.log(values);
      }}
    >
      {/* {({ isSubmitting }) => ( */}
      <Form className="space-y-6 p-5 mx-auto max-w-md">
        <div>
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700"
          >
            street Address
          </label>
          <Field
            id="streetAddress"
            name="streetAddress"
            type="text"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="streetAddress"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <Field
            id="city"
            name="city"
            type="text"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="city"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip Code
          </label>
          <Field
            id="zipCode"
            name="zipCode"
            type="text"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {/* <DatePicker value={day} onChange={setDay} /> */}

          <ErrorMessage
            name="zipCode"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        {/* <div className="flex w-full justify-between">
          <button
            type="submit"
            className="w-32 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div> */}
      </Form>
      {/* )} */}
    </Formik>
  );
};

export default AddressInformationForms;
