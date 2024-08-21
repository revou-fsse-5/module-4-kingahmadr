export interface CategoriesProps {
  id?: number;
  name: string;
  description: string;
}

export interface CategoriesContextProps {
  data: CategoriesProps[];
  getCategories: () => void;
  addCategories: (name: string, description: string) => void;
  updateCategories: (id: number, name: string, description: string) => void;
}
