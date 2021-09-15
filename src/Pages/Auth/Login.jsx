import React from 'react'
import { Link } from 'wouter';

export default function Login() {
    return (
        <>
            <h1 className="font-medium text-lg mb-5">Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-5">
                    <label htmlFor="email" className="inline-block mb-1 font-medium text-gray-600 text-sm">Email</label>
                    <input type="text" name="email" id="email" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="inline-block mb-1 font-medium text-gray-600 text-sm">Password</label>
                    <input type="password" name="password" id="password" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="flex items-center justify-between mb-5 tracking-tight">
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" name="remember" id="remember" className="form-checkbox text-blue-500 focus:outline-none rounded border-gray-300 focus:ring-transparent bg-transparent" />
                        <label htmlFor="remember" className="select-none text-gray-500">Remember me</label>
                    </div>
                    <Link href="/forgot" className="text-black font-medium">Forgot password</Link>
                </div>
                <button className="text-white px-5 py-2.5 rounded-xl font-medium focus:outline-none focus:ring focus:ring-blue-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 transition duration-200">
                    Login
                </button>

                <div className="mt-5 text-gray-500 text-sm">
                    Doesn't have an account ? <Link href="/register" className="text-black font-medium">Register</Link>
                </div>
            </form>
        </>
    )
}
