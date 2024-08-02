'use client'

import React from 'react'
import InfoSection from './InfoSection/InfoSection'
import ProductDisplay from './Products/ProductDisplay'

function MobileDisplay({ display }: { display: 'orders' | 'account' }) {

  if ( display === 'account' ) return <div className='flex items-center justify-center'><InfoSection /></div>

  return <ProductDisplay />
}

export default MobileDisplay