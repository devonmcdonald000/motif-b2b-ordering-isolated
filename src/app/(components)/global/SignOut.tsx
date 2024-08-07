'use client'

import { signOut } from 'aws-amplify/auth'
import React from 'react'

function SignOut() {
  return (
    <div className='absolute top-3 right-2 text-secondary-300 cursor-pointer px-3 py-1 shadow-md rounded-md bg-white' onClick={() => signOut()}>
      Log Out
    </div>

  )
}

export default SignOut