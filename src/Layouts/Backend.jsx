import React from 'react';
import Sidebar from '../Components/Sidebar';
export default function Backend(props) {
    return (
        <div className="flex">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5">
                <div className="p-5">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
