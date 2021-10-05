import React from 'react';
import { Link } from 'wouter';
import NavLink from './NavLink';

export default function Navbar({ className }) {
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
                        <div className="flex items-center md:gap-x-4 lg:gap-x-8">
                            <NavLink href="/login">Login</NavLink>
                            <NavLink href="/register">Register</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
