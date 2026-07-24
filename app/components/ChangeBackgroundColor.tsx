"use client";
import { useState, useEffect } from "react";

export default function CambiarColorFondo() {
    const colores: string[] = ["black", "red", "green", "blue", "yellow", "white"];
    const [color, setColor] = useState<string>(colores[0]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.style.background = color;
        }
    }, [color]);

    const siguienteColor = (): void => {
        let siguiente = colores.indexOf(color);
        if (siguiente === colores.length - 1) {
            siguiente = 0;
        } else {
            siguiente = siguiente + 1;
        }
        setColor(colores[siguiente]);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button onClick={siguienteColor} className="m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors">
                Cambiar color del fondo del sitio
            </button>
        </div>
    );
}