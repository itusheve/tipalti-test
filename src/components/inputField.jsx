import React from "react";

const InputField = ({
  label,
  type,
  value,
  onChange,
  errorMessage,
  validator,
}) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (validator) {
      const errorMessage = validator(inputValue);
      onChange(inputValue, errorMessage);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={handleInputChange} />
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default InputField;
