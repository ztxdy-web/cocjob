import React from 'react'
import { Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Bar() {
    return (
        <div className='h-screen fixed'>
            <Sidebar className='h-full' aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to="/">
                            <Sidebar.Item
                            >
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        <Sidebar.Collapse
                            label="Pekerjaan"
                        >
                            <Link to="/dashboard/tabel">
                                <Sidebar.Item
                                >
                                    Tabel
                                </Sidebar.Item>
                            </Link>
                            <Link to="/dashboard/tambah">
                                <Sidebar.Item
                                >
                                    Tambah
                                </Sidebar.Item>
                            </Link>
                            <Link to="/dashboard/pekerjaan">
                                <Sidebar.Item
                                >
                                    Card
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>
                        {/* <Sidebar.Item
                            href="#"
                        >
                            <p>
                                Users
                            </p>
                        </Sidebar.Item> */}
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}
