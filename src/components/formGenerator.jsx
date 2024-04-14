// FormGenerator.js
import React, { useState } from "react";
import InputField from "./../components/inputField";
import SelectField from "./../components/fields/SelectField";
import RadioField from "./../components/fields/RadioField"; 
import CheckboxField from "./../components/fields/CheckboxField";

const FormGenerator = ({ formData }) => {
  const [formValues, setFormValues] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (fieldName, value, errorMessages) => {
    setFormValues({ ...formValues, [fieldName]: value });
    setValidationErrors({ ...validationErrors, [fieldName]: errorMessages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(validationErrors).every(
      (errors) => errors.length === 0
    );

    if (isFormValid) {
      console.log("Form submitted with values:", formValues);
    } else {
      console.log("Form has validation errors:", validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((field, index) => {
        const onChangeHandler =
          field.onChangeHandler ||
          ((value, errorMessages) =>
            handleChange(field.name, value, errorMessages));

        switch (field.type) {
          case "text":
          case "number":
          case "email":
            return (
              <InputField
                key={index}
                label={field.label}
                type={field.type}
                value={formValues[field.name] || ""}
                onChange={onChangeHandler}
                errorMessages={validationErrors[field.name] || []}
                validator={field.validator}
              />
            );
          case "select":
            return (
              <SelectField
                key={index}
                label={field.label}
                options={field.options}
                value={formValues[field.name] || ""}
                onChange={onChangeHandler}
                errorMessages={validationErrors[field.name] || []}
                validator={field.validator}
              />
            );
          case "radio":
            return (
              <RadioField
                key={index}
                label={field.label}
                options={field.options}
                value={formValues[field.name] || ""}
                onChange={onChangeHandler}
                errorMessages={validationErrors[field.name] || []}
                validator={field.validator}
              />
            );
          case "checkbox":
            return (
              <CheckboxField
                key={index}
                label={field.label}
                options={field.options}
                value={formValues[field.name] || []}
                onChange={onChangeHandler}
                errorMessages={validationErrors[field.name] || []}
                validator={field.validator}
              />
            );
          default:
            return null;
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormGenerator;
