import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { RegisterFormValues } from "../Models/FormValues";

interface LoginFormProps {
  onSubmit: (values: RegisterFormValues) => void;
}

const RegisterForms: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const initialValues: RegisterFormValues = {
    fullName: "",
    email: "",
    dateOfBirth: "mm/dd/yyyy",
    streetAddress: "",
    city: "",
    zipCode: 0,
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your Fullname"),
    email: Yup.string().email("Invalid email address").required("Required"),
    dateOfBirth: Yup.string().required("Please enter your Date of Birth"),
    streetAddress: Yup.string().required("Please enter your Street Address"),
    city: Yup.string().required("Please enter your Domicile"),
    zipCode: Yup.number().required("Please enter your Zip Code"),
    username: Yup.string().required("Please enter your username"),
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
          onSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6 p-5 mt-5">
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
            <ErrorMessage
              name="dateOfBirth"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Street Address
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
              type="number"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="zipCode"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
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
            <ErrorMessage
              name="confirmPassword"
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
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForms;
