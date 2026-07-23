import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModalEditar from "./ModalEditar";

export interface UserRecord {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  gender: string;
  role: string;
  comment: string;
  date: string;
}

export type Registro = UserRecord;

interface TablaFormularioProps {
  records?: UserRecord[];
  onDelete?: (index: number) => void;
  onEdit?: (index: number, editedRecord: UserRecord) => void;
}

export default function TablaFormulario({ records = [], onDelete, onEdit }: TablaFormularioProps) {
  const [passwordVisibility, setPasswordVisibility] = useState<Record<number, boolean>>({});
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<UserRecord>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    role: "",
    comment: "",
    date: "",
  });

  const togglePassword = (index: number) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleOpenEdit = (index: number, record: UserRecord) => {
    setEditIndex(index);
    setEditForm({ ...record });
    setShowEditModal(true);
  };

  const handleCloseEdit = () => {
    setShowEditModal(false);
    setEditIndex(null);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null && onEdit) {
      onEdit(editIndex, editForm);
    }
    handleCloseEdit();
  };

  return (
    <div className="w-full max-w-5xl mt-8 mx-auto px-4">
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell>Nombre Completo</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Contraseña</TableHeadCell>
            <TableHeadCell>Edad</TableHeadCell>
            <TableHeadCell>Sexo</TableHeadCell>
            <TableHeadCell>Rol</TableHeadCell>
            <TableHeadCell>Comentarios</TableHeadCell>
            <TableHeadCell>Fecha de Registro</TableHeadCell>
            <TableHeadCell className="text-center">Acciones</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {records.length === 0 ? (
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell colSpan={9} className="text-center text-gray-500 py-8 dark:text-gray-400">
                No hay registros guardados.
              </TableCell>
            </TableRow>
          ) : (
            records.map((record, index) => (
              <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-normal break-words font-medium text-gray-900 dark:text-white">
                  {record.firstName} {record.lastName}
                </TableCell>
                <TableCell className="break-all whitespace-normal dark:text-white">{record.email}</TableCell>
                <TableCell className="whitespace-normal dark:text-white">
                  <div className="flex items-center gap-2 justify-between max-w-[120px]">
                    <span>{passwordVisibility[index] ? record.password : "••••••••"}</span>
                    <button 
                      type="button" 
                      onClick={() => togglePassword(index)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none cursor-pointer"
                      title="Ver/Ocultar contraseña"
                    >
                      <FontAwesomeIcon icon={passwordVisibility[index] ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-center dark:text-white">{record.age}</TableCell>
                <TableCell className="text-center dark:text-white">{record.gender || "-"}</TableCell>
                <TableCell className="dark:text-white">{record.role || "-"}</TableCell>
                <TableCell className="max-w-xs truncate dark:text-white" title={record.comment}>
                  {record.comment}
                </TableCell>
                <TableCell className="text-center dark:text-white">{record.date}</TableCell>
                <TableCell className="text-center dark:text-white">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(index, record)}
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-1.5 rounded transition-colors cursor-pointer"
                      title="Editar registro"
                    >
                      <FontAwesomeIcon icon={faPencil} className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete && onDelete(index)}
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1.5 rounded transition-colors cursor-pointer"
                      title="Eliminar registro"
                    >
                      <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <ModalEditar
        showEditModal={showEditModal}
        onClose={handleCloseEdit}
        editForm={editForm}
        setEditForm={setEditForm}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
