import React, { useState } from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import axios from 'axios';
import Cookies from 'js-cookie';



function Daftar() {
    const apiLink = "https://dev-example.sanbercloud.com/api/job-vacancy"

    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const postJob = async () => {
        setLoading(true)
        try {
            const bodyFormData = new FormData()
            bodyFormData.append('title', inputs.title)
            bodyFormData.append('job_description', inputs.desc)
            bodyFormData.append('job_qualification', inputs.quali)
            bodyFormData.append('job_type', inputs.type)
            bodyFormData.append('job_tenure', inputs.tenure)
            bodyFormData.append('job_status', inputs.status)
            bodyFormData.append('company_name', inputs.name)
            bodyFormData.append('company_image_url', inputs.urlImage)
            bodyFormData.append('company_city', inputs.city)
            bodyFormData.append('salary_min', inputs.min)
            bodyFormData.append('salary_max', inputs.max)

            console.log(bodyFormData)

            axios.post(apiLink, bodyFormData, { headers: { "Authorization": "Bearer " + Cookies.get('token') } }).then((res) => {
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
                        name="name"
                        value={inputs.name || ''}
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
                        name="city"
                        value={inputs.city || ''}
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
                        name="type"
                        value={inputs.type || ''}
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
                        name="tenure"
                        value={inputs.tenure || ''}
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
                        name="status"
                        value={inputs.status || ''}
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
                        name="min"
                        value={inputs.min || 1000000}
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
                        name="max"
                        value={inputs.max || 2000000}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        value="Link Photo (klik kanan copy link image address di google)"
                    />
                </div>
                <TextInput
                    placeholder=""
                    required
                    shadow
                    type="text"
                    name="urlImage"
                    value={inputs.urlImage || ''}
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
                    name="desc"
                    value={inputs.desc || ''}
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
                    name="quali"
                    value={inputs.quali || ''}
                    onChange={handleChange}
                />
            </div>
            <Button onClick={() => postJob()}>
                Register
            </Button>
        </form >
    )
}

export default function Tambah() {
    return (
        <div className='mx-20 my-10'>
            <Daftar />
        </div>
    )
}
