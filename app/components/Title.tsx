interface TitleProps {
  texto: string;
  fuente?: string;
  tamano?: string;
  color?: string;
}

export default function Title({ 
  texto, 
  fuente = 'font-sans', 
  tamano = 'text-3xl', 
  color = 'text-black',
}: TitleProps) {
  return (
    <h1 className={`${fuente} ${tamano} ${color} font-bold my-4`}>
      {texto}
    </h1>
  );
}
