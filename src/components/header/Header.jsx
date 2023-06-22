import React from "react";
import Nav from "@/components/nav/Nav";
import "./estilos.scss";
import Image from "next/image";
import logo from "../../../public/image/logo.png";
import Link from "next/link";

const Header = () => {
    return (
        <div className="header">
            <Link href="/" >
                <Image
                    className="img"
                    src={logo}
                    alt="Logo de Sonqu"
                    priority />
            </Link>
            <Nav />
        </div>
    );
};

export default Header;
