import React, { useState } from "react";
import { CategoriesProps } from "../interface";

const API_URL = "http://localhost:8080";
const useFetchData = () => {
  const [data, setData] = useState<CategoriesProps[]>([]);
  //   const [updateData, setUpdateData] = useState<CategoriesProps[]>([]);

  const getCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`, { method: "GET" });
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const addCategories = async (name: string, description: string) => {
    try {
      const bodyData = JSON.stringify({ name, description });
      const response = await fetch(`${API_URL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyData,
      });
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.statusText}`);
      }
      const responseData = await response.json();
      setData((prevData) => [...prevData, responseData]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategories = async (
    id: number,
    name: string,
    description: string
  ) => {
    try {
      const bodyData = JSON.stringify({ name, description });
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyData,
      });

      if (!response.ok) {
        throw new Error(`Error updating data: ${response.statusText}`);
      }

      const updatedCategory = await response.json();

      setData((prevData) =>
        prevData.map((category) =>
          category.id === id ? updatedCategory : category
        )
      );
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return { data, getCategories, addCategories, updateCategories };
};

export { useFetchData };
