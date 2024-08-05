import React from 'react'
import Input from '@/app/(components)/forms/Input'
import Button from '@/app/(components)/global/Button'

function LoginForm() {
  return (
    <>
      <p className='text-[28px] mt-[30px] text-center'>Distributor Login</p>
      <div className='flex flex-col items-center justify-center w-full'>
        <label htmlFor="email">Email Address: </label>
        <Input
          placeholder='Enter your email'
          type='email'
          required
          name='email'
          id='email'
        />
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <label htmlFor="email">Password: </label>
        <Input
          placeholder='Enter your email'
          type='password'
          required
          name='password'
          id='password'
        />
      </div>
      <div className='w-fit mx-auto mt-5'>
        <Button>
          Login
        </Button>
      </div>
    </>
  )
}

export default LoginForm