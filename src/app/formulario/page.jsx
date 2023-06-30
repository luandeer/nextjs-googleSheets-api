"use client";
import React from "react";
import { useForm } from "react-hook-form";
import "./estilos.scss"

import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = ({ handleGuardarDatos }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [envioRealizado, setEnvioRealizado] = useState(false);


  const { createTask } = useTasks()
  const router = useRouter()

  const [medioPago, setMedioPago] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    setCurrentDateTime(formattedDateTime);
  }, []);


  async function submitHandler(data) {
    if (!envioRealizado) {
      setEnvioRealizado(true);
    console.log(data);
    data.medioPago = medioPago;
    data.fecha = currentDateTime;
    createTask(data.fecha, data.nombre, data.identidad, data.celular, data.medioPago, data.mensaje, data.extraDni)
    //router.push('/ver-registro')
    const res = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const contenido = await res.json();
      console.log(contenido);
      console.log("La solicitud fue exitosa");
      reset();
    } else {
      // Manejar el caso de respuesta no exitosa
      console.error("La solicitud no se completó correctamente.");
    }

    handleGuardarDatos();
    setEnvioRealizado(false);
  }
  }

  return (
    <>
      <h1>Registra tus Datos Aqui</h1>
      <form className="formulario" onSubmit={handleSubmit(submitHandler)} autoComplete="off">
        <div>
          <label htmlFor="fechaDate">Fecha de Registro:</label>
          <input
            disabled
            id="fechaDate"
            type="datetime-local"
            value={currentDateTime}
            onChange={(e) => setCurrentDateTime(e.target.value)}
            {...register("fecha")}
          />

        </div>
        <div>
          <label htmlFor="name">Nombre y Apellido completo:</label>
          <input
            id="name"
            type="text"
            placeholder="Ej: Pepe Tito Gonzales Camacho"
            {...register("nombre", { required: "nombre y apellido requerido." })}
          />
          {errors.nombre && errors.nombre.message}
        </div>

        <div>
          <label htmlFor="ident">DNI/Carné extranjería:</label>
          <input
            id="ident"
            type="text"
            placeholder="Escribe tu dni"
            {...register("identidad", { required: "dni requerido." })}
          />
          {errors.identidad && errors.identidad.message}
        </div>

        <div>
          <label htmlFor="cel">Número de celular:</label>
          <input
            id="cel"
            type="tel"
            placeholder="Ej: 938091040"
            {...register("celular", { required: "número de celular requerido" })}
          />
          {errors.celular && errors.celular.message}
        </div>
        <div>
          <label htmlFor="mPagos">Especifica el medio que usó para realizar el pago(yape/plin/transferencia):</label>
          <select 
          id="mPagos"
          {...register("medioPago", { required: "elija el medio de pago que usó" })} 
          value={medioPago}
          onChange={(e) => setMedioPago(e.target.value)}
          >
            <option value="" disabled hidden>Seleccionar</option>
            <option value="Yape" >Yape</option>
            <option value="Plin">Plin</option>
            <option value="BCP">BCP</option>
            <option value="Banco de la Nación" >Banco de la Nación</option>
          </select>
          {errors.medioPago && errors.medioPago.message}
          
        </div>
        <div>
          <label htmlFor="parrafo">¿Qué te gustaría que sorteáramos mas adelante?
          </label>
          <textarea
            id="parrafo"
            type="text"
            placeholder="Escribe el premio que quisieras"
            {...register("mensaje", { required: "premio requerido." })}
          ></textarea>
          {errors.mensaje && errors.mensaje.message}
        </div>

        <div>
          <label htmlFor="extraIdent">DNI de la persona que te recomendó Sonqu(opcional):</label>
          <input
            id="extraIdent"
            type="text"
            placeholder="Escribe el dni de tu amigo"
            {...register("extraDni")}
          />
        </div>

        <div>
          <button  id="boton-formulario" type="submit" disabled={envioRealizado}>{envioRealizado ? "Enviando..." : "Enviar"}</button>
        </div>
      </form>
    </>
  );
};

export default page;
