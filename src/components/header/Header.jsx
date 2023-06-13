import React from "react";
import Nav from "@/components/nav/Nav";
import styles from "./estilos.module.css";
import Image from "next/image";
import logo from "../../../public/image/logo.png";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href="/" >
                <Image
                    className={styles.img}
                    src={logo}
                    alt="Logo de Sonqu"
                    priority />
            </Link>
            <Nav />
        </div>
    );
};

export default Header;
