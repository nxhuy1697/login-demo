import React, { useState } from "react";
import FormInput from "../formInput/FormInput";

type IValues = {
  name: string;
  phone: string;
  email: string;
  date: string;
  content: string;
};

export default function Login() {
  const [values, setValues] = useState<IValues>({
    name: "",
    phone: "",
    email: "",
    date: "",
    content: "",
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter your name!",
      label: "Name",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone!",
      label: "Phone",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter your email!",
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
            value={values[input.name]}
          />
        ))}

        <div className="login__form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

