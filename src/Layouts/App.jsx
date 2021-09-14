import React from 'react'

export default function App({children}) {
    console.log('app layout');
    return (
        <div className="min-h-screen bg-blue-500">
            {children}
        </div>
    )
}
