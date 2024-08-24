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
interface AddressMultiStepProps {
  street: string;
  city: string;
  state: string;
  zipCode: string;
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

export interface MultiStepFormProps {
  PersonalInformationForm: {
    fullName: string;
    dateOfBirth: string;
    email: string;
  };
  AddressInformationForm: {
    // address: AddressMultiStepProps;
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  AccountInformationForm: {
    username: string;
    password: string;
    confirmPassword: string;
  };
}

export interface LoginProps {
  username: string;
  email: string;
  password: string;
  [key: string]: string | string[];
}
