import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// tạo schema để validate các giá trị cho từng filed
const schema = yup
  .object({
    name: yup
      .string()
      .max(50, "You can not have more than 50 characters")
      .required("This filed can not be empty"),
    phone: yup.string().required("This filed can not be empty"),
    email: yup.string().email().required("This filed can not be empty"),
    date: yup.string().required("This filed can not be empty"),
    content: yup
      .string()
      .max(160, "You can not have more than 160 characters")
      .required("This filed can not be empty"),
  })
  .required();
// khai báo kiểu dữ liệu
export type IFormValues = {
  name: string;
  phone: string;
  email: string;
  date: string;
  content: string;
};
export default function FormInput() {
  // register các filed của form dựa trên "type IFormValues đã khai báo", "handleSubmit" là một tham số dùng để submit các giá do ng dùng nhập vào

  const [result, setResult] = useState<IFormValues>({
    name: "",
    phone: "",
    email: "",
    date: "",
    content: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      content: "",
    },
    resolver: yupResolver(schema) as any,
  });

  // submit các giá trị của form bằng SubmitHandler kiểu dữ liệu là IProps, data chứa các giá trị truyền vào
  const onSubmit: SubmitHandler<IFormValues> = async(data) => {

    setResult(data);
  };

  return (
    <div className="filed">
      <form className="filed__form" onSubmit={handleSubmit(onSubmit)}>
        <h2> Infomation Form </h2>
        {/* name  */}
        <label htmlFor="name" className="filed__form-label">
          Name
        </label>
        {/* bóc tách register  các filed đã khai báo trong formvalue  */}
        <input
          {...register("name")}
          type="text"
          className="filed__form-input"
          id="name"
        />
        {/* validation dựa trên thư viện yup  */}
        <p className="filed__form-errors">{errors.name?.message}</p>

        {/* phone  */}
        <label htmlFor="phone" className="filed__form-label">
          Phone
        </label>
        <input
          {...register("phone")}
          type="number"
          className="filed__form-input"
          id="phone"
        />
        <p className="filed__form-errors">{errors.phone?.message}</p>
        {/* email  */}
        <label htmlFor="email" className="filed__form-label">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="filed__form-input"
          id="email"
        />
        <p className="filed__form-errors">{errors.email?.message}</p>
        {/* date  */}
        <label htmlFor="date" className="filed__form-label">
          Date
        </label>
        <input
          {...register("date")}
          type="date"
          className="filed__form-input"
          id="date"
        />
        <p className="filed__form-errors">{errors.date?.message}</p>
        {/* content  */}
        <label htmlFor="content" className="filed__form-label">
          Content
        </label>
        <input
          {...register("content")}
          type="content"
          className="filed__form-input"
          id="content"
        />
        <p className="filed__form-errors">{errors.content?.message}</p>
        {/* btn  */}
        <div className="filed__form-button">
          <button type="submit">Submit</button>
        </div>
      </form>

      {result.name !== "" && (
        <div className="filed__res">
          <h2>Result</h2>
          <div className="filed__res-render">
            <p>Your name is: {result.name}</p>
          </div>
          <div className="filed__res-render">
            <p>Your phone is: {result.phone}</p>
          </div>
          <div className="filed__res-render">
            <p>Your email is: {result.email}</p>
          </div>
          <div className="filed__res-render">
            <p>Your date is: {result.date}</p>
          </div>
          <div className="filed__res-render">
            <p>Your content is: {result.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
