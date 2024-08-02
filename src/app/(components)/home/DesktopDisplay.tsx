import React from 'react'
import ProductDisplay from './Products/ProductDisplay'

function DesktopDisplay() {
  return (
    <div className='hidden lg:block'>
      <ProductDisplay />
    </div>
  )
}

export default DesktopDisplay