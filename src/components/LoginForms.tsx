import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { LoginFormValues } from "../Models/FormValues";

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForms: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
      .required(
        "Please valid password. One uppercase, one lowercase, one special character and no spaces"
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout((): void => {
          onSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6 p-5 mt-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              username
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForms;
