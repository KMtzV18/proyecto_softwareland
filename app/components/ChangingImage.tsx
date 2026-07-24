"use client";
import { useState } from "react";

export default function ChangingImage() {
    const imagenes: string[] = ["/imgs/SoftLand.jpg", "/imgs/itsur.jpg"];
    const [imagen, setImagen] = useState<string>(imagenes[0]);

    const siguienteImagen = (): void => {
        if (imagen === imagenes[0]) {
            setImagen(imagenes[1]);
        } else {
            setImagen(imagenes[0]);
        }
    };

    return (
        <div>
            <img src={imagen} alt="Imagen" height={250} width={250}/>
            <button 
                onClick={siguienteImagen} 
                className="m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded"
            >
                Cambiar imagen
            </button>
        </div>
    );
}
