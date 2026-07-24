"use client";
import { useState } from "react";  

export default function Counter() {
    const [contador, setContador] = useState<number>(0);
    const buttonStyle = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mb-3';
    const sumar = (): void => {
        const x = contador;
        setContador(x + 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button 
                className={buttonStyle}
                onClick={sumar}
            >
                Aumentar
            </button>
        </div>
    );  
}
