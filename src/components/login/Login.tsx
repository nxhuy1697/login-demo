
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
  const { errors } = formState;
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
          {...register("phone", {
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
            required: { value: true, message: "email cant be empty" },
          })}
        />
        <p className="login__form-error">{errors.email?.message}</p>

        <label htmlFor="date">Date</label>
        <input
          className="login__form-input"
          type="date"
          id="date"
          {...register("date", {
            required: { value: true, message: "date cant be empty" },
          })}
        />
        <p className="login__form-error">{errors.date?.message}</p>

        <label htmlFor="content">Content</label>
        <input
          className="login__form-input"
          type="content"
          id="content"
          {...register("content", {
            required: { value: true, message: "content cant be empty" },
            maxLength: {
              value: 130,
              message: "Content can't exceed 130 characters",
            },
          })}
        />
        <p className="login__form-error">{errors.content?.message}</p>
        <div className="login__form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
