import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-full flex flex-col'>
      <div
        className='h-[57px] w-full bg-primary-200'
      />
      <div className='flex w-fit gap-5 md:gap-[38px] mx-auto mt-[8px] items-start justify-center px-3'>
        <Image
          src="/motif_logo.svg"
          alt="Motif Logo"
          height={138}
          width={182}
          className='w-[116px] md:w-[182px]'
        />
        <div className='px-3 md:px-[38px] py-3 bg-primary-100 rounded-md m-auto'>
          <p className='font-medium text-xs md:text-base text-center'>WHOLESALE CUSTOMER PORTAL</p>
        </div>
      </div>
    </div>
  )
}

export default Header