"use client";
import { useState } from "react";
import { Card,Label } from "flowbite-react";

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export default function ApiButton() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    var id = Math.floor(Math.random() * 10) + 1;

    const ApiUser = async () => {
        const request = await fetch(`https://fakestoreapi.com/users/${id}`);
        const user = await request.json();
        setUser(user);
        setVisible(true);
    }

    return (
        <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-2xl font-bold mb-4 mt-10 flex justify-center">Consultar un Usuario</h1>
            <button 
                onClick={ApiUser}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mb-3 cursor-pointer"
            >
                Consultar Usuario
            </button>


        {visible && (
            <div className="border border-gray-200 rounded-lg p-4 w-100">
            <Card href="#" className="max-w-lg">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {user?.username}
                </h5>
                <Label>Email:</Label>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {user?.email}
                </p>
                <Label>Password:</Label>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {user?.password}
                </p>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded mb-3 cursor-pointer"
                    onClick={() => setVisible(!visible)}
                >
                    Cerrar
                </button>
            </Card>
        </div>
        )}
            
        </div>
    );
}
