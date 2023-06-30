import React from "react";
import Nav from "@/components/nav/Nav";
import "./estilos.scss";
import Image from "next/image";
import logo from "../../../public/image/logo.png";
import Link from "next/link";
import Button from "../button/Button";
import { BsWhatsapp } from "react-icons/bs";
const Header = () => {
    return (
        <div className="header">
            <Link href="/">
                <Image className="img" src={logo} alt="Logo de Sonqu" priority />
            </Link>
            <div className="header-left">
                <Nav />
                <Button
                    color="var(--color-text)"
                    nombre="Contáctame"
                    colorFondo="var(--color-4)"
                    icono={<BsWhatsapp />}
                />

            </div>

        </div>
    );
};

export default Header;
