import React from 'react'
import App from '../Layouts/Backend';

export default function Home() {
    return (
        <div className="flex gap-x-1">
           <a className="border rounded-xl px-4 py-2 inline-flex" href="/">Home</a>
           <a className="border rounded-xl px-4 py-2 inline-flex" href="/about">About</a>
           <a className="border rounded-xl px-4 py-2 inline-flex" href="/dashboard">Dashboard</a>
           <a className="border rounded-xl px-4 py-2 inline-flex" href="/login">login</a>
        </div>
    )
}
