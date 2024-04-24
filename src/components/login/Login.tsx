import React, { useState } from "react";
import FormInput from "../formInput/FormInput";

// type IValues = {
//   name: string;
//   phone: string;
//   email: string;
//   date: string;
//   content: string;
// };

export default function Login() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    content: "",
    ErrorMessage: "",
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter your name!",
      ErrorMessage:"Name should be from 3 to 16 characters and no special characters",
      label: "Name",
      // require: true
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      placeholder: "Enter your phone!",
      ErrorMessage:"Phone can't be empty",
      label: "Phone",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter your email!",
      ErrorMessage:"Invalid Email",
      label: "Email",
    },
    {
      id: 4,
      name: "date",
      type: "date",
      placeholder: "Enter your date!",
      label: "Date",
    },
    {
      id: 5,
      name: "content",
      type: "text",
      placeholder: "Enter your content!",
      label: "Content",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e: any) => {
      setValues({...values, [e.target.name]: e.target.value});
  }

  // console.log("username: ", userName)
  return (
    <div className="login">
      <h3> Login Form</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            name={input.name}
            placeholder={input.placeholder}
            value={input.name}
            type={input.type}
            onChange={onChange}
            label={input.label}
            ErrorMessage={input.ErrorMessage}  />
        ))}

        <div className="login__form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

