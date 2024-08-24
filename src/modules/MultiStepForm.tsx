import React, { useState } from "react";
import { Formik, Form } from "formik";
import StepIndicator from "../components/StepIndicator";
// import SwitchCaseStep from "../components/SwitchCaseStep";
import { StepOneSchema, StepTwoSchema, StepThreeSchema } from "./Scheme";
import { useFetchData } from "./UseFetchData";
import { MultiStepRegistrationProps } from "../interface";
import PersonalRegistrationForms from "../components/PersonalForms";
import AddressInformationForms from "../components/AddressForms";
import AccountInformationForms from "../components/AccountForms";

const MultiStepForm: React.FC = () => {
  const { addUsersMultiStep } = useFetchData();
  const [step, setStep] = useState(1);

  const initialValues = {
    fullname: "",
    email: "",
    dateOfBirth: "",
    username: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: 0,
    },
    confirmPassowrd: "",
    password: "",
  };
  const validationSchema = [StepOneSchema, StepTwoSchema, StepThreeSchema];

  const handleNext = () => {
    setStep(step + 1);
    console.log(step);
  };

  const handlePrevious = () => {
    setStep(step - 1);
    console.log(step);
  };

  const handleSubmit = (values: MultiStepRegistrationProps) => {
    addUsersMultiStep(values);
    // console.log("data values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[step - 1]}
      onSubmit={(values, { setSubmitting }) => {
        const { confirmPassword, ...dataToSubmit } = values;
        setTimeout(() => {
          if (step === validationSchema.length) {
            handleSubmit(dataToSubmit);
          } else {
            setSubmitting(false);
            handleNext();
          }
        });
      }}
    >
      {({ isSubmitting, handleBlur, handleChange }) => (
        <section className="flex flex-col justify-center">
          <div className="mt-20 self-center">
            <StepIndicator step={step} />
          </div>
          <Form className="relative flex flex-col mx-auto mt-10 w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
            {/* <SwitchCaseStep index={step} /> */}
            <div>
              {step === 1 ? (
                <PersonalRegistrationForms
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : step === 2 ? (
                <AddressInformationForms
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <AccountInformationForms
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
            </div>

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
                disabled={isSubmitting}
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
