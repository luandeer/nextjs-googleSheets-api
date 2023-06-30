"use client";
import React from "react";
import "./estilos.scss";
import Descripcion from "@/components/descripcion/Descripcion";
import { BsWhatsapp } from "react-icons/bs";

import Tarjetas from "@/components/metodosPagos/Tarjetas";
import Form from "../../formulario/page";
import Link from "next/link";
import Button from "@/components/button/Button";
import ConfirmacionLista from "@/components/prueba/Prueba";
import MoonLoader from "react-spinners/MoonLoader";
import { useState } from "react";

const page = () => {
  const [datosGuardados, setDatosGuardados] = useState(false);
  const [mostrarLoading, setMostrarLoading] = useState(false);


  const handleGuardarDatos = () => {
    setMostrarLoading(true);

    // Simulación de una operación asincrónica para guardar los datos
    setTimeout(() => {
      setDatosGuardados(true);
      setMostrarLoading(false);
    }, 2000);
  };
 

  const tarjetas = [
    {
      img: "/image/yapePlin.png",
      descripcion: "Número de teléfono",
      numeroCuenta: "923 996 816",
    },
    {
      img: "/image/bancoNacion.jpg",
      descripcion: "Cuenta",
      numeroCuenta: "04 476 246135",
    },
    {
      img: "/image/bcp.jpg",
      descripcion: "Cuenta",
      numeroCuenta: "41070493470017",
    },
  ];

  const cajas = [
    {
      descripcion:
        "Suscríbete solo en 3 pasos: Realiza el pago y envia la captura al whatsapp y por último registra tus datos en el formulario.",
    },
    {
      descripcion: "El costo mensual de la suscripción es de S/. 8.50 soles. ",
    },
    {
      descripcion: "La suscripción dura un mes calendario. ",
    },
    {
      descripcion: "Los suscriptores pueden ganar una vez al mes como máximo. ",
    },
    {
      descripcion:
        "Los ganadores de cada sorteo, recibirán su premio asi no esten conectados. Todo será publicado.",
    },
    {
      descripcion: "Los datos deben ser registrados de manera correcta. ",
    },
    {
      descripcion:
        "Enviar la captura del pago(NECESARIO) al número de teléfono oficial(938 091 040). ",
    },
  ];

  return (
    <section>
      <div className="container-suscribete-1">
        <h1>Realiza el pago de s/8.50</h1>
        <p>Medios de pago (a nombre de Eric Raúl Layme Reginaldo)</p>
        <div className="suscribete-1-tarjetas">
          {tarjetas.map((tarjeta, position) => {
            return <Tarjetas imagen={tarjeta} key={position}></Tarjetas>;
          })}
        </div>
        <Button
          color="var(--color-text)"
          nombre="Enviar captura de pago"
          colorFondo="var(--color-4)"
          icono={<BsWhatsapp />}
        />
      </div>

      <div className="container-suscribete-2">
        
      {!datosGuardados && !mostrarLoading && (
        <Form handleGuardarDatos={handleGuardarDatos} />
      )}

      {mostrarLoading && <MoonLoader   size={40} color="#f1404e" />}

      {datosGuardados && <ConfirmacionLista />}
      </div>

      <div className="container-suscribete-3">
        <h1>Te dejo las recomendaciones que debes tener en cuenta: </h1>
        <ul>
          {cajas.map((caja, position) => {
            return <Descripcion parrafo={caja} key={position} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default page;
