import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { AccountFormValues } from "../Models/FormValues";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

type AccountFormProps = AccountFormValues & {
  updateFields: (fields: Partial<AccountFormValues>) => void;
};

const AccountInformationForms: React.FC<AccountFormProps> = ({
  username,
  password,
  confirmPassword,
  updateFields,
}) => {
  const initialValues: AccountFormValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your Fullname"),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
      .min(6, "Password must be at least 6 characters")
      .required(
        "Please valid password. One uppercase, one lowercase, one special character and no spaces"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
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
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <Field
            id="username"
            name="username"
            type="text"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Field
            id="password"
            name="password"
            type="password"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {/* <DatePicker value={day} onChange={setDay} /> */}

          <ErrorMessage
            name="confirmPassword"
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

export default AccountInformationForms;
