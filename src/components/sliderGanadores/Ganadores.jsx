import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Paginacion from "../paginacion/Paginacion";
import "./estilos.scss"
import MoonLoader from "react-spinners/MoonLoader";
const Ganadores = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState();
    const [loading, setLoading] = useState(true);
    const maximo = Math.ceil(imageUrls.length / porPagina);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/ganadores");

                if (response.ok) {
                    const data = await response.json();
                    setImageUrls(data.urls);
                } else {
                    console.error("Error en la solicitud:", response.status);
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
                setLoading(false); // Establecer el estado de carga en falso independientemente del resultado
              
        };

        fetchData();
    }, []);

    const handleResize = () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth <= 768) {
          setPorPagina(2);
        } else {
          setPorPagina(4);
        }
      };
    
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className="container-imagenes">
            {loading ? (
                <div className="loading-imagenes">
                    <MoonLoader   size={40} color="#f1404e" />
                </div>
      ) : (
        <>
          <div className="container-imagenes-ganadores">
            {imageUrls
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((imageUrl, index) => (
                <div className="image-individual" key={index}>
                  <Image
                    width={300}
                    height={300}
                    src={imageUrl}
                    alt={`Imagen ${index}`}
                    priority
                  />
                </div>
              ))}
          </div>
          <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </>
      )}
        </div>
    );
};

export default Ganadores;
