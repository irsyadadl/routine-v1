import React from 'react'

function Header({children}) {
    return (
        <div className="border-b px-5 py-4">
            {children}
        </div>
    )
}

function Card({ children }) {
    return (
        <div className="shadow rounded-xl overflow-hidden bg-white">
            <Header>
                <div className="font-semibold">Lorem ipsum dolor sit amet.</div>
                <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, esse.
                </div>
            </Header>
            <div className="px-5 py-4">
                {children}
            </div>
        </div>
    );
}


Card.Header = Header

export default Card;
