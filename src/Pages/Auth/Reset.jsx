import React from 'react'

export default function Reset() {
    return (
        <>
            <h1 className="font-medium text-lg mb-5">Reset Password</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-5">
                    <label htmlFor="email" className="inline-block mb-1 font-medium text-gray-600 text-sm">Email</label>
                    <input type="text" name="email" id="email" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="inline-block mb-1 font-medium text-gray-600 text-sm">New Password</label>
                    <input type="password" name="password" id="password" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="inline-block mb-1 font-medium text-gray-600 text-sm">Confirm Password</label>
                    <input type="password" name="password" id="password" className="w-full rounded-xl form-text border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 transition duration-200 ease-in" />
                </div>
                <button className="text-white px-5 py-2.5 rounded-xl font-medium focus:outline-none focus:ring focus:ring-blue-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 transition duration-200">
                    Reset Password
                </button>
            </form>
        </>
    )
}
