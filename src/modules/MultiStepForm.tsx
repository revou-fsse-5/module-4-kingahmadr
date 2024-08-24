import React, { useState } from "react";
import { Formik, Form } from "formik";
import StepIndicator from "../components/StepIndicator";
import SwitchCaseStep from "../components/SwitchCaseStep";
import { StepOneSchema, StepTwoSchema, StepThreeSchema } from "./Scheme";
import { useFetchData } from "./UseFetchData";

const MultiStepForm: React.FC = () => {
  const { addUsersMultiStep } = useFetchData();
  const [step, setStep] = useState(1);

  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    streetAddress: "",
    city: "",
    dateOfBirth: null,
    password: "",
    zipCode: 0,
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
        } else {
          handleNext();
        }
      }}
    >
      {({ isValid }) => (
        <section className="flex flex-col justify-center">
          <div className="mt-20 self-center">
            <StepIndicator step={step} />
          </div>
          <Form className="relative flex flex-col mx-auto mt-10 w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
            <SwitchCaseStep index={step} />

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
