import * as React from "react";
import logo from "../assets/images/Login.png";
import LoginForms from "../components/LoginForms";

const LoginPages: React.FC = () => {
  const handleSubmit = (values: { username: string; password: string }) => {
    // Display form values in an alert
    alert(
      `Login Successful!\n\nUsername: ${values.username}\nPassword: ${values.password}`
    );
  };
  return (
    <section className="flex justify-between login-page">
      <div className="w-full">
        <h1 className="mt-40 text-center text-4xl font-sans text-cyan-50">
          Let's get stuff deployed
        </h1>
        <figure className="m-auto mt-20 min-h-60 bg-[url('assets/images/argo.png')] bg-contain bg-no-repeat bg-center"></figure>
      </div>
      <figure className="min-h-screen bg-white min-w-80">
        <img className="mt-5 mx-auto" src={logo} alt="Login Logo" />
        <LoginForms onSubmit={handleSubmit}></LoginForms>
      </figure>
    </section>
  );
};

export default LoginPages;
