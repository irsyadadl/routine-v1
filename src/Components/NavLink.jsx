import React from 'react'
import { Link, useRoute } from 'wouter';
import useLocation from 'wouter/use-location';
export default function NavLink({href, children}) {
    const [isActive] = useRoute(href);
    return (
        <Link className={`border-b-2 px-1 py-5 text-gray-600 ${isActive ? 'border-blue-500 !text-gray-800' : 'border-transparent '}`} href={href}>
            {children}
        </Link>
    )
}
