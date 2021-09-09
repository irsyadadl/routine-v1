import React from 'react';
import { Link, useRoute } from 'wouter';

const Item = ({ href, children }) => {
    const [isActive] = useRoute(href);
    return (
        <li>
            <Link className={`${isActive ? 'text-blue-500' : ''}`} href={href}>{children}</Link>
        </li>
    );
};
const Dropdown = ({ icon, label, children }) => {
    const dropdown = (e) => {
        let el = e.target;
        el.getElementsByTagName('svg')[1].classList.add('rotate-90');
        let ns = el.nextSibling;
        let containHidden = ns.classList.contains('hidden');
        if (!containHidden) {
            ns.classList.add('hidden');
            el.getElementsByTagName('svg')[1].classList.remove('rotate-90');
        } else ns.classList.remove('hidden');
    };

    return (
        <li>
            <button onClick={dropdown} className="flex items-center justify-between w-full text-left focus:outline-none">
                <div className="flex items-center gap-x-4 pointer-events-none">
                    {icon && <span className="pointer-events-none">{icon}</span>}
                    {label}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            <ul className="ml-8 space-y-2 py-2 hidden animate-accordion overflow-hidden">
                {children}
            </ul>
        </li>
    );
};

Dropdown.Item = Item;

export default Dropdown;
