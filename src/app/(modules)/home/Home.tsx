'use client'

import React, { useState } from 'react'
import Tabs from '@/app/(components)/global/Tabs'
import MobileDisplay from '@/app/(components)/home/MobileDisplay'
import DesktopDisplay from '@/app/(components)/home/DesktopDisplay'

function Home() {
  const [ display, setDisplay ] = useState<'orders' | 'account'>( 'orders' )

  return (
    <div className='w-full flex flex-col gap-5 mb-36'>
      <Tabs
        selected={display}
        onSelected={( selected ) => setDisplay( selected as 'orders' | 'account' )}
        tabs={[
          { label: 'orders' },
          { label: 'account' }
        ]}
        hideOnLarge
      />
      <div className='block lg:hidden'>
        <MobileDisplay display={display} />
      </div>
      <DesktopDisplay />
    </div>
  )
}

export default Home