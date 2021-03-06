import React from 'react';
import { Link, useRoute } from 'wouter';

export default function ItemLink({ icon, href, children }) {
    const [isActive] = useRoute(href);
    return (
        <li className="items-center flex gap-x-4">
            {icon && icon}
            <Link className={`${isActive ? 'text-blue-500' : ''} ${!icon && 'ml-8'}`} href={href}>{children}</Link>
        </li>
    );
}
