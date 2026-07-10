interface ParrafoProps {
  contenido: string;
  fuente?: string;
  tamano?: string;
  color?: string;
}

export default function Parrafo({ 
  contenido, 
  fuente = 'font-sans', 
  tamano = 'text-base', 
  color = 'text-gray-700' 
}: ParrafoProps) {
  return (
    <p className={`${fuente} ${tamano} ${color} leading-relaxed my-2`}>
      {contenido}
    </p>
  );
}