import { Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CardJob(props) {
    const { title, name, image_url, city, id } = props
    return (
        <div className='md:w-[250px] w-full'>
            <Card className='h-full'>
                <div className='h-full flex flex-col justify-between gap-5'>
                    <div>
                        <img src={image_url} className='w-fit h-12' alt="" />
                        <h5 className=" flex text-xl text-left font-bold justify-between items-start tracking-tight text-gray-900 dark:text-white">
                            <p className='w-fit line-clamp-2'>
                                {title}
                            </p>
                        </h5>
                    </div>
                    <p className="m-0 p-0 font-normal text-left text-gray-700 dark:text-gray-400"> <span className='font-semibold'>{name}</span>  <br /> {city}</p>
                    <Link to={'/detail/' + id} className='bg-cyan-700 px-4 py-3 text-center text-white rounded-lg'>
                        <p>
                            Lihat Selengkapnya
                        </p>
                    </Link>
                </div>
            </Card>
        </div>
    )
}
