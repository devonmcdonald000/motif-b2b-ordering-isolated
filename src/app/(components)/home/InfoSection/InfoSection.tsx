'use client'

import React from 'react'
import AccountTile from './AccountTile'
import QuestionsTile from './QuestionsTile'
import InfoTile from './InfoTile'
import CartTile from './CartTile'

function InfoSection({ openConfirm }: { openConfirm: () => void }) {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='hidden lg:flex'>
        <CartTile openConfirm={openConfirm}/>
      </div>
      <AccountTile />
      <QuestionsTile />
      <InfoTile />
    </div>
  )
}

export default InfoSection