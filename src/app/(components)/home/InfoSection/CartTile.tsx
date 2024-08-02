'use client'

import React from 'react'
import Image from 'next/image'
import { useOrderStore } from '@/stores/order'

function CartTile() {
  const { order } = useOrderStore()
  
  return (
    <div className='bg-secondary-200 rounded-md p-10 py-10 flex flex-col max-w-[424px]'>
      <div className='flex gap-4'>
        <Image
          src="/icons/cart_icon.svg"
          alt="Cart Icon"
          width={41}
          height={41}
        />
        <p className='text-white text-[24px]'>Order Summary</p>
      </div>
      <div className='grid grid-cols-3 text-center mx-auto w-full text-white mt-[16px] text-[16px]'>
        <p className='text-left font-semibold'>Item</p>
        <p className='font-semibold'>QTY</p>
        <p className='font-semibold'>Total</p>
        <p className='text-left'>Duo</p>
        <p>14</p>
        <p>323.99</p>
      </div>
    </div>
  )
}

export default CartTile