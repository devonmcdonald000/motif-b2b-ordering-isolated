import React from 'react'
import ProductDisplay from './Products/ProductDisplay'

function DesktopDisplay({ openConfirm }: { openConfirm: () => void }) {
  return (
    <div className='hidden lg:block'>
      <ProductDisplay openConfirm={openConfirm} />
    </div>
  )
}

export default DesktopDisplay