import axios from 'axios'
import { Table } from 'flowbite-react'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Tabel() {

    const [datas, setDatas] = useState(null)
    const [search, setSearch] = useState('')

    const deleteJob = async (id) => {
        const apiGet = `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
        try {
            axios.delete(apiGet, { headers: { "Authorization": "Bearer " + Cookies.get('token') } }).then((res) => {
                window.location.assign("/dashboard/tabel")
            }).catch((err) => console.log(err))

        } catch (error) {

        }
    }


    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy').then((res) => {
            setDatas(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    const handleChange = e => {
        setSearch(e.target.value);
    };

    return (
        <div className='mx-12 my-5 flex flex-col justify-center content-center items-center'>
            <div className='md:w-1/2 w-full px-5 md:px-0 mx-auto mt-10'>
                <label class="relative block mb-5">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-6 w-6 fill-slate-500" viewBox="0 0 20 20"><path className='my-auto' d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                    </span>
                    <input onChange={handleChange} value={search} class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for job..." type="text" name="search" />
                </label>
                {/* <Button outline className='w-1/4 mx-auto my-3'>Search</Button> */}
            </div>
            <Table className='w-full'>
                <Table.Head className='w-full'>
                    <Table.HeadCell>
                        ID
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Title
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Company
                    </Table.HeadCell>
                    <Table.HeadCell>
                        City
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Salary
                    </Table.HeadCell>
                    <Table.HeadCell>
                        ACTION
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {datas !== null && datas.filter((job) => job.title.toLowerCase().includes(search)).map((data, index) => {
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    {data.id}
                                </Table.Cell>
                                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                    <p className='line-clamp-1 '>{data.title}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    {data.company_name}
                                </Table.Cell>
                                <Table.Cell>
                                    {data.company_city}
                                </Table.Cell>
                                <Table.Cell>
                                    {rupiah(data.salary_min)} - {rupiah(data.salary_max)}
                                </Table.Cell>
                                <Table.Cell>
                                    <Link
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        to={`/dashboard/edit/${data.id}`}
                                    >
                                        <p>
                                            Edit
                                        </p>
                                    </Link>
                                    <Link
                                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                                        onClick={() => deleteJob(data.id)}
                                    >
                                        <p>
                                            Delete
                                        </p>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
