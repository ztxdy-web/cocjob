import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardJob from './CardJob'

export default function Lowongan() {

    const [datas, setDatas] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy').then((res) => {
            setDatas(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])




    const handleChange = e => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <div className='md:w-1/2 w-full px-5 md:px-0 mx-auto mt-10'>
                <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-6 w-6 fill-slate-500" viewBox="0 0 20 20"><path className='my-auto' d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                    </span>
                    <input onChange={handleChange} value={search} class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for new job..." type="text" name="search" />
                </label>
                {/* <Button outline className='w-1/4 mx-auto my-3'>Search</Button> */}
            </div>
            <div className='flex flex-col md:flex-row md:flex-wrap md:px-52 px-5 gap-5 justify-center content-center my-10'>
                {datas !== null && datas.filter((job) => job.title.toLowerCase().includes(search)).map((job) => {
                    return <CardJob title={job.title} name={job.company_name} image_url={job.company_image_url} city={job.company_city} id={job.id} />
                })}
            </div>

        </div >
    )
}
