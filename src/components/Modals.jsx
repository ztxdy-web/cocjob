import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

export default function Modals() {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <Button
                onClick={() => setVisible(true)}
            >
                Toggle modal
            </Button>
            <Modal
                onClose={() => setVisible(false)}
                popup
                size="md"
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                required
                                type="password"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">
                                    Remember me
                                </Label>
                            </div>
                        </div>
                        <div className="w-full">
                            <Button>
                                Log in to your account
                            </Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            <p>
                                Not registered?
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
