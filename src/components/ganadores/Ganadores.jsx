import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import './estilos.scss'
const Ganadores = () => {
    const [imageUrls, setImageUrls] = useState([]);

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
        };

        fetchData();
    }, []);

    return (
        <div className="contenedor-imagenes">
            {imageUrls.map((imageUrl, index) => (
                <Image
                    width={200}
                    height={300}
                    key={index}
                    src={imageUrl}
                    alt={`Imagen ${index}`}
                    priority
                />
            ))}
        </div>
    );
};

export default Ganadores;
