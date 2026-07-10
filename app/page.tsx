import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Imagen from "./components/Imagen";
import Contador from "./components/Contador";
import ImagenCambiante from "./components/ImagenCambiante";
import CambiarColorFondo from "./components/CambiarColorFondo";
import BotonToast from "./components/BotonToast";
import BotonModal from "./components/BotonModal";
import Carrusel from "./components/Carrusel";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-10'>
      <Titulo 
        texto="Prueba de componente Titulo" 
        fuente="font-serif" 
        tamano="text-4xl" 
        color="text-white" 
      />
      
      <Parrafo 
        contenido="Prueba de componente Parrafo" 
        fuente="font-mono" 
        tamano="text-lg" 
        color="text-gray-400" 
      />
      
      <Imagen 
        src="/imgs/SoftLand.jpg"
        alt="SoftLand" 
        tamanoBorde="rounded-3xl"
        altura="h-80"
        ancho="w-100"
        colorSombra="shadow-lg"
      />
      <Contador />
      <ImagenCambiante />
      <CambiarColorFondo />
      <BotonToast />
      <BotonModal />
      <Carrusel />
    </div>
  );
}
