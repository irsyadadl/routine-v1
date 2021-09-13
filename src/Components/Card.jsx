import React from 'react';

function Title({ children }) {
    return (
        <div className="font-semibold">{children}</div>
    );
}

function Subtitle({ children }) {
    return (
        <div className="text-xs text-gray-500">
            {children}
        </div>
    );
}

function Header({ children }) {
    return (
        <div className="border-b px-5 py-4">
            {children}
        </div>
    );
}

function Body({ children }) {
    return (
        <div className="px-5 py-4">
            {children}
        </div>
    );
}


function Card({ children }) {
    return (
        <div className="border rounded-xl overflow-hidden bg-white">
            {children}
        </div>
    );
}


Card.Header = Header;
Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Subtitle;

export default Card;
