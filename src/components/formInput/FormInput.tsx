
import React from 'react'
type Props={
  //truyền giá trị value
  value : string,
  placeholder: string,
  name: string,
  type: string,
  ErrorMessage: string,
  onChange: (e: any) => void,
  label: string,
}
export default function FormInput(props : Props) {
  const{label, ErrorMessage, name, placeholder, type, onChange} = props
  return (
    <div className='formInput'>
        <label className='formInput__label'>{label}</label>
        <input name={name} placeholder={placeholder} type={type}  onChange={onChange} required />
        <span>{ErrorMessage}</span>
        </div>
  )
}
