"use client"
import { siteConfig } from '@/config/site'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

export default function Our_projects() {
  return (
      <div className=" flex flex-col text-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"  >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 " >Our projects</h2>
        <div className="mt-6 grid grid-cols-1 place-items-baseline  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {siteConfig.projects.map((project) => (
            <div key={project.id} className=" ">
              <div className="aspect-h-1 aspect-w-1 w-full h-full lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                className="object-cover  w-full object-center rounded-t-md  h-full "
                width = {200}
                height={1}
                />
              </div>
              <div className='bg-white shadow-md h-32'>
                      <h2 className='text-sm text-gray-900 mb-4'>{project.name}</h2>
                      <p className='text-sm font-medium text-gray-500 '>{project.text}</p>    
                </div>
            </div>
          ))}
        </div>
      </div>
  )
}
