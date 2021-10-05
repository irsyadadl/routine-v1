import React from 'react';
import { Link, useLocation, useRoute } from 'wouter';

const Item = ({ href, children }) => {
    const [isActive] = useRoute(href);
    return (
        <Link className={`${isActive ? 'text-blue-500' : ''} block w-full mt-4`} href={href}>{children}</Link>
    );
};
const Dropdown = ({ base, icon, label, children }) => {
    const [location] = useLocation();
    return (
        <li>
            <div className="relative overflow-hidden dark:text-white">
                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                <div className="flex items-center gap-x-4 pointer-events-none">
                    {icon && <span className="pointer-events-none">{icon}</span>}
                    {label}
                </div>
                <div className="absolute top-0 right-0 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="ml-8 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                    {children}
                </div>
            </div>
        </li>
    );
};

Dropdown.Item = Item;

export default Dropdown;
