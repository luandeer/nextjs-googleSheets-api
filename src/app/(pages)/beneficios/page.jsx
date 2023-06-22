"use client";

import React from "react";
import Image from "next/image";
import portada from "../../../../public/image/sonqu4.png";
import logo from "../../../../public/image/logo.png";
import { LuHeartHandshake } from "react-icons/lu";

import { useRouter } from "next/navigation";
import Head from 'next/head';

const page = () => {
  const router = useRouter();

  return (
    
    <section >
      <Head>
            <link rel="preload" href="../../public/image/logo.png" as="image" />
            <link rel="preload" href="../../public/image/portadaInicio.jpg" as="image" />
            <link rel="preload" href="../../public/image/sonqu3.png" as="image" />
      </Head>
      <Image
  
        src={portada}
        alt="Logo de Sonqu"
        width="auto"
        height="auto"
        priority
      />
      <div >
        <Image
         
          src={logo}
          width="auto"
          height="auto"
          alt="Logo de Sonqu"
          priority
        />
        <div >
          <div >
            <h1>¡Bienvenidos a este espacio web!</h1>
            <LuHeartHandshake  />
          </div>
          <p>Sé parte de la increíble comunidad de sonqu.</p>
          <button
            onClick={() => router.push("/ver-inicio")}
            
          >
            Únete ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
