import Image from 'next/image'
import React from 'react'
import Input from '../../forms/Input'
import { useOrderStore } from '@/stores/order'
import { useDisclosure } from '@storefront-ui/react'
import ModalTransition from '../../global/Modal'
import { Product } from '@/types/Product'
import ProductModal from './ProductModal'
import CartTile from '../InfoSection/CartTile'

type ProductsProps = {
  products: any
}

function Products({ products } : ProductsProps ) {
  const { order, updateItem, removeItem } = useOrderStore()
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

  const handleQtyChange = ( e: React.ChangeEvent<HTMLInputElement>, product: any ) => {
    if ( e?.target?.value?.length === 4 ) return
    if ( !e.target.value ) return removeItem( product.id )
    const qty = parseInt( e.target.value )
    updateItem({
      name: product.name,
      id: product.id,
      qty,
      total: qty * product.price_per_unit
    })
  }

  return (
    <div className='flex flex-col items-start gap-8'>
      {
        products.map((product: Product, index: number ) => {
          const orderItem = order.find( item => item.id === product.id )

          return (
            <div key={product.id} className='flex gap-3 justify-between items-start w-full'>
              <ProductModal
                close={close}
                isOpen={isOpen}
                product={product}
                orderItem={orderItem}
                handleQtyChange={handleQtyChange}
              />
              <div className='flex gap-3 items-start justify-self-start cursor-pointer' onClick={open}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={174}
                  height={174}
                  className='w-[55px] h-[55px] md:w-[174px] md:h-[174px] object-cover border border-[#D7D7D8]'

                />
                <div className='flex flex-col gap-1'>
                  <p className='font-medium text-[14px] md:text-[20px] text-secondary-300'>{product.name}</p>
                  <p className='font-light text-[12px] md:text-[18px] text-secondary-200'>{`${product.items_per_case} per case`}</p>
                  <p className='font-light text-[12px] md:text-[18px] text-secondary-200'>{product.id}</p>
                  <p className='font-medium text-[12px] md:text-[18px] text-secondary-200'>{`$${product.price_per_unit} per unit`}</p>
                  <p className='font-medium text-[14px] md:text-[20px] text-primary-300'>{`$${product.price_per_case} per case`}</p>
                </div>
              </div>

              <div className='relative'>
                { index === 0 && <p className='absolute -top-7 md:-top-10 left-1/2 transform -translate-x-1/2 mx-auto text-secondary-200 text-[12px] md:text-[18px]'>QTY</p>}
                <div>
                  <Input
                    placeholder='0'
                    type="number"
                    maxLength={3}
                    value={orderItem?.qty ?? ''}
                    onChange={ ( e ) => handleQtyChange( e, product )}
                    className='text-center px-0 max-w-[20px]'
                  />
                </div>
              </div>
            </div>
        )})
      }
    </div>
  )
}

export default Products