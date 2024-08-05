'use client'

import React, { useState } from 'react'
import ModalTransition from '../../global/Modal'
import { Product } from '@/types/Product'
import Image from 'next/image'
import Button from '../../global/Button'
import Input from '../../forms/Input'
import { Item } from '@/types/Order'

type ProductModalProps = {
  close: () => void,
  isOpen: boolean,
  product: Product,
  orderItem: Item | undefined,
  handleQtyChange: ( e: React.ChangeEvent<HTMLInputElement>, product: Product ) => void
}

function ProductModal({ close, isOpen, product, handleQtyChange } : ProductModalProps) {
  const [ qty, setQty ] = useState( 0 )

  return (
    <ModalTransition close={close} isOpen={isOpen}>
      <div className='flex flex-col gap-2 h-fit text-secondary-300 relative'>
        <button className='absolute -top-5 -right-5' onClick={close}>
          <Image
            src='/icons/close_icon.svg'
            alt="Close Icon"
            width={15}
            height={15}
          />
        </button>
        <p className='text-[22px]'>{product.name}</p>
        { product.items_per_case && <p className='text-[18px]'>Sold by the case. Set of {product.items_per_case}.</p>}
        <Image
          src={product.image}
          alt="Product Image"
          width={320}
          height={320}
          className='border border-secondary-100 rounded-md'
        />
        <div className='mt-2'>
          <p className='text-[18px]'>SKU: {product.id}</p>
          <p className='text-[18px]'>Each: ${product.price_per_unit}</p>
          <p className='text-[18px] text-danger'>Your Price Per Case: ${product.price_per_case}</p>
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <div className='flex gap-5'>
            <div className='flex gap-2 items-center'>
              <p className='text-center text-secondary-200 text-[12px] md:text-[18px]'>QTY</p>
              <Input
                placeholder='0'
                type="number"
                maxLength={3}
                value={qty}
                onChange={ ( e ) => setQty( parseInt( e.target.value ) )}
                className='text-center px-0 max-w-[20px] h-[50px]'
              />
            </div>
            <Button
              disabled={!qty || qty === 0}
              onClick={() => { handleQtyChange( { target: { value: qty.toString() }} as React.ChangeEvent<HTMLInputElement>, product ); close() }}
            >
              Add To Cart
            </Button>
          </div>
          {
            qty > 0 &&
            <p className='text-[18px] text-right'>Total: ${ ( qty * product.price_per_unit )?.toFixed( 2 )}</p>
          }
        </div>
      </div>
    </ModalTransition>
  )
}

export default ProductModal