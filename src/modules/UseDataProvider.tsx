import React, { createContext, useContext, useState, ReactNode } from "react";

type DataItem = {
  id: number;
  name: string;
  description: string;
};

type DataContextType = {
  data: DataItem[] | null;
  fetchData: () => Promise<void>;
  postData: (newData: Omit<DataItem, "id">) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
  updateData: (id: number, updatedData: Omit<DataItem, "id">) => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export const UseDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataItem[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postData = async (newData: Omit<DataItem, "id">) => {
    try {
      const response = await fetch("https://api.example.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.statusText}`);
      }
      const createdData = await response.json();
      setData((prevData) =>
        prevData ? [...prevData, createdData] : [createdData]
      );
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const deleteData = async (id: number) => {
    try {
      const response = await fetch(`https://api.example.com/data/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error deleting data: ${response.statusText}`);
      }
      setData((prevData) =>
        prevData ? prevData.filter((item) => item.id !== id) : []
      );
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const updateData = async (id: number, updatedData: Omit<DataItem, "id">) => {
    try {
      const response = await fetch(`https://api.example.com/data/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error(`Error updating data: ${response.statusText}`);
      }
      const updatedItem = await response.json();
      setData((prevData) =>
        prevData
          ? prevData.map((item) => (item.id === id ? updatedItem : item))
          : null
      );
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{ data, fetchData, postData, deleteData, updateData }}
    >
      {children}
    </DataContext.Provider>
  );
};
