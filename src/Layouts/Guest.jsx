import React from 'react';

export default function Guest(props) {
    return (
        <div className="bg-red-500 min-h-screen">
            {props.children}
        </div>
    );
}
