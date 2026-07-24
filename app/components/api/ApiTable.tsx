"use client";
import { useState, useEffect } from "react";

export default function ApiTable() {
    return (
        <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-2xl font-bold mb-4 mt-10 flex justify-center">Consultar Usuarios</h1>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mb-3 cursor-pointer"
            >
                Consultar Todos los Usuarios
            </button>
        </div>
    );
}