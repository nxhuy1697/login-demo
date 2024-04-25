// import React, { useState } from "react";
// import FormInput from "../formInput/FormInput";

// // type IValues = {
// //   name: string;
// //   phone: string;
// //   email: string;
// //   date: string;
// //   content: string;
// // };

// //sd react hookform (validate)
// //sd zustand để lưu trữ biến

// export default function Login() {
//   const [values, setValues] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     content: "",
//     ErrorMessage: "",
//   });
//   const inputs = [
//     {
//       id: 1,
//       name: "name",
//       type: "text",
//       placeholder: "Enter your name!",
//       ErrorMessage:"Name should be from 3 to 16 characters and no special characters",
//       label: "Name",
//       // require: true
//     },
//     {
//       id: 2,
//       name: "phone",
//       type: "number",
//       placeholder: "Enter your phone!",
//       ErrorMessage:"Phone can't be empty",
//       label: "Phone",
//     },
//     {
//       id: 3,
//       name: "email",
//       type: "email",
//       placeholder: "Enter your email!",
//       ErrorMessage:"Invalid Email",
//       label: "Email",
//     },
//     {
//       id: 4,
//       name: "date",
//       type: "date",
//       placeholder: "Enter your date!",
//       ErrorMessage:"cant be empty",
//       label: "Date",
//     },
//     {
//       id: 5,
//       name: "content",
//       type: "text",
//       placeholder: "Enter your content!",
//       ErrorMessage:"Invalid",
//       label: "Content",
//     },
//   ];

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     console.log(Object.fromEntries(data.entries()));
//   };

//   const onChange = (e: any) => {
//       setValues({...values, [e.target.name]: e.target.value});
//   }

//   // console.log("username: ", userName)
//   return (
//     <div className="login">
//       <h3> Login Form</h3>
//       <form className="login__form" onSubmit={handleSubmit}>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             name={input.name}
//             placeholder={input.placeholder}
//             value={input.name}
//             type={input.type}
//             onChange={onChange}
//             label={input.label}
//             ErrorMessage={input.ErrorMessage}  />
//         ))}

//         <div className="login__form-button">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  date: string;
  content: string;
};
export default function Login() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form; //tracking form state
  const {errors} = formState;
  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };
  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >

        <label htmlFor="name">Name</label>
        <input
          className="login__form-input"
          type="text"
          id="name"
          {...register("name", {
            required: { value: true, message: "name cant be empty" },
          })}
        />
        <p className="login__form-error">{errors.name?.message}</p>



        <label htmlFor="phone">Phone</label>
        <input
          className="login__form-input"
          type="number"
          id="phone"
          {...register("phone",{
            required: { value: true, message: "phone cant be empty" },
          })}
        />
          <p className="login__form-error">{errors.phone?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          className="login__form-input"
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
              message: "invalid email",
            },
            required: { value: true, message: "email cant be empty" }
          })}
        />
         <p className="login__form-error">{errors.email?.message}</p>

        <label htmlFor="date">Date</label>
        <input
          className="login__form-input"
          type="date"
          id="date"
          {...register("date",{
            required: { value: true, message: "date cant be empty" },
          })}
        />
          <p className="login__form-error">{errors.date?.message}</p>

        <label htmlFor="content">Content</label>
        <input
          className="login__form-input"
          type="content"
          id="content"
          {...register("content",{
            required: { value: true, message: "content cant be empty" },
          } )}
        />
          <p className="login__form-error">{errors.content?.message}</p>
        <div className="login__form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
