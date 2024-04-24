
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
  const{label, ErrorMessage} = props
  return (
    <div className='formInput'>
        <label className='formInput__label'>{label}</label>
        <input name={props.name} placeholder={props.placeholder} type={props.type}  onChange={props.onChange} required />
        <span>{ErrorMessage}</span>
        </div>
  )
}
