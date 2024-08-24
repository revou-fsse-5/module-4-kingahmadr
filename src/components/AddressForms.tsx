import React from "react";
import { Field, ErrorMessage } from "formik";

interface AddressFormsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AddressInformationForms = ({ onChange, onBlur }: AddressFormsProps) => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5 text-xl"> Address Information </h3>

      <div>
        <label
          htmlFor="address.street"
          className="block text-sm font-medium text-gray-800"
        >
          street Address
        </label>
        <Field
          id="address.street"
          name="address.street"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ErrorMessage
          name="address.street"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="address.state"
          className="block text-sm font-medium text-gray-800"
        >
          State
        </label>
        <Field
          id="address.state"
          name="address.state"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ErrorMessage
          name="address.state"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="address.city"
          className="block text-sm font-medium text-gray-800"
        >
          City
        </label>
        <Field
          id="address.city"
          name="address.city"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <ErrorMessage
          name="address.city"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="address.zipCode"
          className="block text-sm font-medium text-gray-800"
        >
          Zip Code
        </label>
        <Field
          id="address.zipCode"
          name="address.zipCode"
          type="number"
          onChange={onChange}
          onBlur={onBlur}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {/* <DatePicker value={day} onChange={setDay} /> */}

        <ErrorMessage
          name="address.zipCode"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </section>
  );
};

export default AddressInformationForms;
