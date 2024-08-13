import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";
import React from "react";

type Props<TInputDate extends never, TDate extends boolean> = {
  name: string;
} & Omit<DatePickerProps<TInputDate, TDate>, "onChange" | "value">;

const DatePickerForms = <
  TInputDate extends never,
  TDate extends boolean = TInputDate
>(
  props: Props<TInputDate, TDate>
) => {
  const { name, ...restProps } = props;

  const [field] = useField<TInputDate>(name);
  const { setFieldValue } = useFormikContext();

  return (
    <DatePicker
      {...restProps}
      value={field.value ?? null}
      onChange={(val: TDate | null) => {
        setFieldValue(name, val);
      }}
    />
  );
};

export default DatePickerForms;
