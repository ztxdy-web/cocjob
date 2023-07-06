import { Carousel } from 'flowbite-react'
import React from 'react'

export default function Hero() {
    return (
        <div>
            <Carousel className='hidden md:block md:h-[425px]'>
                <img
                    alt="..."
                    src="/banner1.svg"
                />
                <img
                    alt="..."
                    src="/banner2.svg"
                />
                <img
                    alt="..."
                    src="/banner3.svg"
                />
            </Carousel>
            <div className='block md:hidden'>
                <img src="/banner1.svg" alt="" />
                <img src="/banner2.svg" alt="" />
                <img src="/banner3.svg" alt="" />
            </div>
        </div>
    )
}
