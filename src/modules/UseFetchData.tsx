import { useState } from "react";
import {
  CategoriesProps,
  LoginProps,
  MultiStepRegistrationProps,
  RegisterFormProps,
} from "../interface";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/UseDataContext";

const API_URL = "http://localhost:8080";
const useFetchData = () => {
  const { login, logout } = useDataContext();
  const navigate = useNavigate();
  const [data, setData] = useState<CategoriesProps[]>([]);
  const [userData, setUserData] = useState<RegisterFormProps[]>([]);
  // const [userLoginData, setUserLoginData] = useState([]);

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
        // throw new Error(`Login Error: ${response.statusText}`);
        alert(`Login Error: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log("User successfull login:", responseData);
      // setUserLoginData(responseData);
      localStorage.setItem("accessToken", responseData.accessToken);
      localStorage.setItem("email", responseData.user.email);
      login();
      navigate("/categories");
    } catch (error) {
      alert(`Failed to login: ${error}`);
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
        // throw new Error(`Error adding user data: ${response.statusText}`);
        alert(`Error adding user data: ${response.statusText}`);
        console.log(`Error adding user data: ${response.statusText}`);
        navigate("/register");
        return;
      }
      const responseData = await response.json();
      setUserData((prevData) => [...prevData, responseData]);
      navigate("/login");
    } catch (error) {
      alert(`Error adding new user: ${error}`);
    }
  };
  const addUsersMultiStep = async (data: MultiStepRegistrationProps) => {
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
        // throw new Error(`Error adding user data: ${response.statusText}`);
        alert(`Error adding user data multistep: ${response.statusText}`);
        navigate("/register");
        return;
      }
      const responseData = await response.json();
      setUserData((prevData) => [...prevData, responseData]);
      navigate("/login");
    } catch (error) {
      alert(`Error adding new user multistep: ${error}`);
    }
  };

  // Categories CRUD
  const getCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`, { method: "GET" });
      if (!response.ok) {
        // throw new Error(`Error fetching data: ${response.statusText}`);
        alert(`Error fetching data: ${response.statusText}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      alert(`Error fetching data: ${error}`);
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
        // throw new Error(`Error posting data: ${response.statusText}`);
        alert(`Response text on error add data: ${response.statusText}`);
        console.log(response);
        return;
      }
      const responseData = await response.json();
      setData((prevData) => [...prevData, responseData]);
      navigate("/catagories");
    } catch (error) {
      alert(`Error posting data: ${error}`);
      console.log(error);
      navigate("/categories");
      return;
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
        // throw new Error(`Error updating data: ${response.statusText}`);
        alert(`Error updating data: ${response.statusText}`);
      }

      const responseData = await response.json();
      setData((prevData) =>
        prevData.map((category) =>
          category.id === id ? responseData : category
        )
      );
      navigate(0);
      // console.log("data setelah update: ", data);
    } catch (error) {
      alert(`Error updating data: ${error}`);
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
        // throw new Error(`Error deleting data: ${response.statusText}`);
        alert(`Error deleting data: ${response.statusText}`);
      }

      setData((prevData) => prevData.filter((category) => category.id !== id));
    } catch (error) {
      alert(`Error deleting data: ${error}`);
    }
  };
  // useEffect(() => {
  //   getCategories();
  // }, [data]);
  return {
    data,
    userData,
    addUsersMultiStep,
    // userLoginData,
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
