import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Router, useRouter, useLocation } from "wouter";

export default function App(props) {
    const router = useRouter();
    const [parentLocation] = useLocation();
    const nestedBase = `${router.base}`;
    if (!parentLocation.startsWith(nestedBase)) return null;
    return (
        <div className="flex">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5">
                <div className="p-5">
                    <Router base={nestedBase} key={nestedBase}>
                        {props.children}
                    </Router>
                </div>
            </div>
        </div>
    );
}
