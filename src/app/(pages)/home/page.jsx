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
import { GiPartyPopper } from "react-icons/gi";
import { LuPartyPopper } from "react-icons/lu";
import { TbZoomQuestion } from "react-icons/tb";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { AiTwotoneTrophy } from "react-icons/ai";

import { useRouter } from "next/navigation";
import Ganadores from "@/components/sliderGanadores/Ganadores";

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
        <Image src={portada} alt="foto de sonqu" priority />
      </div>

      <div className="container-home-2">
        <div className="home-2-titulo">
          <h1>¿Qué encontrarás Aquí?</h1>
          <TbZoomQuestion />
        </div>

        <p className="home-2-texto">
          Muchos beneficios exclusivos por tan solo S/ 8.50 al mes. Al
          convertirte en suscriptor, podrás ganar increíbles premios cada mes.
          Además, parte de tu suscripción será donada o utilizada para realizar
          ayuda social. Pero eso no es todo, también disfrutarás de muchos otros
          beneficios. ¡Descubre cuáles son pulsando el botón!
        </p>

        <Button
          color="var(--color-text)"
          nombre="Ver beneficios"
          colorFondo="var(--color-3)"
          icono={<BiHappyHeartEyes />}
        />

      </div>

      <div className="container-home-4">
      <div className="home-4-titulo">
          <AiTwotoneTrophy />
          <h1>Premios del mes de Julio</h1>
          <BsFillBalloonHeartFill />
        </div>
      <iframe
          className="video"
          src="https://www.youtube.com/embed/S8HDfxBSa34"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container-home-3">
        <div className="home-3-titulo">
          <LuPartyPopper />
          <h1>Nuestros Ganadores</h1>
          <GiPartyPopper />
        </div>

        <Ganadores />
      </div>
    </section>
  );
};

export default page;
