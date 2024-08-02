'use client'

import { Products as MockProducts } from '@/app/mocks/Product'
import Products from './Products'
import React, { useMemo, useState } from 'react'
import Input from '../../forms/Input'
import Categories from '../Categories'
import InfoSection from '../InfoSection/InfoSection'

function ProductDisplay() {
  const [ selectedCategory, setSelectedCategory ] = useState<string | null>( null )

  const filteredProducts = useMemo( () => {
    return MockProducts.filter( product => {
      return !selectedCategory || product.category === selectedCategory
    })
  }, [ selectedCategory ] )

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full max-w-[601px] mb-[22px]'>
        <Input
          placeholder='Search Products'
          search
          className='px-10'
        />
      </div>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="flex gap-10 w-full md:mt-20">
        <div className='w-full'>
          <div className='flex flex-col gap-2 items-start mb-[50px] mt-5'>
            <p className='text-[20px] md:text-[40px] text-secondary-300 w-[414px]'>
              { selectedCategory ?? "All Products" }
            </p>
            <span className='text-[12px] md:text-[16px] ml-1 text-secondary-300'>Click item more details</span>
          </div>
          <Products products={filteredProducts} />
        </div>
        <div className='hidden lg:block'>
          <InfoSection />
        </div>
      </div>

    </div>
  )
}

export default ProductDisplay