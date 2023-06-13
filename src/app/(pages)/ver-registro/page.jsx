"use client"
import React from "react";
import Prueba from "@/components/prueba/Prueba";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return (
        <>
            <Prueba />
            <button onClick={() => router.push("/")}>
                Regresar
            </button>
        </>
    );
};

export default page;
