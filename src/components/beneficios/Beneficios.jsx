import React from 'react'
import "./estilos.scss"
import Image from 'next/image';
const Beneficios = (props) => {
    const {img, titulo, descripcion} = props.contenedor;
  return (
    <div className='contenedor-beneficios'>
        <Image src={img} width={200}
        alt={titulo}
        height={200} priority/>
        <div className='beneficios-texto'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    </div>
  )
}

export default Beneficios