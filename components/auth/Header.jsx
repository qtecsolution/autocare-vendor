/* eslint-disable no-unused-expressions */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isLinkActive = (href) => (pathname === href ? 'active' : '');
    function isLoginActive() {
        console.log("pathname:",pathname);
        if(pathname==='/signup' || pathname === '' || pathname ==='/'|| pathname != '/login'){
            return 'active';
        }
        return '';
     };
    return (
        <header className="header-section">
            <div className="container">
                <div className="header-section-inner d-flex align-items-center justify-content-between gap-4">
                    <div className="logo">
                        <Link href="./login">
                            <img src="./assets/images/Logo-2.png" alt="logo" />
                        </Link>
                    </div>

                    <ul className="header-button list-unstyled d-flex align-items-center gap-3">
                        <li>
                            <Link className={`login-btn ${isLoginActive()}`} href="/login">Login</Link>
                        </li>

                        <li>
                            <Link className={`signUp-btn ${isLinkActive('/login')}`} href="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
