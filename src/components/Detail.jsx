import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {

    const [datas, setDatas] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`).then((res) => {
            setDatas({ ...res.data })
            console.log({ ...res.data })
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const detail = (datas) => {
        return (
            <div className='flex justify-center content-center w-screen h-fit my-10 gap-8'>
                <div>
                    <img src={datas.company_image_url} className='w-32' alt="" />
                    <h1 className='text-2xl font-bold'>{datas.title}</h1>
                    <h1 className='text-xl font-semibold'>{datas.company_name}</h1>
                    <h1 className='text-lg font-normal'>{datas.job_tenure}, {datas.job_type}</h1>
                    <h1 className='text-lg font-normal'>{datas.company_city}</h1>
                </div>
                <div className='w-1/2 gap-3 flex flex-col'>
                    <h1 className='text-xl font-semibold'>Description</h1>
                    <p className='text-sm text-justify'>{datas.job_description}</p>
                    <h1 className='text-xl font-semibold'>Qualification</h1>
                    <p className='text-sm text-justify'>{datas.job_qualification}</p>
                    <h1 className='text-3xl font-semibold'>Salary</h1>
                    <h1 className='text-lg font-normal'>{rupiah(datas.salary_min)} - {rupiah(datas.salary_max)}</h1>
                </div>
            </div>
        )
    }

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        datas !== null && detail(datas)
    )
}
