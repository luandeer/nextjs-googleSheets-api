import React from "react";
import Link from "next/link";

import styles from "./estilosNav.module.css"

const page = () => {
    return (
        <div >
            <ul className={styles.ul}>
                <li><Link  href="/"  className={styles.link}>Inicio</Link></li>
                <li>
                    <Link  href="/subscribe" className={styles.link}>Suscríbete</Link>
                </li>
                <li>
                    <Link  href="/beneficios" className={styles.link}>Beneficios</Link>
                </li>
            </ul>
        </div>
    );
};

export default page;
