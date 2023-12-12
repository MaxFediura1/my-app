import React from 'react'
import Image from 'next/image'
import slider_image_1 from '@/../public/images/main_page/solid_slider_image3.jpg'
import slider_image_2 from '@/../public/images/main_page/solid_slider_image3.jpg'
import slider_image_3 from '@/../public/images/main_page/solid_slider_image1.jpg'
export default function Carousel() {
  return (
    <div>
        <div className="relative w-full">
    <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div id="carousel-item-1" className=" hidden duration-700 ease-in-out">
            <Image src={slider_image_1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div id="carousel-item-2" className="hidden duration-700 ease-in-out">
            <Image src={slider_image_2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div id="carousel-item-3" className=" duration-700 ease-in-out">
            <Image src={slider_image_3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
        <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
        <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
        <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
    </div>
    <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="hidden">Next</span>
        </span>
    </button>
</div>
    </div>
  )
}
