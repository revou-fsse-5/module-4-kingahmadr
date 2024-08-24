// import { Field, ErrorMessage } from "formik";
// import DatePickerField from "./DatePickerField";
import tailwindStyles from "../scripts/constants/styles";

interface PersonalProps {
  values: {
    fullName: string;
    dateOfBirth: string;
    email: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: {
    PersonalInformationForm?: {
      fullName?: string;
      dateOfBirth?: string;
      email?: string;
    };
  };
  touched: {
    PersonalInformationForm?: {
      fullName?: boolean;
      dateOfBirth?: boolean;
      email?: boolean;
    };
  };
}
const PersonalRegistrationForms = ({
  values,
  onChange,
  onBlur,
  errors,
  touched,
}: PersonalProps) => {
  return (
    <section className="space-y-6 p-5 mx-auto max-w-md">
      <h3 className="absolute left-5 top-5 text-xl"> Personal Registration </h3>
      <div>
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-gray-800"
        >
          Fullname
        </label>
        <input
          type="text"
          name="PersonalInformationForm.fullName"
          id="fullName"
          value={values.fullName}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.PersonalInformationForm?.fullName &&
            touched.PersonalInformationForm?.fullName
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.PersonalInformationForm?.fullName &&
        touched.PersonalInformationForm?.fullName ? (
          <div className={tailwindStyles.errorText}>
            {errors.PersonalInformationForm.fullName}
          </div>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="dateOfBirth"
          className="block text-sm font-medium text-gray-800"
        >
          Date Of Birth
        </label>

        <input
          type="date"
          name="PersonalInformationForm.dateOfBirth"
          id="dateOfBirth"
          value={values.dateOfBirth}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.PersonalInformationForm?.dateOfBirth &&
            touched.PersonalInformationForm?.dateOfBirth
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.PersonalInformationForm?.dateOfBirth &&
        touched.PersonalInformationForm?.dateOfBirth ? (
          <div className={tailwindStyles.errorText}>
            {errors.PersonalInformationForm.dateOfBirth}
          </div>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800"
        >
          email
        </label>
        <input
          type="email"
          name="PersonalInformationForm.email"
          id="email"
          value={values.email}
          onChange={onChange}
          onBlur={onBlur}
          className={`${tailwindStyles.input} ${
            errors.PersonalInformationForm?.email &&
            touched.PersonalInformationForm?.email
              ? "text-pink-600 border-pink-500"
              : ""
          }`}
        />
        {errors.PersonalInformationForm?.email &&
        touched.PersonalInformationForm?.email ? (
          <div className={tailwindStyles.errorText}>
            {errors.PersonalInformationForm.email}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PersonalRegistrationForms;
