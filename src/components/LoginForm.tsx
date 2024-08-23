import { useFormik } from "formik";
import { LoginProps } from "../interface";
import { useFetchData } from "../modules/UseFetchData";
import tailwindStyles from "../scripts/constants/styles";
import { LoginValidationForm } from "../modules/ValidationSchema";
// import { useState } from "react";
import { useDataContext } from "../context/UseDataContext";

const LoginForm = () => {
  const { userLogin } = useFetchData();
  const { checked, handleCheckboxChange } = useDataContext();
  // const [checked, setChecked] = useState(false);
  // const handleCheckboxChange = () => {
  //   setChecked(!checked);
  //   localStorage.setItem("key", "remember Me");
  // };

  if (checked === false) {
    localStorage.removeItem("key");
    localStorage.removeItem("email");
  }

  const handleSubmit = (data: LoginProps) => {
    userLogin(data);
  };
  const formik = useFormik<LoginProps>({
    initialValues: {
      //   username: "",
      //   email: "",
      //   password: "",
      username: "romiz",
      email: "romiz@email.com",
      password: "dddfRRR444%da",
    },
    validationSchema: LoginValidationForm,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        handleSubmit(values);
        setSubmitting(false);
        console.log(values);
      }, 2000);
    },
  });
  return (
    <section className="flex flex-col items-center gap-10">
      <h1 className="text-5xl text-white text-center mt-5">Login Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
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
        <label htmlFor="checkbox" className="inline-flex items-center">
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2 text-gray-700">Remember Me</span>
        </label>
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
