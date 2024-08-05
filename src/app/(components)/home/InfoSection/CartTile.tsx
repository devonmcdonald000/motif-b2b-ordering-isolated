'use client'

import React from 'react'
import Image from 'next/image'
import { useOrderStore } from '@/stores/order'
import { SfButton } from '@storefront-ui/react'

function CartTile() {
  const { order } = useOrderStore()

  if ( !order?.length ) return null

  const priceTotal = order?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  )?.toFixed( 2 )

  const qtyTotal = order?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0
  )
  
  return (
    <div className='bg-secondary-200 rounded-md p-10 py-10 flex flex-col max-w-[424px]'>
      <div className='flex gap-4'>
        <div className='relative'>
          <div className='absolute -right-3 -top-3 bg-danger rounded-full p-1'>
            <p className='text-white text-[12px] rounded-full min-w-5 min-h-5 flex justify-center items-center'>{qtyTotal}</p>
          </div>
          <Image
            src="/icons/cart_icon.svg"
            alt="Cart Icon"
            width={41}
            height={41}
          />
        </div>
        <p className='text-white text-[24px]'>Order Summary</p>
      </div>
      <div className='grid grid-cols-3 text-center m-auto w-full text-white mt-[16px] text-[16px] space-y-2 font-light'>
        <p className='font-semibold my-auto justify-self-start mt-2'>Item</p>
        <p className='font-semibold my-auto'>QTY</p>
        <p className='font-semibold my-auto justify-self-end mx-2'>Total</p>
        {
          order?.map( item => {
            return (
              <>
                <p className='text-left'>{item.name}</p>
                <p>{item.qty}</p>
                <p className='justify-self-end'>{`$${item.total?.toFixed( 2 )}`}</p>
              </>
            )
          })
        }
      </div>
      <p className='text-white text-[24px] text-center mt-[21px]'>Total: ${priceTotal}</p>
      <div className='w-fit mx-auto mt-5'>
        <SfButton className='bg-primary-200 hover:opacity-80'>
          <p className='text-black font-normal px-16 text-[18px] py-1'>Submit Order</p>
        </SfButton>
      </div>
    </div>
  )
}

export default CartTile