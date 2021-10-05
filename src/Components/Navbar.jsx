import React, { Fragment } from 'react';
import { Link } from 'wouter';
import NavLink from './NavLink';
import { Menu, Transition } from '@headlessui/react';

export default function Navbar({ className }) {
    const auth = true;
    return (
        <nav className={`bg-white border-b ${!!className && className}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-x-8">
                    <Link href="/">
                        Routine
                    </Link>

                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center md:gap-x-4 lg:gap-x-8">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                        </div>
                        {auth ?
                            <div className="flex items-center md:gap-x-4 lg:gap-x-8">
                                <Menu className="relative" as="div">
                                    <Menu.Button className="flex items-center gap-x-3">
                                        <img className="w-8 h-8 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile Picture" />
                                        Irsyad A. Panjaitan
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="mt-2 py-0.5 space-y-0.5 divide-y overflow-hidden bg-white rounded-xl border w-56 absolute right-0">
                                            <div>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        View Profile
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        Account settings
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        Security
                                                    </Link>
                                                </Menu.Item>
                                            </div>
                                            <div>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        Dashboard
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        Order
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        Catalog
                                                    </Link>
                                                </Menu.Item>
                                            </div>
                                            <div>
                                                <Menu.Item>
                                                    <Link
                                                        className={`hover:bg-gray-100 px-4 py-2 block`}
                                                        href="/dashboard"
                                                    >
                                                        Logout
                                                    </Link>
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            :
                            <div className="flex items-center md:gap-x-4 lg:gap-x-8">
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </nav>
    );
}
