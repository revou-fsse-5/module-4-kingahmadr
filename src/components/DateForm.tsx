import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

// Initial form values
interface FormValues {
  dateOfBirth: Date | null;
}

const validationSchema = Yup.object({
  dateOfBirth: Yup.date()
    .nullable()
    .required("Date of birth is required")
    .test("is-valid-age", "You must be at least 18 years old", (value) => {
      const today = new Date();
      const age =
        today.getFullYear() - (value?.getFullYear() || today.getFullYear());
      return age >= 18;
    }),
});

const DateForm: React.FC = () => {
  const initialValues: FormValues = {
    dateOfBirth: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <Field name="dateOfBirth">
              {() => (
                <DatePicker
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={(val) => setFieldValue("dateOfBirth", val)}
                  format="y-MM-dd"
                  // clearIcon={null}
                  // calendarIcon={null}
                />
              )}
            </Field>
            <ErrorMessage
              name="dateOfBirth"
              component="div"
              className="error"
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DateForm;
