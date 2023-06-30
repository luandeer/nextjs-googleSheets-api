import React from 'react'
import './estilos.scss'
const Button = (props) => {

    const botonEstilos = {
        backgroundColor: `${props.colorFondo}`,
        color: `${props.color}`,
        
    }

  return (
    <button  className='button-general' style={botonEstilos} >{props.nombre} {props.icono}</button>
   
  )
}

export default Button