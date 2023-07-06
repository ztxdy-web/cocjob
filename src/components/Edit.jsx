import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import axios from 'axios';
import Cookies from 'js-cookie';



function Form(props) {


    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false)
    const [ulang, setUlang] = useState(true)

    useEffect(() => {
        const apiLink = `https://dev-example.sanbercloud.com/api/job-vacancy/${props.id}`
        axios.get(apiLink).then((res) => {
            setInputs(res.data)
            setUlang(false)
        }).catch((err) => console.log(err))
    }, [ulang, setUlang])



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const deleteJob = async () => {
        const apiGet = `https://dev-example.sanbercloud.com/api/job-vacancy/${props.id}`
        try {
            axios.delete(apiGet, { headers: { "Authorization": "Bearer " + Cookies.get('token') } }).then((res) => {
                window.location.assign("/dashboard/tabel")
            }).catch((err) => console.log(err))
        } catch (error) {

        }
    }

    const postJob = async () => {
        setLoading(true)
        try {
            const bodyFormData = new FormData()
            bodyFormData.append('title', inputs.title)
            bodyFormData.append('job_description', inputs.job_description)
            bodyFormData.append('job_qualification', inputs.job_qualification)
            bodyFormData.append('job_type', inputs.job_type)
            bodyFormData.append('job_tenure', inputs.job_tenure)
            bodyFormData.append('job_status', inputs.job_status)
            bodyFormData.append('company_name', inputs.company_name)
            bodyFormData.append('company_image_url', inputs.company_image_url)
            bodyFormData.append('company_city', inputs.company_city)
            bodyFormData.append('salary_min', inputs.salary_min)
            bodyFormData.append('salary_max', inputs.salary_max)

            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${props.id}`, bodyFormData, { headers: { "Authorization": "Bearer " + Cookies.get('token') } }).then((res) => {
                console.log(res.data)
                window.location.assign("/dashboard/tabel")
            }).catch((err) => console.log(err))
        } catch (error) {
            alert(error)
        }
    }

    return (
        <form className="flex w-full flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        value="Title"
                    />
                </div>
                <TextInput
                    placeholder=""
                    required
                    shadow
                    type="text"
                    name="title"
                    value={inputs.title || ''}
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-row w-full gap-5'>
                <div className='w-[50%]'>
                    <div className="mb-2 block">
                        <Label
                            value="Company Name"
                        />
                    </div>
                    <TextInput
                        placeholder=""
                        required
                        shadow
                        type="text"
                        name="company_name"
                        value={inputs.company_name || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-[50%]'>
                    <div className="mb-2 block">
                        <Label
                            value="City"
                        />
                    </div>
                    <TextInput
                        placeholder=""
                        required
                        shadow
                        type="text"
                        name="company_city"
                        value={inputs.company_city || ''}
                        onChange={handleChange}
                    />
                </div>
            </div >
            <div className='flex flex-row w-full gap-5 mx-auto'>
                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label
                            value="Type"
                        />
                    </div>
                    <TextInput
                        placeholder="onSite/work from home/hybird"
                        required
                        shadow
                        type="text"
                        name="job_type"
                        value={inputs.job_type || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label
                            value="Tenure"
                        />
                    </div>
                    <TextInput
                        placeholder="Magang/Kontrak/Tetap"
                        required
                        shadow
                        type="text"
                        name="job_tenure"
                        value={inputs.job_tenure || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label
                            value="Status"
                        />
                    </div>
                    <TextInput
                        placeholder="0 untuk Ditutup, 1 untuk Dibuka"
                        required
                        shadow
                        type="number"
                        name="job_status"
                        value={inputs.job_status || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='flex flex-row w-[50%] mx-auto gap-5'>
                <div className='w-[50%]'>
                    <div className="mb-2 block">
                        <Label
                            value="Salary min"
                        />
                    </div>
                    <TextInput
                        placeholder=""
                        required
                        shadow
                        type="number"
                        name="salary_min"
                        value={inputs.salary_min || 1000000}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-[50%]'>
                    <div className="mb-2 block">
                        <Label
                            value="Salary max"
                        />
                    </div>
                    <TextInput
                        placeholder=""
                        required
                        shadow
                        type="number"
                        name="salary_max"
                        value={inputs.salary_max || 2000000}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        value="Link Photo (klik kanan copy link image di google)"
                    />
                </div>
                <TextInput
                    placeholder=""
                    required
                    shadow
                    type="text"
                    name="company_image_url"
                    value={inputs.company_image_url || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        value="Description"
                    />
                </div>
                <Textarea
                    placeholder=""
                    required
                    shadow
                    type="text"
                    name="job_description"
                    value={inputs.job_description || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        value="Qualification"
                    />
                </div>
                <Textarea
                    placeholder=""
                    required
                    shadow
                    type="text"
                    name="job_qualification"
                    value={inputs.job_qualification || ''}
                    onChange={handleChange}
                />
            </div>
            <Button onClick={() => {
                postJob(inputs.id)
                console.log(inputs)
            }}>
                Edit
            </Button>
            <Button onClick={() => {
                deleteJob(inputs.id)
            }}>
                Delete
            </Button>
        </form >
    )
}

export default function Edit() {
    const { id } = useParams()
    return (

        <div className='mx-20 my-10'>
            <Form id={id} />
        </div>
    )
}
