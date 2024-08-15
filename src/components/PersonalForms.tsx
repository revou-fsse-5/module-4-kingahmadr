import { Field, ErrorMessage } from "formik";

const PersonalRegistrationForms = () => {
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

        <ErrorMessage
          name="dateOfBirth"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </section>
  );
};

export default PersonalRegistrationForms;
