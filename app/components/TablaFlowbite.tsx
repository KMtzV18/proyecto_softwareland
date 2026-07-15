"use client";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLaptop, faShirt, faQuestion } from "@fortawesome/free-solid-svg-icons";
import ModalConImagen from "./ModalConImagen";


interface TablaProps{
    datos: Array<{
        producto: string,
        color: string,
        categoria: string, 
        precio: number,
        imagen: string
    }>;
}
export default function TablaFlowbite({datos}: TablaProps) {

  const obtenerIcono = (categoria: string) => {
    switch (categoria) {
      case "Electrónica":
        return faLaptop;
      case "Hogar":
        return faCoffee;
      case "Ropa":
      case "Calzado":
        return faShirt;
      default:
        return faQuestion;
    }
  };

    return (
        <>
         <Table hoverable>
         <TableHead>
           <TableRow>
             <TableHeadCell>Numeros</TableHeadCell>
             <TableHeadCell>Texto 1</TableHeadCell>
             <TableHeadCell>Texto 2</TableHeadCell>
             <TableHeadCell>Icono</TableHeadCell>
             <TableHeadCell>
               <span className="sr-only">Edit</span>
             </TableHeadCell>
           </TableRow>
         </TableHead>
         <TableBody className="divide-y">
         {datos.map((item, index) => (
          <TableRow  key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </TableCell>
            <TableCell>{item.producto}</TableCell>
            <TableCell>{item.categoria}</TableCell>
            <TableCell className="text-center"><FontAwesomeIcon icon={obtenerIcono(item.categoria)} /></TableCell>
            <TableCell className="text-center">
               <ModalConImagen src={item.imagen.toString()} alt={item.producto}/>
             </TableCell>
           </TableRow>
        ))}
         </TableBody>
        </Table>
        </>
  );
}
