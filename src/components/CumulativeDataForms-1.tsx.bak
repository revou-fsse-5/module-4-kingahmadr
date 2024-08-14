import React from "react";
import { FormEvent, useState } from "react";
import { useMultiStepForm } from "./UseMultiStepForms";
// import PersonalInformationRegistrationPage from "../Pages/PersonalInformationRegistrationPage";
import PersonalRegistrationForms from "./PersonalRegistrationForms";
import AddressInformationForms from "./AddressInformationForms";
import AccountInformationForms from "./AccountInformationForms";

interface CumulativeFormValues {
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

const INITIAL_DATA: CumulativeFormValues = {
  fullName: "",
  email: "",
  dateOfBirth: "",
  streetAddress: "",
  city: "",
  zipCode: 0,
  username: "",
  password: "",
  confirmPassword: "",
};
interface OnSubmitProps {
  values: CumulativeFormValues;
  isLastStep: boolean;
  next: () => typeof useMultiStepForm;
}
const CumulativeDataForms = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<CumulativeFormValues>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalRegistrationForms {...data} updateFields={updateFields} />,
      <AddressInformationForms {...data} updateFields={updateFields} />,
      <AccountInformationForms {...data} updateFields={updateFields} />,
      //   <AddressForm {...data} updateFields={updateFields} />,
      //   <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const showDataValue = () => {
    console.log(data);
  };
  function handleSubmit(
    event: any,
    { values, isLastStep, next }: OnSubmitProps
  ) {
    event.preventDefault();

    if (!isLastStep) {
      next();
    } else {
      alert(`
            Successful account creation! \n
            Full Name: ${values.fullName} \n
            Email: ${values.email} \n
            Date of Birth: ${values.dateOfBirth} \n
            Street Address: ${values.streetAddress} \n
            City: ${values.city} \n
            Zip Code: ${values.zipCode} \n
            Username: ${values.username} \n
          `);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(showDataValue());
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          maxWidth: "max-content",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1}/ {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"} </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CumulativeDataForms;
