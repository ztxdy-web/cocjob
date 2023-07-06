import { Footer } from 'flowbite-react'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <Footer container>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            alt="Logo"
                            name="Logo"
                            src="/logo-coc.png"
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        by="Assadullah™"
                        href="#"
                        year={2023}
                    />
                </div>
            </Footer>
        </div>
    )
}
