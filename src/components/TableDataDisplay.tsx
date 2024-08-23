import React, { useEffect, useState } from "react";
import { useFetchData } from "../modules/UseFetchData";
import CategoriesFormPost from "./CategoriesFormPost";
import CategoriesFormPut from "./CategoriesFormPut";
import ModalConfirmation from "./ModalConfirmation";

const TableDataDisplay = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [togglePutForm, setTogglePutForm] = useState<number | null>(null);
  const [toggleDeleteModal, setToggleDeleteModal] = useState<number | null>(
    null
  );
  const [togglePut, setTogglePut] = useState<boolean>(false);
  const [toggleDelete, setToggleDelete] = useState<boolean>(false);
  const { data, getCategories } = useFetchData();

  useEffect(() => {
    getCategories();
  }, []);

  const displayComponent = () => {
    setToggle(!toggle);
  };
  const displayTogglePut = () => {
    setTogglePut(!togglePut);
  };

  const displayUpdateCategoriesComponent = (id: number) => {
    setTogglePut(!togglePut);
    setTogglePutForm(id);
  };
  const displayDeleteComponent = (id: number) => {
    setToggleDelete(!toggleDelete);
    setToggleDeleteModal(id);
  };
  const displayToggleDelete = () => {
    setToggleDelete(!toggleDelete);
  };

  return (
    <section className="mb-20 relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-md mx-auto">
      <button
        onClick={displayComponent}
        className=" my-5 text-white bg-red-600 px-4 py-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Categories
      </button>
      {toggle && (
        <CategoriesFormPost
          name={""}
          description={""}
          onClose={displayComponent}
        />
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr
              key={category.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {category.id}
              </th>
              <td className="px-6 py-4">{category.name}</td>
              <td className="px-6 py-4">{category.description}</td>
              <td className="px-2 py-2 text-right flex  justify-center gap-4">
                <button
                  onClick={() => {
                    if (category.id !== undefined) {
                      displayUpdateCategoriesComponent(category.id);
                    }
                  }}
                  className="text-white bg-red-600 px-4 py-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit
                </button>
                {togglePutForm === category.id && togglePut && (
                  <CategoriesFormPut
                    id={category.id}
                    name={category.name}
                    description={category.description}
                    onClose={displayTogglePut}
                  />
                )}
                {/* <button
                  onClick={() =>
                    category.id !== undefined && deleteCategories(category.id)
                  }
                  className="text-white bg-red-600 px-4 py-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button> */}
                <button
                  onClick={() => {
                    if (category.id !== undefined) {
                      displayDeleteComponent(category.id);
                    }
                  }}
                  className="text-white bg-red-600 px-4 py-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
                {toggleDeleteModal === category.id && toggleDelete && (
                  <ModalConfirmation
                    id={category.id}
                    onClose={displayToggleDelete}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableDataDisplay;
