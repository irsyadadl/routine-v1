import React from 'react';
import { Link } from 'wouter';
import AppLogo from '../Components/AppLogo';

export default function Guest(props) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="sm:w-1/2 lg:w-1/3 w-full">
                <Link href="/" className="cursor-pointer">
                    <div className="text-center mb-8">
                        <AppLogo className="inline w-14 h-14" />
                    </div>
                </Link>
                <div className="p-6 sm:rounded-2xl bg-white sm:shadow-sm border-t border-b sm:border">
                    {props.component}
                </div>
            </div>
        </div>
    );
}
