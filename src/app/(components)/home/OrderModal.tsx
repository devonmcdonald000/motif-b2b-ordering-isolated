'use client'

import React from 'react'
import ModalTransition from '../global/Modal'
import Button from '../global/Button'
import { Item } from '@/types/Order'
import { useOrderStore } from '@/stores/order'
import Image from 'next/image'

function OrderModal({ isOpen, close }: { isOpen: boolean, close: () => void }) {
  const { order } = useOrderStore()

  const priceTotal = order?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  )?.toFixed( 2 )

  return (
    <ModalTransition isOpen={isOpen} close={close}>
      <div className='text-secondary-300 flex lg:rounded-md p-10 py-10 flex-col w-full lg:max-w-[424px] items-center'>
      <button className='absolute top-5 right-5' onClick={close}>
          <Image
            src='/icons/close_icon.svg'
            alt="Close Icon"
            width={15}
            height={15}
          />
        </button>
        <div className='flex gap-4'>
          <p className='text-[24px]'>Order Summary</p>
        </div>
        <div className='grid-cols-3 text-center m-auto w-full mt-[16px] text-[16px] space-y-2 font-light grid'>
          <p className='font-semibold my-auto justify-self-start mt-2'>Item</p>
          <p className='font-semibold my-auto'>QTY</p>
          <p className='font-semibold my-auto justify-self-end mx-2'>Total</p>
          {
            order?.map( ( item: Item ) => {
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
        <div className='w-fit mx-auto mt-5'>
          <Button>
            Place Order for ${priceTotal}
          </Button>
        </div>
      </div>
    </ModalTransition>
  )
}

export default OrderModal