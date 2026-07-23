"use client";
import { useState } from "react";
import Titulo from "../components/Titulo";
import Formulario from "../components/Formulario";
import TablaFormulario, { UserRecord } from "../components/TablaFormulario";

export default function NewPage() {
  const [records, setRecords] = useState<UserRecord[]>([]);

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
      <Titulo texto="Formulario de registro" fuente="font-serif" tamano="text-4xl" color="text-white" />
      <Formulario onSave={handleSave} />
      <TablaFormulario 
        records={records} 
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}