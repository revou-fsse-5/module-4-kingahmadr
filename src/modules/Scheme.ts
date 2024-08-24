import * as Yup from "yup";
// import { addYears } from "date-fns";
export const StepOneSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future")
    // .test(
    //   "is-old-enough",
    //   "You must be at least 18 years old",
    //   (value) => value && addYears(value, 18) <= new Date()
    // )
    .test("is-valid-age", "You must be at least 18 years old", (value) => {
      const today = new Date();
      const age =
        today.getFullYear() - (value?.getFullYear() || today.getFullYear());
      return age >= 18;
    }),
  //   dateOfBirth: Yup.date()
  //     .required("Date of Birth is required")
  //     .max(new Date(), "Date of Birth cannot be in the future"),
});

export const StepTwoSchema = Yup.object().shape({
  street: Yup.string().required("Address is reqiured"),
  city: Yup.string().required("City is reqiured"),
  zipCode: Yup.number().required("Address is reqiured"),
});

export const StepThreeSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
    .min(6, "Password must be at least 6 characters")
    .required(
      "Please valid password. One uppercase, one lowercase, one special character and no spaces"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
