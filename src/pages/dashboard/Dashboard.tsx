import Login from '@/components/login/Login'
import React from 'react'

const handleLoginSubmit = (values : any) => {
    console.log('Form submit: ', values)
}

export default function Dashboard() {
  return (
    <div>
        <h2> Infomation Form </h2>
        <Login onSubmit={handleLoginSubmit} />
        </div>
  )
}
