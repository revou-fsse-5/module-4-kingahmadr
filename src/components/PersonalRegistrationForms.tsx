import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PersonalFormValues } from "../Models/FormValues";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

type PersonalFormProps = PersonalFormValues & {
  updateFields: (fields: Partial<PersonalFormValues>) => void;
};

const PersonalRegistrationForms = ({}) => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5"> Personal Registration </h3>
      {/* <Form className="space-y-6 p-5 mx-auto max-w-md"> */}
      <div>
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-gray-800"
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
          className="block text-sm font-medium text-gray-800"
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
          className="block text-sm font-medium text-gray-800"
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
      {/* </Form> */}
    </section>
  );
};

export default PersonalRegistrationForms;
