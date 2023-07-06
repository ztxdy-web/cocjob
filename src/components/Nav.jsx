import React from 'react'
import { Navbar } from "flowbite-react";
import Cookies from 'js-cookie';
import Login from './Login';
import { Link } from 'react-router-dom';



export default function Nav() {

    const Dashboard = () => {
        if (Cookies.get('token') !== undefined) {
            return (
                <Link to={'/dashboard/tabel'}>
                    <Navbar.Link>
                        <p className='text-xl'>
                            Dashboard
                        </p>
                    </Navbar.Link>
                </Link>
            )
        }
    }

    return (
        <Navbar
            fluid
            rounded
            className='mx-3'
        >
            <Navbar.Brand href="/">
                <img
                    alt="Logo"
                    className="mr-3 h-10 sm:h-14"
                    src="/logo-coc.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
                    COC JOB
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Link to={'/'}>
                    <Navbar.Link
                    >
                        <p className='text-xl'>
                            Beranda
                        </p>
                    </Navbar.Link>
                </Link>
                <Link to={'/lowongan'}>
                    <Navbar.Link>
                        <p className='text-xl'>
                            Lowongan
                        </p>
                    </Navbar.Link>
                </Link>
                <Dashboard />
            </Navbar.Collapse>
            <Navbar.Collapse>
                <div className='w-full'>
                    <Login />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
