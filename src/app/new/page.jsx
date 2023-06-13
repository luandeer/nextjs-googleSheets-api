"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./estilos.module.css"

import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";

const page = () => {

  const {createTask} = useTasks()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitHandler(data) {
    console.log(data);
    createTask(data.fecha, data.nombre, data.celular, data.mensaje)
    router.push('/ver-registro')
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
  }

  return (
    <>
    <button className={styles.botonRegresar} onClick={() => router.push("/")}>Regresar</button>
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)} autoComplete="on">
      <div>
        <label htmlFor="fechaDate">Fecha</label>
        <input
          id="fechaDate"
          type="date"
          {...register("fecha", { required: "elija una fecha" })}
        />
        {errors.fecha && errors.fecha.message}
      </div>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          {...register("nombre", { required: "digite su nombre" })}
        />
        {errors.nombre && errors.nombre.message}
      </div>
      <div>
        <label htmlFor="cel">Celular</label>
        <input
          id="cel"
          type="_tel_"
          {...register("celular", { required: "escriba su numero de celular" })}
        />
        {errors.celular && errors.celular.message}
      </div>
      <div>
        <label htmlFor="parrafo">Mensaje</label>
        <textarea
          id="parrafo"
          type="text"
          placeholder="Tu Mensaje"
          {...register("mensaje", { required: "escriba su mensaje" })}
        ></textarea>
        {errors.mensaje && errors.mensaje.message}
      </div>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
    </>
  );
};

export default page;
