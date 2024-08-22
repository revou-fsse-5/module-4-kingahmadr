import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterFormProps } from "../interface";
import { useFetchData } from "../modules/UseFetchData";
import tailwindStyles from "../scripts/constants/styles";
import { RegisterValidationForm } from "../modules/ValidationSchema";
const RegisterForm = () => {
  const { addUsers } = useFetchData();

  const handleSubmit = (data: RegisterFormProps) => {
    addUsers(data);
  };
  const formik = useFormik<RegisterFormProps>({
    initialValues: {
      fullname: "",
      email: "",
      dateOfBirth: "mm/dd/yyyy",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: 0,
      },
      username: "",
      password: "",
      confirmPassword: "",
      //   fullname: "Ahmad",
      //   email: "ahmad@email.com",
      //   dateOfBirth: "08/08/1998",
      //   address: {
      //     street: "Tegalgondo",
      //     city: "Malang",
      //     state: "Indonesia",
      //     zipCode: 89098,
      //   },
      //   username: "ahmad",
      //   password: "dddfRRR444%da",
      //   confirmPassword: "dddfRRR444%da",
    },
    validationSchema: RegisterValidationForm,
    onSubmit: (values, { setSubmitting }) => {
      const { confirmPassword, ...dataToSubmit } = values;
      setTimeout(() => {
        handleSubmit(dataToSubmit);
        setSubmitting(false);
        console.log(dataToSubmit);
      }, 400);
    },
  });
  return (
    <section className="flex flex-col items-center gap-10">
      <h1 className="text-5xl text-white text-center mt-5">Register Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <label
          className="text-lg font-semibold text-gray-900"
          htmlFor="fullname"
        >
          Fullname
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="fullname"
          name="fullname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullname}
        />
        {formik.errors.fullname && formik.touched.fullname ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.fullname}
          </div>
        ) : null}
        <label className="text-lg font-semibold text-gray-900" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className={tailwindStyles.errorText}>{formik.errors.email}</div>
        ) : null}
        <label
          className="text-lg font-semibold text-gray-900"
          htmlFor="dateOfBirth"
        >
          Date Of Birth
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="dateOfBirth"
          name="dateOfBirth"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.dateOfBirth}
        />
        {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.dateOfBirth}
          </div>
        ) : null}
        <label className="text-lg font-semibold text-gray-900" htmlFor="street">
          Street
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="street"
          name="address.street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address.street}
        />
        {formik.errors.address?.street && formik.touched.address?.street ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.address.street}
          </div>
        ) : null}
        <label className="text-lg font-semibold text-gray-900" htmlFor="city">
          City
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="city"
          name="address.city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address.city}
        />
        {formik.errors.address?.city && formik.touched.address?.city ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.address.city}
          </div>
        ) : null}
        <label className="text-lg font-semibold text-gray-900" htmlFor="state">
          State
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="state"
          name="address.state"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address.state}
        />
        {formik.errors.address?.state && formik.touched.address?.state ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.address.state}
          </div>
        ) : null}
        <label
          className="text-lg font-semibold text-gray-900"
          htmlFor="zipCode"
        >
          Zip Code
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="zipCode"
          name="address.zipCode"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.address.zipCode}
        />
        {formik.errors.address?.zipCode && formik.touched.address?.zipCode ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.address.zipCode}
          </div>
        ) : null}
        <label
          className="text-lg font-semibold text-gray-900"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && formik.touched.username ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.username}
          </div>
        ) : null}
        <label
          className="text-lg font-semibold text-gray-900"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.password}
          </div>
        ) : null}
        <label
          className="text-lg font-semibold text-gray-900"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
          <div className={tailwindStyles.errorText}>
            {formik.errors.confirmPassword}
          </div>
        ) : null}
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Register User
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
