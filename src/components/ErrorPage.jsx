import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-3'>
        <h1 className='text-3xl font-bold'>404 Error</h1>
        <Link to='/My-Portfolio/'><h3 className='text-lg underline'>Return to HomePage</h3></Link>
    </div>
  )
}

export default ErrorPage