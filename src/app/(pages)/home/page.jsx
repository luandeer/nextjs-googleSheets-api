"use client";

import React from "react";
import Image from "next/image";
import portada from "../../../../public/image/sonqu.png";
import "./estilos.scss";
import Button from "@/components/button/Button";

import { LuHeartHandshake } from "react-icons/lu";
import { TbHandClick } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";
import { BiHappyHeartEyes } from "react-icons/bi";

import { useRouter } from "next/navigation";
import Ganadores from "@/components/ganadores/Ganadores";

import Head from "next/head";

const page = () => {
  const router = useRouter();

  return (
    <section id="home">
      <div className="container-home-1">
        <div className="container-1-texto">
          <div className="texto-titulo-home">
            <h1>¡Únete a la gran comunidad de SONQU</h1>
            <LuHeartHandshake />
          </div>
          <div className="texto-button-home">
            <button>
              Suscríbete ya <TbHandClick />
            </button>
            <button>
              Cómo unirme <FaQuestionCircle />
            </button>
          </div>
        </div>
        <Image src={portada} alt="foto de sonqu" priority/>
      </div>

      <div className="container-home-2">
        <p className="home-2-texto">
          Sé parte de este nuevo espacio web de SONQU y aprovecha nuestros
          beneficios exclusivos por tan solo S/ 8.50 al mes.
        </p>
        <Button
          color="var(--color-text)"
          nombre="Ver beneficios"
          colorFondo="var(--color-3)"
          icono={<BiHappyHeartEyes />}
        />
      </div>

      <div className="container-home-3">
        <h1>Nuestros Ganadores</h1>
          <Ganadores/>
      </div>
    </section>
  );
};

export default page;
