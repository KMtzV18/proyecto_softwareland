"use client";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";

export default function ModalButton() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const mostrarModal = (): void => {
    setShowModal(true);
  };

  const ocultarModal = (): void => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center p-4">
      <button
        onClick={mostrarModal}
        className="m-2 bg-gray-600 hover:bg-gray-800 p-2 text-white font-bold rounded transition-colors cursor-pointer"
      >
        Mostrar modal
      </button>

      <Modal show={showModal} onClose={ocultarModal}>
        <ModalHeader className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-t-lg !p-5">
          Softwareland
        </ModalHeader>

        <ModalBody className="p-6 bg-gray-950">
          <div>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              Este es un modal
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>
        </ModalBody>

        <ModalFooter className="flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          <button onClick={ocultarModal}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded transition-colors cursor-pointer">
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
