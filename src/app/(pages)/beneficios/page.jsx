"use client";

import React from "react";
import Image from "next/image";
import portada from "../../../../public/image/sonqu4.png";
import logo from "../../../../public/image/logo.png";
import { FaPeoplePulling } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import { useRouter } from "next/navigation";
import Head from "next/head";

import Beneficios from "@/components/beneficios/Beneficios";
import Button from "@/components/button/Button";
import "./estilos.scss";

const page = () => {
  const router = useRouter();

  const beneficios = [
    {
      img: "/image/beneficio1.png",
      titulo: "Premios cada mes",
      descripcion:
        "Sortearemos diversos premios como microondas, lavadoras, licuadoras y muchos más productos.",
    },
    {
      img: "/image/beneficio2.png",
      titulo: "Cupón de descuento exclusivo",
      descripcion:
        "Tendrás un descuento especial en productos de Quality Products",
    },
    {
      img: "/image/beneficio3.png",
      titulo: "Dos clases en vivo",
      descripcion: "Para todos los colaboradores y suscriptores.",
    },
    {
      img: "/image/beneficio4.png",
      titulo: "Recomendarás recetas",
      descripcion:
        "Podrás grabarte sugeriendo una receta y apareceras en el próximo video si deseas.",
    },
    {
      img: "/image/beneficio5.png",
      titulo: "Contribuirás a las donaciones de caridad",
      descripcion:
        "Parte del dinero de tu suscripción será donada o utilizada para realizar ayuda social.",
    },
  ];

  return (
    <section>
      <Head>
        {/**<link rel="preload" href="../../public/image/logo.png" as="image" />
            <link rel="preload" href="../../public/image/portadaInicio.jpg" as="image" />
            <link rel="preload" href="../../public/image/sonqu3.png" as="image" /> */}
      </Head>
      <div className="container-beneficios-1">
        <Image
          src="/image/banner2.jpg"
          alt="portada"
          width={1024}
          height={600}
          priority
        />
      </div>
      <div className="container-beneficios-2">
        <h1>Beneficios del suscriptor:</h1>
        <div className="bloque-beneficios">
          {beneficios.map((beneficio, index) => {
            return <Beneficios contenedor={beneficio} key={index} />;
          })}
        </div>
        <Button
          color="var(--color-text)"
          nombre="¡Únete YA, a nuestra comunidad!"
          colorFondo="var(--color-3)"
          icono={<MdEmojiPeople />}
        />
      </div>
    </section>
  );
};

export default page;
