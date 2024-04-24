import React from 'react'
type Props={
  //truyền giá trị value
  value : string,
  placeholder: string,
  name: string,


}
export default function FormInput(props : Props) {
  return (
    <div className='formInput'>
        {/* <label htmlFor="">
            Name
        </label> */}
        <input name={props.name} placeholder={props.placeholder} />
        </div>
  )
}
