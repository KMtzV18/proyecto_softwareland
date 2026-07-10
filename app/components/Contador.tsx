"use client";
import { useState } from "react";  

export default function Contador() {
    const [contador, setContador] = useState<number>(0);

    const sumar = (): void => {
        const x = contador;
        setContador(x + 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mb-3" 
                onClick={sumar}
            >
                Aumentar
            </button>
        </div>
    );  
}