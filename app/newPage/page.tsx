import Titulo from "../components/Titulo";
import Formulario from "../components/Formulario";

export default function NewPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      <Titulo texto="Formulario de registro" fuente="font-serif" tamano="text-4xl" color="text-white" />
      <Formulario />
    </div>
  );
}