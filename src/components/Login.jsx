import React, { useState } from 'react'

import { Button, Checkbox, Label, TextInput, Modal } from 'flowbite-react';
import axios from 'axios';
import Cookies from 'js-cookie';

function DefaultForm() {
    const apiLink = "https://dev-example.sanbercloud.com/api/login"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const postLogin = async () => {
        setLoading(true)
        try {
            const bodyFormData = new FormData()
            bodyFormData.append('email', email)
            bodyFormData.append('password', password)

            axios.post(apiLink, bodyFormData).then((res) => {
                const token = res.data.token
                Cookies.set('token', token)
                window.location.assign("/")
            }).catch((err) => {
                console.log(err.message)
                alert("email atau password salah")
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="flex w-full flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Email"
                    />
                </div>
                <TextInput
                    id="email1"
                    placeholder="name@email.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Password"
                    />
                </div>
                <TextInput
                    id="password1"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button onClick={() => postLogin()}>
                Login
            </Button>
        </form>
    )
}

function Register() {
    const apiLink = "https://dev-example.sanbercloud.com/api/register"

    const linkPhoto = "https://cdn.kibrispdr.org/data/221/foto-profil-kosong-2.png"

    const [inputs, setInputs] = useState({ photo: linkPhoto });
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const postRegister = async () => {
        setLoading(true)
        try {
            const bodyFormData = new FormData()
            bodyFormData.append('name', inputs.name)
            bodyFormData.append('image_url ', inputs.photo)
            bodyFormData.append('email', inputs.email)
            bodyFormData.append('password', inputs.password)

            axios.post(apiLink, bodyFormData).then((res) => {
                const token = res.data.token
                Cookies.set('token', token)
                window.location.assign("/")
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
                        htmlFor="name"
                        value="Name"
                    />
                </div>
                <TextInput
                    id="name"
                    placeholder="your name"
                    required
                    shadow
                    type="text"
                    name="name"
                    value={inputs.name || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Email"
                    />
                </div>
                <TextInput
                    id="email2"
                    placeholder="name@email.com"
                    required
                    shadow
                    type="email"
                    name="email"
                    value={inputs.email || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Password"
                    />
                </div>
                <TextInput
                    id="password2"
                    required
                    shadow
                    type="password"
                    name="password"
                    value={inputs.password || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="agree" required />
                <Label
                    className="flex"
                    htmlFor="agree"
                >
                    <p>
                        I agree with the terms and conditions
                    </p>
                </Label>
            </div>
            <Button onClick={() => postRegister()}>
                Register
            </Button>
        </form>
    )
}

export default function Login() {
    const [pindah, setPindah] = useState(true)
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    return (
        <div className='w-full'>
            {Cookies.get('token') && <Button className='bg-transparent hover:bg-transparent border-2 hover:border-cyan-500' onClick={() => {
                Cookies.remove('token')
                window.location.assign("/")
            }} ><p className='text-cyan-500'>Logout</p></Button>}
            {
                !Cookies.get('token') && <Button onClick={() => {
                    props.setOpenModal('default')
                }} >Login</Button>
            }
            <Modal size="md" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>{pindah ? (<div>Login</div>) : (<div>Register</div>)}</Modal.Header>
                <Modal.Body gradientMonochrome="info" >
                    <Button.Group className='w-full mb-2' outline>
                        <Button className='w-full' onClick={() => { setPindah(true) }} gradientMonochrome="info">
                            Login
                        </Button>
                        <Button className='w-full' onClick={() => { setPindah(false) }} gradientMonochrome="info">
                            SignUp
                        </Button>
                    </Button.Group>
                    {pindah ? (<DefaultForm />) : (<Register />)}
                </Modal.Body>
            </Modal>
        </div >

    )
}
