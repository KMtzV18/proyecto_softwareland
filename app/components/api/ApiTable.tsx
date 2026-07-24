"use client";
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ApiTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [error, setError] = useState<string | null>(null);


  const fetchProducts = async (currentLimit: number) => {
    setError(null);
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${currentLimit}`);
      if (!response.ok) {
        throw new Error(`Error en la petición HTTP: status ${response.status}`);
      }
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error al obtener los productos.");
      }
    }
  };

  useEffect(() => {
    fetchProducts(limit);
  }, []);

  const handleLoadMore = () => {
    const nextLimit = limit + 5;
    setLimit(nextLimit);
    fetchProducts(nextLimit);
  };
  const handleLoadLess = () => {
    setLimit(5);
    fetchProducts(5);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 mt-6 text-center text-gray-900 dark:text-white">
        Tabla de Productos
      </h1>

      {error && (
        <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
          <p>{error}</p>
        </div>
      )}

      <div className="w-full overflow-x-auto rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell className="w-12 text-center">ID</TableHeadCell>
              <TableHeadCell className="w-20 text-center">Imagen</TableHeadCell>
              <TableHeadCell>Título</TableHeadCell>
              <TableHeadCell className="w-24 text-right">Precio</TableHeadCell>
              <TableHeadCell className="w-32">Categoría</TableHeadCell>
              <TableHeadCell className="max-w-xs">Descripción</TableHeadCell>
              <TableHeadCell className="w-28 text-center">Rating</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {products.map((product) => (
              <TableRow
                key={product.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <TableCell className="font-bold text-gray-300 text-center">
                  {product.id}
                </TableCell>

                <TableCell className="p-2 text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white p-1 rounded-md border border-gray-100 dark:border-gray-700">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </TableCell>

                <TableCell className="font-semibold text-gray-300 max-w-xs">
                  {product.title}
                </TableCell>

                <TableCell className="font-bold text-gray-300 text-right whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </TableCell>

                <TableCell className="capitalize text-xs font-medium text-gray-300 whitespace-nowrap">
                  <span className="px-2 py-1">
                    {product.category}
                  </span>
                </TableCell>

                <TableCell className="text-xs text-gray-300 max-w-xs truncate">
                  {product.description}
                </TableCell>

                <TableCell className="text-center whitespace-nowrap">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
                      <FontAwesomeIcon icon={faStar} />
                      <span>{product.rating?.rate ?? "N/A"}</span>
                    </div>
                    <span className="text-[10px] text-gray-300">
                      ({product.rating?.count ?? 0} votos)
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        {limit < 20 ? (
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Ver mas</span>
          </button>
        ) : (
          <button
            onClick={handleLoadLess}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow"
          >
            <FontAwesomeIcon icon={faMinus} />
            <span>Ver menos</span>
          </button>
        )}
        
      </div>
    </div>
  );
}