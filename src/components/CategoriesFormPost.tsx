import React from "react";
import { CategoriesProps } from "../interface";
import { useFetchData } from "../modules/UseFetchData";
import { useFormik } from "formik";

const CategoriesFormPost = () => {
  const { addCategories } = useFetchData();
  const formik = useFormik<CategoriesProps>({
    initialValues: {
      name: "",
      description: "",
    },

    onSubmit: (values: CategoriesProps) => {
      addCategories(values.name, values.description);
      console.log(values);
    },
  });

  return (
    <div className="h-[50vh] w-full flex justify-center items-center flex-col">
      <form
        className="bg-white border-2 border-gray-300 p-4 rounded-md max-wd-80 min-h-[300px] flex flex-col justify-between w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <label className="text-2xl text-gray-900" htmlFor="name">
          Name
        </label>
        <input
          className="block w-full px-3 py-2 mt-1 border border-gray-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label className="text-2xl text-gray-900" htmlFor="description">
          Description
        </label>
        <input
          className="block w-full px-3 py-2 mt-1 border border-gray-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <button
          className="w-24 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Add Data
        </button>
      </form>
    </div>
  );
};

export default CategoriesFormPost;
