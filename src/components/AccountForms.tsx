import React from "react";
// import { Field, ErrorMessage } from "formik";
import tailwindStyles from "../scripts/constants/styles";

interface AccountProps {
  values: {
    username: string;
    password: string;
    confirmPassword: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: {
    AccountInformationForm?: {
      username?: string;
      password?: string;
      confirmPassword?: string;
    };
  };
  touched: {
    AccountInformationForm?: {
      username?: boolean;
      password?: boolean;
      confirmPassword?: boolean;
    };
  };
}

const AccountInformationForms = ({
  values,
  onChange,
  onBlur,
  errors,
  touched,
}: AccountProps) => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5 text-xl">Account Information</h3>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-800"
        >
          Username
        </label>
        <input
          type="text"
          name="AccountInformationForm.username"
          id="username"
          value={values.username}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.AccountInformationForm?.username &&
            touched.AccountInformationForm?.username
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.AccountInformationForm?.username &&
        touched.AccountInformationForm?.username ? (
          <div className={tailwindStyles.errorText}>
            {errors.AccountInformationForm.username}
          </div>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-800"
        >
          Password
        </label>
        <input
          type="text"
          name="AccountInformationForm.password"
          id="password"
          value={values.password}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.AccountInformationForm?.password &&
            touched.AccountInformationForm?.password
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.AccountInformationForm?.password &&
        touched.AccountInformationForm?.password ? (
          <div className={tailwindStyles.errorText}>
            {errors.AccountInformationForm.password}
          </div>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-800"
        >
          Confirm Password
        </label>
        <input
          type="text"
          name="AccountInformationForm.confirmPassword"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.AccountInformationForm?.confirmPassword &&
            touched.AccountInformationForm?.confirmPassword
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.AccountInformationForm?.confirmPassword &&
        touched.AccountInformationForm?.confirmPassword ? (
          <div className={tailwindStyles.errorText}>
            {errors.AccountInformationForm.confirmPassword}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default AccountInformationForms;
