'use client'

import React from 'react'
import Image from 'next/image'
import { useOrderStore } from '@/stores/order'
import Button from '../../global/Button'

function CartTile({ openConfirm }: { openConfirm: () => void }) {
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
    <div className='bg-secondary-200 flex lg:rounded-md p-10 py-10 flex-col w-full lg:max-w-[424px] items-center lg:items-end'>
      <div className='flex gap-4 lg:self-start'>
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
        <p className='text-white text-[24px] text-center lg:text-left'>Order Summary</p>
      </div>
      <div className='grid-cols-3 text-center m-auto w-full text-white mt-[16px] text-[16px] space-y-2 font-light hidden lg:grid'>
        <p className='font-semibold my-auto justify-self-start mt-2'>Item</p>
        <p className='font-semibold my-auto'>QTY</p>
        <p className='font-semibold my-auto justify-self-end mx-2'>Total</p>
        {
          order?.map( item => {
            return (
              <>
                <p className='text-left'>{item.name}</p>
                <p>{item.qty}</p>
                <p className='justify-self-end self-end'>{`$${item.total?.toFixed( 2 )}`}</p>
              </>
            )
          })
        }
      </div>
      <p className='text-white text-[24px] text-center mt-[21px]'>Total: ${priceTotal}</p>
      <div className='w-fit mx-auto mt-5'>
        <Button onClick={openConfirm}>
          Confirm Order
        </Button>
      </div>
    </div>
  )
}

export default CartTile