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

interface AddressProps {
  street: string;
  city: string;
  state: string;
  zipCode: number;
}
export interface RegisterFormProps {
  fullname: string;
  email: string;
  dateOfBirth: string;
  address: AddressProps;
  id?: number;
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginProps {
  username: string;
  email: string;
  password: string;
}
