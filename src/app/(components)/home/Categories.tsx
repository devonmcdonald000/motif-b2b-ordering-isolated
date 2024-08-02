'use client'

import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { CategoriesMock } from '@/app/mocks/Categories';
import Image from 'next/image';

type CategoriesProps = {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const numSlidesCalculation = () => {
  return window.innerWidth < 1200 ? window.innerWidth < 600 ? 2 : 3 : 4
}

export default function Categories({ selectedCategory, setSelectedCategory } : CategoriesProps ) {

  const [ numSlides, setNumSlides ] = React.useState( 4 )

  useEffect(()=> {
    setNumSlides( numSlidesCalculation() )
    const resizeHandler = () => {
       setNumSlides( numSlidesCalculation() )
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
        removeEventListener( 'resize', resizeHandler)
    }
 }, [])

  return (
    <div>
      <div className='flex gap-1 mb-5'>
        <p className='font-medium text-[16px]'>Categories</p>
        <Image
          src="/icons/carat_right.svg"
          alt="Carat Right"
          width={8.5}
          height={8.5}
        />
      </div>
      <Slider
        autoplay
        autoplaySpeed={5000}
        infinite
        dots={false}
        speed={500}
        slidesToScroll={2}
        slidesToShow={numSlides ?? 4}
      >
        {
          CategoriesMock.map( ( category ) => {
            return (
              <div
                key={category.name}
                className='max-w-[150px] h-[150px] cursor-pointer focus-visible:outline-none flex flex-col rounded'
                onClick={() => {
                    setSelectedCategory(selectedCategory === category.name ? null : category.name)
                }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={150}
                  height={150}
                  className={`object-cover w-full h-full rounded-lg ${selectedCategory === category.name ? 'border-2 border-primary-300' : 'border-transparent'}`}
                />
                <p className={`font-medium mt-1 text-[16px] ${selectedCategory === category.name ? 'text-primary-300' : 'text-secondary-300'}`}>{category.name}</p>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

