import React from 'react'
import { Link } from 'wouter';
import Hero from '../Components/Hero';

export default function Home() {
    return (
        <>
            <Hero>
                <div className="flex-1">
                    <h1 className="font-sans text-4xl font-semibold text-gray-800 mb-4">Lorem ipsum dolor sit amet.</h1>
                    <div className="leading-relaxed text-xl text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae, in eius deleniti eaque dolor? Sed, repellendus ullam eum tempora, adipisci quo consequuntur voluptatibus neque officiis distinctio veritatis ipsa aut?
                    </div>
                </div>
                <div>
                    <Link className="shadow bg-white hover:from-white rounded-xl px-5 py-3 inline-flex font-medium" href="">Getting Started</Link>
                </div>
            </Hero>
            <div className="container mx-auto px-4">
                Home
            </div>
        </>
    )
}
