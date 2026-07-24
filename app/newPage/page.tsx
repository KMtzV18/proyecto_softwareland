"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Title from "../components/Title";
import Form from "../components/form/Form";
import FormTable, { UserRecord } from "../components/form/FormTable";

export default function NewPage() {
  const [records, setRecords] = useState<UserRecord[]>([]);
  const router = useRouter();
    
  const cambiarPagina = (): void => {
    router.push("/");
  };

  const handleSave = (newRecord: UserRecord) => {
    setRecords(prev => [...prev, newRecord]);
  };

  const handleDelete = (indexToDelete: number) => {
    setRecords(prev => prev.filter((_, i) => i !== indexToDelete));
  };

  const handleEdit = (indexToEdit: number, updatedRecord: UserRecord) => {
    setRecords(prev => prev.map((record, i) => i === indexToEdit ? updatedRecord : record));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      <button onClick={cambiarPagina} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mb-3 cursor-pointer">
        Cambiar pagina
      </button>
      <Title texto="Formulario de registro" fuente="font-serif" tamano="text-4xl" color="text-white" />
      <Form onSave={handleSave} />
      <FormTable 
        records={records} 
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}