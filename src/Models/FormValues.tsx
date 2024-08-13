export interface RegisterFormValues {
  fullName: string;
  email: string;
  dateOfBirth: string | number;
  streetAddress: string;
  city: string;
  zipCode: number;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}
