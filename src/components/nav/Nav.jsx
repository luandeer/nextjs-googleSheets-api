"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./estilos.scss";
import { CgMenu } from 'react-icons/cg'
import { CgCloseO } from 'react-icons/cg'
import { usePathname } from 'next/navigation'


const page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname()

    
    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Suscríbete', href: '/subscribe' },
        { name: 'Beneficios', href: '/beneficios' },
    ];
    

    return (
        <nav>
            <div className="menu-escritorio">
                {links.map((link, index) => {
                    const isActive = pathname === link.href && (index > 0 || pathname === '/');
                    
                    return (
                        <Link
                            className={isActive  ? 'active' : 'noActive'}
                            href={link.href}
                            key={index}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            <div className="menu-movil">
                {isOpen === true ? (
                    <div className="menu-movil-links">
                        {links.map((link, index) => {
                        const isActive = pathname === link.href && (index > 0 || pathname === '/');
                        
                        return (
                            <Link
                                className={isActive  ? 'activeMovil' : ''}
                                href={link.href}
                                key={index}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    </div>
                ) : (
                    <></>
                )}
            </div>

            <div className="menu-icono">

                {isOpen === false ? (
                    <CgMenu onClick={() => setIsOpen(!isOpen)} />

                ) : (
                    <CgCloseO onClick={() => setIsOpen(!isOpen)} />
                )}
            </div>
        </nav>
    );
};

export default page;
