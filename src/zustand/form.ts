import { create } from "zustand";

interface FormValues{
    name: string;
    phone: string;
    email: string;
    date: string;
    content: string;
}

const useForm = create<FormValues>((set) => ({
    name: '',
    phone: '',
    email: '',
    date: '',
    content: '',

  }))

  export default useForm;