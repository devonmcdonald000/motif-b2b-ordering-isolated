import React from 'react'
import Image from 'next/image'

function QuestionsTile() {
  return (
    <div className='lg:bg-secondary-100 rounded-md pl-10 pr-20 py-10 flex flex-col max-w-[424px]'>
      <div className='flex gap-4'>
        <Image
          src="/icons/message_icon.svg"
          alt="Message Icon"
          width={38}
          height={38}
        />
        <p className='text-secondary-300 text-[24px]'>Questions/Feedback?</p>
      </div>
      <div className='mt-5 flex flex-col gap-4'>
        <p className='text-secondary-300 text-[14px]'>
          {`Questions? Problems with order? Need to change account details? Contact us at: `}
          <span>
            <a href="mailto:sales@motifmedical.com">
              Sales@motifmedical.com
            </a>
          </span>
        </p>
        <p className='text-secondary-300 text-[14px]'>
          {`Help us improve your ordering experience `}
          <span>
            <a href="">
              Give Us Your Feedback
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default QuestionsTile