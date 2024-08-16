import React from "react";
import { Field, ErrorMessage } from "formik";

const AddressInformationForms: React.FC = () => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5 text-xl"> Address Information </h3>

      <div>
        <label
          htmlFor="streetAddress"
          className="block text-sm font-medium text-gray-800"
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
          className="block text-sm font-medium text-gray-800"
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
          className="block text-sm font-medium text-gray-800"
        >
          Zip Code
        </label>
        <Field
          id="zipCode"
          name="zipCode"
          type="number"
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {/* <DatePicker value={day} onChange={setDay} /> */}

        <ErrorMessage
          name="zipCode"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </section>
  );
};

export default AddressInformationForms;
