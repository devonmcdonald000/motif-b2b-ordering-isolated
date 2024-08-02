import { AccountInfo } from '@/app/mocks/AccountInfo'
import Image from 'next/image'
import React from 'react'
import { formatPhoneNumber } from '@/utils/utils'

function AccountTile() {
  return (
    <div className='bg-secondary-100 rounded-md pl-10 pr-20 py-10 flex flex-col max-w-[424px]'>
      <div className='flex gap-4'>
        <Image
          src="/icons/account_icon.svg"
          alt="Account"
          width={38}
          height={38}
        />
        <p className='text-secondary-300 text-[24px]'>Account Info</p>
      </div>
      <div className='mt-5 flex flex-col gap-1'>
        <p className='text-primary-300 text-[16px] font-medium'>{`${AccountInfo.first_name} ${AccountInfo.last_name}`}</p>
        <p className='text-secondary-200 text-[14px]'>{`Account #: ${AccountInfo.account_number}`}</p>
        <p className='text-secondary-200 text-[14px]'>{AccountInfo.location}</p>
        <p className='text-secondary-200 text-[14px]'>{`PH: ${formatPhoneNumber( AccountInfo.phone )}`}</p>
        <p className='text-secondary-200 text-[14px]'>{AccountInfo.email}</p>
      </div>
      <div className='mt-10 flex flex-col gap-1'>
        <p className='text-secondary-300 text-[14px] font-medium'>Shipping Address:</p>
        <p className='text-secondary-200 text-[14px]'>{AccountInfo.address.street}</p>
        <p className='text-secondary-200 text-[14px]'>{`${AccountInfo.address.city}, ${AccountInfo.address.state} ${AccountInfo.address.zip}`}</p>
      </div>
    </div>
  )
}

export default AccountTile