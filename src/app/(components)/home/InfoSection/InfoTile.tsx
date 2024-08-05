import React from 'react'

function InfoTile() {
  return (
    <div className='lg:bg-secondary-100 rounded-md pl-10 pr-20 py-10 flex flex-col max-w-[424px]'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-0.5'>
          <p className='text-[14px] font-medium text-secondary-300'>Minimum Order & Pricing</p>
          <p className='text-[12px] font-light text-secondary-200'>Current pricing is outlined in the Distributor Price List (sent separately).</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-secondary-300'>Sale Price</p>
          <p className='text-[12px] font-light text-secondary-200'>Complying with MAP/MSRP requirements, as specified in the Distributor Price List, is a condition to receiving wholesale pricing. Limited exceptions may be made at Motif Medical’s discretion and must be requested in writing.</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-secondary-300'>Shipping</p>
          <p className='text-[12px] font-light text-secondary-200'>
            {'Expenses are based on weight and will be added to the invoice or charged to the freight account on file unless otherwise noted on your account. Orders are processed and shipped within 4 business days. For expedited shipping requests (2-day or Overnight), please submit request to '}
            <span>
              <a href="mailto:orders@motifmedical.com">
                orders@motifmedical.com
              </a>
            </span>
            {' before 2pm EST. Tracking information will be provided via email once it becomes available.'}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-secondary-300'>Minimum Order & Pricing</p>
          <p className='text-[12px] font-light text-secondary-200'>Current pricing is outlined in the Distributor Price List (sent separately).</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-secondary-300'>Payment</p>
          <p className='text-[12px] font-light text-secondary-200'>Orders are invoiced with Net30 terms unless otherwise noted on your account. We accept credit cards, company checks, and bank wires. Accounts must remain current or shipments may be affected.</p>
        </div>
      </div>
    </div>
  )
}

export default InfoTile