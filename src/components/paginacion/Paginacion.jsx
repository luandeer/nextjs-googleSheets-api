import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./estilos.scss";

const Paginacion = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previusPage = () => {
    setInput(input - 1);
    setPagina(pagina - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const value = parseInt(e.target.value);
      let pagina;
  
      if (value >= 1 && value <= Math.ceil(maximo) && !isNaN(value)) {
        pagina = value;
      } else if (value < 1) {
        pagina = 1;
      } else {
        pagina = Math.ceil(maximo);
      }
  
      setPagina(pagina);
      setInput(pagina.toString());
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container-botones-slider">
      <button disabled={pagina === 1 || pagina < 1 } onClick={previusPage} className="previusPage">
        <BsFillArrowLeftCircleFill />
      </button>
      <input
       
        name="page"
        autoComplete="off"
        value={input}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <p>de {maximo}</p>
      <button disabled={pagina === maximo || pagina > maximo } onClick={nextPage} className="nextPage">
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};

export default Paginacion;
