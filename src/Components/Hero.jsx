import React from 'react';
import { Link } from 'wouter';
import Navbar from './Navbar';

export default function Hero({children}) {
    return (
        <div className="bg-gray-50 border-b shadow-sm mb-10">
            <Navbar />
            <div className="container mx-auto px-4">
                <div className="w-full lg:w-3/4">
                    <div className="py-20 flex flex-col h-[26rem] justify-between">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
