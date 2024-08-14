import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PersonalFormValues } from "../Models/FormValues";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

type PersonalFormProps = PersonalFormValues & {
  updateFields: (fields: Partial<PersonalFormValues>) => void;
};

const PersonalRegistrationForms: React.FC<PersonalFormProps> = ({
  fullName,
  email,
  dateOfBirth,
  updateFields,
}) => {
  const initialValues: PersonalFormValues = {
    fullName: "",
    email: "",
    dateOfBirth: "mm/dd/yyyy",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your Fullname"),
    email: Yup.string().email("Invalid email address").required("Required"),
    dateOfBirth: Yup.string().required("Please enter your Date of Birth"),
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
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Fullname
          </label>
          <Field
            id="fullname"
            name="fullname"
            type="text"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="fullname"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            email
          </label>
          <Field
            id="email"
            name="email"
            type="email"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date Of Birth
          </label>
          <Field
            id="dateOfBirth"
            name="dateOfBirth"
            type="text"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {/* <DatePicker value={day} onChange={setDay} /> */}

          <ErrorMessage
            name="dateOfBirth"
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

export default PersonalRegistrationForms;
