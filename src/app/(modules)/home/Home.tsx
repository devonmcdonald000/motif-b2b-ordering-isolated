'use client'

import React, { useState } from 'react'
import Tabs from '@/app/(components)/global/Tabs'
import MobileDisplay from '@/app/(components)/home/MobileDisplay'
import DesktopDisplay from '@/app/(components)/home/DesktopDisplay'
import { useDisclosure } from '@storefront-ui/react'
import OrderModal from '@/app/(components)/home/OrderModal'

function Home() {
  const [ display, setDisplay ] = useState<'orders' | 'account'>( 'orders' );
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

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
        <MobileDisplay display={display} openConfirm={open} />
      </div>
      <DesktopDisplay openConfirm={open} />
      <OrderModal isOpen={isOpen} close={close} />
    </div>
  )
}

export default Home