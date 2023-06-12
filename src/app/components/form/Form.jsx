"use client";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitHandler(data) {
    console.log(data);
    
    const res = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Accept": "application/json",
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
      console.error(
        "La solicitud no se completó correctamente."
      );
    }
  }


  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="fechaDate">Fecha</label>
        <input
          id="fechaDate"
          type="date"
          name="fecha"
          {...register("fecha", { required: "elija una fecha" })}
        />
        {errors.fecha && errors.fecha.message}
      </div>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="nombre"
          {...register("nombre", { required: "digite su nombre" })}
        />
        {errors.nombre && errors.nombre.message}
      </div>
      <div>
        <label htmlFor="cel">Celular</label>
        <input
          id="cel"
          type="_tel_"
          name="celular"
          {...register("celular", { required: "escriba su numero de celular" })}
        />
        {errors.celular && errors.celular.message}
      </div>
      <div>
        <label htmlFor="parrafo">Mensaje</label>
        <textarea
          id="parrafo"
          type="text"
          name="mensaje"
          placeholder="Tu Mensaje"
          {...register("mensaje", { required: "escriba su mensaje" })}
        ></textarea>
        {errors.mensaje && errors.mensaje.message}
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default page;
