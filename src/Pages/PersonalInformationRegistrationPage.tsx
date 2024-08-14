import * as React from "react";
import logo from "../assets/images/Register.png";
import PersonalRegistrationForms from "../components/PersonalRegistrationForms";

const PersonalInformationRegistrationPage: React.FC = () => {
  return (
    <section className="register-page">
      {/* <div className="w-full">
        
      </div> */}
      <figure className="register-page mt-20">
        <img className="mt-5 mx-auto" src={logo} alt="Login Logo" />
        {/* <PersonalRegistrationForms></PersonalRegistrationForms> */}
      </figure>
    </section>
  );
};

export default PersonalInformationRegistrationPage;
