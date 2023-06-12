import React from "react";
import Link from "next/link";
const page = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/gola">Todos los platos</Link>
                </li>
                <li>
                    <Link href="/go">Pollos a la brasa</Link>
                </li>
                <li>
                    <Link href="/goa">Parrillas</Link>
                </li>
            </ul>
        </div>
    );
};

export default page;
