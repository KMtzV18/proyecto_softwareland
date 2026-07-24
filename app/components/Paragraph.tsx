interface ParagraphProps {
  contenido: string;
  fuente?: string;
  tamano?: string;
  color?: string;
}

export default function Paragraph({ 
  contenido, 
  fuente = 'font-sans', 
  tamano = 'text-base', 
  color = 'text-gray-700' 
}: ParagraphProps) {
  return (
    <p className={`${fuente} ${tamano} ${color} leading-relaxed my-2`}>
      {contenido}
    </p>
  );
}
