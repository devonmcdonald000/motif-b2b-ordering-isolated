import { SfButton, SfButtonProps } from '@storefront-ui/react'
import React from 'react'

interface CustomButtonProps extends SfButtonProps {
  search?: boolean
}

function Button( { children, ...props } : CustomButtonProps ) {
  return (
    <SfButton className='bg-primary-200 hover:opacity-80 disabled:bg-disabled disabled:opacity-100' {...props} >
      <div className='text-black font-normal px-5 md:px-14 text-[14px] md:text-[18px] py-1'>{children}</div>
    </SfButton>
  )
}

export default Button