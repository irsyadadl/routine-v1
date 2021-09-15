import React from 'react'
import { Link } from 'wouter';

export default function Register() {
    return (
        <>
            <h1 className="font-medium text-lg mb-5">Register</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-5">
                    <label htmlFor="name" className="inline-block mb-1 font-medium text-gray-600 text-sm">Name</label>
                    <input type="text" name="name" id="name" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="inline-block mb-1 font-medium text-gray-600 text-sm">Email</label>
                    <input type="text" name="email" id="email" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="inline-block mb-1 font-medium text-gray-600 text-sm">Password</label>
                    <input type="password" name="password" id="password" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                        <Link className="font-medium text-black" href="/login">Login</Link>, if you're already have account.
                    </span>
                    <button className="text-white px-5 py-2.5 rounded-xl font-medium focus:outline-none focus:ring focus:ring-blue-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 transition duration-200">
                        Register
                    </button>
                </div>
            </form>
        </>
    )
}
