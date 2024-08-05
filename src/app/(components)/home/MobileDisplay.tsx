'use client'

import React from 'react'
import InfoSection from './InfoSection/InfoSection'
import ProductDisplay from './Products/ProductDisplay'

function MobileDisplay({ display, openConfirm }: { display: 'orders' | 'account', openConfirm: () => void }) {

  if ( display === 'account' ) return <div className='flex items-center justify-center'><InfoSection openConfirm={openConfirm} /></div>

  return <ProductDisplay openConfirm={openConfirm}/>
}

export default MobileDisplay