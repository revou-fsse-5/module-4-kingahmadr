import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PersonalRegistrationForms from "../components/PersonalRegistrationForms";
import AddressInformationForms from "../components/AddressInformationForms";
import AccountInformationForms from "../components/AccountInformationForms";

import * as Yup from "yup";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const titleList = [
    "Personal Information",
    "Address Information",
    "Account Information",
  ];
  // // const [currentTitle, setCurrentTitle] = useState();
  // const setTitle = (i: number) => {
  //   const currentTitle = titleList[i];
  //   // document.title = currentTitle;
  // };
  // useEffect(() => {
  //   setTitle(step - 1);  // Update title based on the current step
  // }, [step]);
  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    streetAddress: "",
    city: "",
    dateOfBirth: "dd/mm/yyyy",
    password: "",
    zipCode: 0,
  };
  const StepOneSchema = Yup.object().shape({
    fullname: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dateOfBirth: Yup.string().required("Required"),
  });

  const StepTwoSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Address is reqiured"),
    city: Yup.string().required("Address is reqiured"),
    zipCode: Yup.number().required("Address is reqiured"),
  });

  const StepThreeSchema = Yup.object().shape({
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
  const validationSchema = [StepOneSchema, StepTwoSchema, StepThreeSchema];
  // const [StepOneSchema, StepTwoSchema, StepThreeSchema] = ValidationSchema

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values: typeof initialValues) => {
    // Submit final form values
    alert(
      `Register Successful!\n\n
      Fullname: ${values.fullname}\n
      Email: ${values.email}\n
      Date of Birth: ${values.dateOfBirth}\n
      Street Address: ${values.streetAddress}\n
      City: ${values.city}\n
      Zip Code: ${values.zipCode}\n
      Username: ${values.username}\n
      Password: ${values.password}`
    );
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[step - 1]}
      onSubmit={(values) => {
        if (step === validationSchema.length) {
          handleSubmit(values);
          console.log(handleSubmit);
        } else {
          handleNext();
        }
      }}
    >
      {({ isValid }) => (
        <section>
          {/* <h3>
            {step === 1 && titleList[0]}
            {step === 2 && titleList[1]}
            {step === 3 && titleList[2]}
          </h3> */}
          <Form className="relative flex flex-col mx-auto mt-20 w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
            {step === 1 && (
              // <div>
              //   <Field name="firstName" placeholder="First Name" />
              //   <ErrorMessage name="firstName" component="div" />

              //   <Field name="lastName" placeholder="Last Name" />
              //   <ErrorMessage name="lastName" component="div" />
              // </div>

              <PersonalRegistrationForms />
            )}

            {step === 2 && (
              // <div>
              //   <Field name="email" placeholder="Email" />
              //   <ErrorMessage name="email" component="div" />

              //   <Field name="phone" placeholder="Phone" />
              //   <ErrorMessage name="phone" component="div" />
              // </div>
              <AddressInformationForms />
            )}

            {step === 3 && (
              // <div>
              //   <Field name="streetAddress" placeholder="streetAddress" />
              //   <ErrorMessage name="streetAddress" component="div" />

              //   <Field name="city" placeholder="City" />
              //   <ErrorMessage name="city" component="div" />
              // </div>
              <AccountInformationForms />
            )}

            <div className="mx-auto flex gap-4">
              {step > 1 && (
                <button
                  className="w-24 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="button"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              <button
                className="w-24 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
                disabled={!isValid}
              >
                {step === validationSchema.length ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default MultiStepForm;
