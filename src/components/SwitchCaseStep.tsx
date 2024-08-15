import React from "react";
import PersonalRegistrationForms from "./PersonalForms";
import AddressInformationForms from "./AddressForms";
import AccountInformationForms from "./AccountForms";

interface SwitchCaseProps {
  index: number;
}
const SwitchCaseStep: React.FC<SwitchCaseProps> = ({ index }) => {
  switch (index) {
    case 1:
      return <PersonalRegistrationForms />;
    case 2:
      return <AddressInformationForms />;
    case 3:
      return <AccountInformationForms />;
    default:
      return (
        <div>
          <h1 className="text-2xl max-w-screen-md mx-auto">
            Sorry your form is not defined
          </h1>
        </div>
      );
  }
};

export default SwitchCaseStep;
