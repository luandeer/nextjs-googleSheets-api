import React from "react";
import "./estilos.scss";
import Image from "next/image";
const Tarjetas = (props) => {
  const { img, numeroCuenta, descripcion } = props.imagen;
  return (
    <div className="contenedor-tarjeta">
      <Image
        src={img}
        width={300}
        height={300}
        alt={`Imagen ${numeroCuenta}`}
        priority
      />

      <h1>{descripcion}</h1>
      <p>{numeroCuenta}</p>
    </div>
  );
};

export default Tarjetas;
