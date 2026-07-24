"use client";

import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import ImageComponent from "./components/ImageComponent";
import Counter from "./components/Counter";
import ChangingImage from "./components/ChangingImage";
import ChangeBackgroundColor from "./components/ChangeBackgroundColor";
import ToastButton from "./components/ToastButton";
import ModalButton from "./components/ModalButton";
import CarouselComponent from "./components/CarouselComponent";
import FlowbiteTable from "./components/FlowbiteTable";
import Datos from "../data/datos.json";
import { useRouter } from "next/navigation";
import ApiButton from "./components/api/ApiButton";
import ApiTable from "./components/api/ApiTable";


export default function Home() {
  const router = useRouter();
  
  const cambiarPagina = (): void => {
    router.push("/newPage");
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-10'>
      <Title 
        texto="Prueba de componente Titulo" 
        fuente="font-serif" 
        tamano="text-4xl" 
        color="text-white" 
      />

      <button onClick={cambiarPagina} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mb-3 cursor-pointer">
        Cambiar pagina
      </button>

      {/* <Title
        texto="Segundo texto"
        fuente="font-sans"
        tamano="text-2xl"
        color="text-blue-500"
      />
      
      <Paragraph 
        contenido="Prueba de componente Parrafo" 
        fuente="font-mono" 
        tamano="text-lg" 
        color="text-gray-400" 
      />
      
      <ImageComponent 
        src="/imgs/SoftLand.jpg"
        alt="SoftLand" 
        tamanoBorde="rounded-3xl"
        altura="h-80"
        ancho="w-100"
        colorSombra="shadow-lg"
      />
      <Counter />
      <ChangingImage />
      <ChangeBackgroundColor />
      <ToastButton />
      <ModalButton />
      <CarouselComponent />
      <FlowbiteTable datos={Datos}/> */}
      <ApiButton />
      <ApiTable />
    </div>
  );
}