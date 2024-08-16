import React from "react";
import { FieldProps } from "formik";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

interface DatePickerFieldProps extends FieldProps {
  label: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ field, form }) => {
  const { setFieldValue, setFieldTouched } = form;

  return (
    <div>
      <DatePicker
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={(val) => {
          setFieldTouched(field.name, true);
          setFieldValue(field.name, val);
        }}
        required
      />
    </div>
  );
};

export default DatePickerField;
