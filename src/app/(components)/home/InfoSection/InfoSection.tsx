'use client'

import React from 'react'
import AccountTile from './AccountTile'
import QuestionsTile from './QuestionsTile'
import InfoTile from './InfoTile'
import CartTile from './CartTile'

function InfoSection({ hideOnMobile = false }) {
  return (
    <div className={`flex flex-col space-y-6`}>
      <CartTile />
      <AccountTile />
      <QuestionsTile />
      <InfoTile />
    </div>
  )
}

export default InfoSection