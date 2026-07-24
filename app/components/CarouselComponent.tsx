"use client";
import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CarouselComponent() {
  const imagenes: string[] = [
    "/imgs/SoftLand.jpg",
    "/imgs/itsur.jpg",
    "/imgs/next.jpg",
    "/imgs/react.jpg",
    "/imgs/tailwind.jpg",
    "/imgs/typescript.jpg",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 h-96">
      <Carousel
        slideInterval={3000}
        /*flecha izquierda */
        leftControl={
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-yellow-400 hover:bg-black/50 transition-colors">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-xl text-green-700"
            />
          </div>
        }
        /* flecha derecha */
        rightControl={
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-xl text-green-700"
            />
          </div>
        }
      >
        {/* Diapositiva con texto */}
        {imagenes.map((imagen, index) => (
          <div
            className="relative w-full h-full bg-zinc-950 flex items-center justify-center"
            key={index}
          >
            {/* Texto centrado de forma absoluta */}

            <div className="p-4 text-center absolute top-0">
              <h2 className="text-2xl font-bold text-green-700 tracking-wide">
                Diapositiva {index + 1}
              </h2>
              <p className="text-sm text-yellow-300 font-medium mt-1">
                texto descriptivo
              </p>
            </div>

            <img
              src={imagen}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
