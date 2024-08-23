import { useState } from "react";
import { CategoriesProps, LoginProps, RegisterFormProps } from "../interface";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/UseDataContext";

const API_URL = "http://localhost:8080";
const useFetchData = () => {
  const { login, logout } = useDataContext();
  const navigate = useNavigate();
  const [data, setData] = useState<CategoriesProps[]>([]);
  const [userData, setUserData] = useState<RegisterFormProps[]>([]);

  // User CRUD
  const userLogin = async (data: LoginProps) => {
    const bodyData = JSON.stringify(data);
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyData,
      });
      if (!response.ok) {
        throw new Error(`Error adding user data: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log("User successfull login:", responseData);

      localStorage.setItem("accessToken", responseData.accessToken);
      login();
      navigate("/categories");
    } catch (error) {
      alert(`Failed to login: ${error}`);
      console.log("Failed to login: ", error);
    }
  };
  const userLogout = () => {
    logout();
    navigate("/login");
  };
  const addUsers = async (data: RegisterFormProps) => {
    const bodyData = JSON.stringify(data);
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyData,
      });
      if (!response.ok) {
        throw new Error(`Error adding user data: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log("User created:", responseData);
      setUserData((prevData) => [...prevData, responseData]);
      navigate("/login");
    } catch (error) {
      console.log("Error adding new user: ", error);
    }
  };

  // Categories CRUD
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

      const responseData = await response.json();
      setData((prevData) =>
        prevData.map((category) =>
          category.id === id ? responseData : category
        )
      );
      // console.log("data setelah update: ", data);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  // console.log("Ini data categories: ", data);
  const deleteCategories = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`Error deleting data: ${response.statusText}`);
      }

      setData((prevData) => prevData.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  // useEffect(() => {
  //   getCategories();
  // }, [data]);
  return {
    data,
    userData,
    getCategories,
    addCategories,
    updateCategories,
    deleteCategories,
    addUsers,
    userLogin,
    userLogout,
  };
};

export { useFetchData };
