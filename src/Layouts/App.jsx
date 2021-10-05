import React from 'react';
export default function App(props) {
    return (
        <div className="min-h-screen font-sans text-tiny bg-gray-100">
            {props.component}
        </div>
    );
}
