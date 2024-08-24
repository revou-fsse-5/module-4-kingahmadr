import React, { useState } from "react";
import { useFormik } from "formik";
import StepIndicator from "../components/StepIndicator";
// import SwitchCaseStep from "../components/SwitchCaseStep";
import { StepOneSchema, StepTwoSchema, StepThreeSchema } from "./Scheme";
import { MultiStepFormProps } from "../interface";
import { useFetchData } from "./UseFetchData";
import PersonalRegistrationForms from "../components/PersonalForms";
import AddressInformationForms from "../components/AddressForms";
import AccountInformationForms from "../components/AccountForms";

const MultiStepForm = () => {
  const [step, setStep] = useState(4);
  const { addUsersMultiStep } = useFetchData();

  // const initialValues = {
  //   fullname: "",
  //   username: "",
  //   email: "",
  //   streetAddress: "",
  //   city: "",
  //   dateOfBirth: null,
  //   password: "",
  //   zipCode: 0,
  // };
  // const validationSchema = [StepOneSchema, StepTwoSchema, StepThreeSchema];

  const handleNext = () => {
    setStep(step + 1);
    console.log(step);
  };

  const handlePrevious = () => {
    setStep(step - 1);
    console.log(step);
  };

  // const handleSubmit = (values: typeof initialValues) => {
  //   // Submit final form values
  //   alert(
  //     `Register Successful!\n\n
  //     Fullname: ${values.fullname}\n
  //     Email: ${values.email}\n
  //     Date of Birth: ${values.dateOfBirth}\n
  //     Street Address: ${values.streetAddress}\n
  //     City: ${values.city}\n
  //     Zip Code: ${values.zipCode}\n
  //     Username: ${values.username}\n
  //     Password: ${values.password}`
  //   );
  //   console.log(values);
  // };
  const SchemeValidation = [StepOneSchema, StepTwoSchema, StepThreeSchema];
  // if (step === Scheme.length) {
  //   handleSubmit(values);
  // } else {
  //   console.log(formik.errors);
  //   handleNext();
  // }
  const handleSubmit = (step: number, values: MultiStepFormProps) => {
    if (step === SchemeValidation.length) {
      console.log("ini step terakhir");
      console.log("values :>> ", values);
    } else {
      handleNext();
    }
  };
  // const handleSubmit = (data: MultiStepFormProps) => {
  //   // addUsersMultiStep(data);
  //   console.log(data);
  // };
  const formik = useFormik<MultiStepFormProps>({
    initialValues: {
      PersonalInformationForm: {
        fullName: "",
        dateOfBirth: "",
        email: "",
      },
      AddressInformationForm: {
        // address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        // },
      },
      AccountInformationForm: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    },
    validationSchema: SchemeValidation[step - 1],
    onSubmit: (values, { setSubmitting }) => {
      // const { confirmPassword, ...dataToSubmit } = values;
      setTimeout(() => {
        handleSubmit(step, values);
        setSubmitting(false);
        console.log(values);
      }, 400);
      // handleNext();
    },
  });
  return (
    <section className="flex flex-col justify-center">
      <div className="mt-20 self-center">
        <StepIndicator step={step} />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="relative flex flex-col mx-auto mt-10 w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md"
      >
        <div>
          {step === 1 ? (
            <PersonalRegistrationForms
              values={formik.values.PersonalInformationForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors}
              touched={formik.touched}
            />
          ) : step === 2 ? (
            <AddressInformationForms
              values={formik.values.AddressInformationForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors}
              touched={formik.touched}
            />
          ) : (
            <AccountInformationForms
              values={formik.values.AccountInformationForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors}
              touched={formik.touched}
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
          {step < 4 && (
            <button
              className="w-24 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              disabled={formik.isSubmitting}
            >
              {step === SchemeValidation.length ? "Submit" : "Next"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default MultiStepForm;
