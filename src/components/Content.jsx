
import React, { useEffect, useState } from 'react'
import CardJob from './CardJob'
import axios from 'axios'

export default function Content() {

    const [datas, setDatas] = useState(null)

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy').then((res) => {
            setDatas(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div className='my-10 flex flex-col items-center justify-center w-screen gap-10 h-fit'>
            <h1 className='text-3xl font-bold'>Pekerjaan Terkini</h1>
            <div className='flex flex-col md:flex-row gap-5'>
                {datas !== null && datas.slice(0, 3).map((job) => {
                    return <CardJob title={job.title} name={job.company_name} image_url={job.company_image_url} city={job.company_city} id={job.id} />
                })}
            </div>
            <h1 className='md:text-3xl text-2xl font-bold'>Perusahaan Yang Terpercaya</h1>
            <div className='md:w-full w-56 mx-5 md:px-[10%] md:h-full flex flex-col items-center md:flex-row md:flex-wrap md:content-center md:justify-center gap-3'>
                {datas !== null && datas.map((job) => {
                    return <img className='w-32 h-fit' src={job.company_image_url} alt="" />
                })}
            </div>

        </div >
    )
}
