"use client";
import { useState } from "react";
import { Toast } from "flowbite-react";

export default function BotonToast() {

    const [visible, setVisible] = useState<boolean>(false);


    const mostrarToast = (): void => {
        setVisible(true);
        
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 relative">
            <button 
                onClick={mostrarToast} 
                className="m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors"
            >
                Mostrar toast
            </button>

        
            {visible && (
                <div className="fixed bottom-5 right-5">
                    <Toast className="!bg-blue-600 !text-white !shadow-2xl !rounded-xl">
                        <div className="ml-3 text-sm font-semibold">
                            Notificación importante de tu app
                        </div>
                    </Toast>
                </div>
            )}
        </div>
    );
}