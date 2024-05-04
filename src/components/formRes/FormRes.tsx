import React from 'react'

export default function FormRes() {
  return (
    <div className="formRes">
    <form className="formRes__form">
      {/* name  */}
      <label htmlFor="name" className="formRes__form-label">
        Name
      </label>
  
      <input
        type="text"
        className="formRes__form-input"
        id="name"
      />

     

      {/* phone  */}
      <label htmlFor="phone" className="formRes__form-label">
        Phone
      </label>
      <input
        type="number"
        className="formRes__form-input"
        id="phone"
      />

      {/* email  */}
      <label htmlFor="email" className="formRes_form-label">
        Email
      </label>
      <input
        type="email"
        className="filed__form-input"
        id="email"
      />

      {/* date  */}
      <label htmlFor="date" className="filed__form-label">
        Date
      </label>
      <input
        type="date"
        className="filed__form-input"
        id="date"
      />
      {/* content  */}
      <label htmlFor="content" className="filed__form-label">
        Content
      </label>
      <input

        type="content"
        className="filed__form-input"
        id="content"
      />
    </form>
  </div>
  )
}
