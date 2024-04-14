import React from "react";
import FormGenerator from "./components/formGenerator";
import "./App.css";

function App() {
  const validateName = (value) => {
    if (!value) {
      return "Name is required";
    }
    return "";
  };

  const validateAge = (value) => {
    const age = parseInt(value);
    if (isNaN(age) || age <= 0) {
      return "Age must be a positive integer";
    }
    return "";
  };

  const formData = [
    {
      label: "Name",
      name: "name",
      type: "text",
      errorMessage: "Please enter your name",
      validator: validateName,
    },
    {
      label: "Age",
      name: "Age",
      type: "text",
      errorMessage: "Please enter a valid Age",
      validator: validateAge,
    },
    {
      label: "Email",
      name: "Email",
      type: "email",
      errorMessage: "Please enter a valid Email",
    },

    //add more feilds here..
  ];

  return (
    <div>
      <h1>Form Generator</h1>
      <FormGenerator formData={formData} />
    </div>
  );
}

export default App;
