import React from 'react'
import "./estilos.scss";
const Descripcion = (props) => {
    const { descripcion } = props.parrafo;
  return (
    <li className="lista-descripcion">{descripcion}</li>
  )
}

export default Descripcion