interface TituloProps {
  texto: string;
  fuente?: string;
  tamano?: string;
  color?: string;
}

export default function Titulo({ 
  texto, 
  fuente = 'font-sans', 
  tamano = 'text-3xl', 
  color = 'text-black',
}: TituloProps) {
  return (
    <h1 className={`${fuente} ${tamano} ${color} font-bold my-4`}>
      {texto}
    </h1>
  );
}