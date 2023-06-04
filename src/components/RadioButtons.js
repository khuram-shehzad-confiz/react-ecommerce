import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const RadioButtons = (props) => {
  const { label, name, options,selectedOption,  onChange, ...rest } = props;

 
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
        return  options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={onChange}
                />
                <label htmlFor={option.key}>{option.value}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
