import { Router, useLocation, useRouter } from "wouter";
import React from 'react';

export default function NestedRoutes(props) {
    const router = useRouter();
    const [parentLocation] = useLocation();
    const nestedBase = `${router.base}${props.base}`;
    return (
        <Router base={nestedBase} key={nestedBase}>
            {props.children}
        </Router>
    );
}
