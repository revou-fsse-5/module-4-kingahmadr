import * as React from "react";
import logo from "../assets/images/Login.png";
import RegisterForms from "../components/RegisterForms";

// import DatePickerForms from "../components/DatePickerForms";
const RegisterPages: React.FC = () => {
  const handleSubmit = (values: {
    fullName: string;
    email: string;
    dateOfBirth: string | number;
    streetAddress: string;
    city: string;
    zipCode: number;
    username: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Display form values in an alert
    alert(
      `Register Successful!\n\n
      Fullname: ${values.fullName}\n
      Email: ${values.email}\n
      Date of Birth: ${values.dateOfBirth}\n
      Street Address: ${values.streetAddress}\n
      City: ${values.city}\n
      Zip Code: ${values.zipCode}\n
      Username: ${values.username}\n
      Password: ${values.password}`
    );
  };
  return (
    <section className="flex justify-between register-page">
      <div className="w-full">
        <h1 className="mt-40 text-center text-4xl font-sans text-cyan-50">
          Let's get stuff deployed
        </h1>
        <figure className="m-auto mt-20 min-h-60 bg-[url('assets/images/argo.png')] bg-contain bg-no-repeat bg-center"></figure>
      </div>
      <figure className="min-h-screen bg-white min-w-80">
        <img className="mt-5 mx-auto" src={logo} alt="Login Logo" />
        <RegisterForms onSubmit={handleSubmit}></RegisterForms>
      </figure>
    </section>
  );
};

export default RegisterPages;
