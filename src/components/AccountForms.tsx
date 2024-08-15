import React from "react";
import { Field, ErrorMessage } from "formik";

const AccountInformationForms: React.FC = () => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5">Account Information</h3>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-800"
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
          className="block text-sm font-medium text-gray-800"
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
          className="block text-sm font-medium text-gray-800"
        >
          Confirm Password
        </label>
        <Field
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <ErrorMessage
          name="confirmPassword"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </section>
  );
};

export default AccountInformationForms;
