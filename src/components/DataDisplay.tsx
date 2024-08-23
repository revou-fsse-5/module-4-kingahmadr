import { useEffect, useState } from "react";
import { useFetchData } from "../modules/UseFetchData";
import CategoriesFormPost from "./CategoriesFormPost";
import CategoriesFormPut from "./CategoriesFormPut";

const DataDisplay = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [togglePutForm, setTogglePutForm] = useState<number | null>(null);
  const [togglePut, setTogglePut] = useState<boolean>(false);
  const { data, getCategories, deleteCategories } = useFetchData();

  useEffect(() => {
    getCategories();
  }, []);
  const handleOnClick = () => {
    getCategories();
    console.log(data);
  };
  const displayComponent = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  const displayTogglePut = () => {
    setTogglePut(!togglePut);
  };
  const displayUpdateCategoriesComponent = (id: number) => {
    setTogglePut(!togglePut);

    setTogglePutForm(id);
    console.log("Ini data id", id);
    console.log("Ini data dari togglePutForm", togglePutForm);
  };

  return (
    <section className="flex flex-col max-w-screen-md mx-auto">
      <h1 className="text-5xl text-white text-center mt-5"> Categories List</h1>
      {data.map((category, index) => (
        <ul
          key={index}
          className="my-5 mx-10 space-y-2 flex items-center justify-between gap-10"
        >
          <section className="flex flex-col w-full gap-3">
            <li className="p-2 border rounded-md text-black bg-white border-stone-950">
              name: {category.name}
            </li>
            <li className="p-2 border rounded-md text-black bg-white border-stone-950">
              description: {category.description}
            </li>
          </section>
          <section className="flex flex-col gap-3">
            <button
              onClick={() => {
                if (category.id !== undefined) {
                  displayUpdateCategoriesComponent(category.id);
                }
              }}
              className="text-white bg-red-600 p-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            <button
              onClick={() =>
                category.id !== undefined && deleteCategories(category.id)
              }
              className="text-white bg-red-600 p-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete
            </button>
          </section>
        </ul>
      ))}
      <section className="flex mx-auto gap-9 ">
        <button
          onClick={handleOnClick}
          className="mx-auto text-white bg-red-600 p-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Refetch Data
        </button>
        <button
          onClick={displayComponent}
          className="mx-auto text-white bg-red-600 p-2 border rounded-md border-red-600 hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Categories
        </button>
      </section>
      <section>
        {toggle && (
          <CategoriesFormPost
            name={""}
            description={""}
            onClose={displayComponent}
          />
        )}
      </section>
      c
    </section>
  );
};

export default DataDisplay;
