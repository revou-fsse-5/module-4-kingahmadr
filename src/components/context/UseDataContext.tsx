import { CategoriesContextProps } from "../../interface";
import { CategoriesContext } from "../../modules/UseFetchData";
import { useContext } from "react";

export const useCategories = (): CategoriesContextProps => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
