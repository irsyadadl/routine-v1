import React from 'react';
export default function App(props) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {props.component}
        </div>
    );
}
