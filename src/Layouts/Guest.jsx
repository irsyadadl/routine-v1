import React from 'react';
import { Route, Router, Link, useRoute, useRouter, useLocation } from "wouter";

export default function Guest(props) {

    const router = useRouter();
    const [parentLocation] = useLocation();
    const nestedBase = `${router.base}`;
    if (!parentLocation.startsWith(nestedBase)) return null;
    return (
        <div className="bg-red-500 min-h-screen">
            <Router base={nestedBase} key={nestedBase}>
                {props.children}
            </Router>
        </div>
    );
}
