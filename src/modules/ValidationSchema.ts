import * as Yup from "yup";

const CategoreisValidationScheme = Yup.object().shape({
  name: Yup.string().required("Please fill the Name Input"),
  description: Yup.string().required("Please fill the Description Input"),
});

const LoginValidationScheme = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  password: Yup.string().required("Password is required"),
});

const RegisterValidationForm = Yup.object().shape({
  fullname: Yup.string().required("Fullname is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // dateOfBirth: Yup.string().required("Date of Birth is Required"),
  dateOfBirth: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future")
    .test("is-valid-age", "You must be at least 18 years old", (value) => {
      const today = new Date();
      const age =
        today.getFullYear() - (value?.getFullYear() || today.getFullYear());
      return age >= 18;
    }),
  address: Yup.object({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("state is required"),
    zipCode: Yup.number().required("Zip Code is required"),
  }),
  username: Yup.string().required("Username is Required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
const LoginValidationForm = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export {
  CategoreisValidationScheme,
  LoginValidationScheme,
  RegisterValidationForm,
  LoginValidationForm,
};
