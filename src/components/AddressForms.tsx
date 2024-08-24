import React from "react";
import tailwindStyles from "../scripts/constants/styles";
// import { Field, ErrorMessage } from "formik";

// interface AddressInformationFormValues {
//   address: {
//     street: string;
//     city: string;
//     state: string;
//     zipCode: number;
//   };
// }

interface AddressProps {
  values: {
    // address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    // };
  };
  // values: AddressInformationFormValues;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: {
    AddressInformationForm?: {
      // address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      // };
    };
  };
  touched: {
    AddressInformationForm?: {
      // address?: {
      street?: boolean;
      city?: boolean;
      state?: boolean;
      zipCode?: boolean;
      // };
    };
  };
}

const AddressInformationForms = ({
  values,
  onChange,
  onBlur,
  errors,
  touched,
}: AddressProps) => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5 text-xl"> Address Information </h3>

      <div>
        <label
          htmlFor="street"
          className="block text-sm font-medium text-gray-800"
        >
          street Address
        </label>
        <input
          type="text"
          name="AddressInformationForm.street"
          id="street"
          value={values.street}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.AddressInformationForm?.street &&
            touched.AddressInformationForm?.street
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.AddressInformationForm?.street &&
        touched.AddressInformationForm?.street ? (
          <div className={tailwindStyles.errorText}>
            {errors.AddressInformationForm?.street}
          </div>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-800"
        >
          City
        </label>
        <input
          type="text"
          name="AddressInformationForm.city"
          id="city"
          value={values.city}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.AddressInformationForm?.city &&
            touched.AddressInformationForm?.city
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.AddressInformationForm?.city &&
        touched.AddressInformationForm?.city ? (
          <div className={tailwindStyles.errorText}>
            {errors.AddressInformationForm.city}
          </div>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium text-gray-800"
        >
          Zip Code
        </label>
        <input
          type="text"
          name="AddressInformationForm.zipCode"
          id="zipCode"
          value={values.zipCode}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.AddressInformationForm?.zipCode &&
            touched.AddressInformationForm?.zipCode
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.AddressInformationForm?.zipCode &&
        touched.AddressInformationForm?.zipCode ? (
          <div className={tailwindStyles.errorText}>
            {errors.AddressInformationForm.zipCode}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default AddressInformationForms;
