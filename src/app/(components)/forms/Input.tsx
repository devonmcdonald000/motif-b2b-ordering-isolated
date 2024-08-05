import Image from 'next/image'
import React from 'react'
import SfInput from '../overrides/SfInput'
import { SfInputProps } from '@storefront-ui/react'

interface CustomInputProps extends SfInputProps {
  search?: boolean
}

function Input( { search = false, ...props } : CustomInputProps ) {
  return (
    <div className='relative w-full'>
      {
        search &&
        <Image
          src='/icons/search_icon.svg'
          alt='Search Icon'
          height={30}
          width={30}
          className='absolute top-[3px] left-1 bg-transparent'
        />
      }
      <SfInput
        {...props}
      />
    </div>

  )
}

export default Input