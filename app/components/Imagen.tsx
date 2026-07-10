interface ImagenProps {
  src: string;
  alt: string;
  tamanoBorde?: string;
  altura?: string;
  ancho?: string;
  colorSombra?: string;
}

export default function Imagen({ 
  src, 
  alt, 
  tamanoBorde = 'rounded-lg', 
  altura = 'h-80', 
  ancho = 'w-100',
  colorSombra = 'shadow-lg'
}: ImagenProps) {
  return (
    
    <div className={`my-4 overflow-hidden inline-block ${tamanoBorde} ${altura} ${ancho} ${colorSombra}`}>
      <img 
        src={src} 
        alt={alt} 
        className="object-cover w-full h-full"
      />
    </div>
  );
}