"use client";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import {Button, Checkbox, Label, TextInput, Datepicker, Radio, Select, Textarea } from "flowbite-react";


export default function Formulario() {

    const [fecha, setFecha] = useState<Date | null>(new Date());
    const [terminos, setTerminos] = useState(false);
    const [aviso, setAviso] = useState(false);
    const [sexo, setSexo] = useState("");
    const [rol, setRol] = useState("");
    const [comentario, setComentario] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [edad, setEdad] = useState("");

    const cambioSexo = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSexo(e.target.value);
    };
    
    const cambioRol = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRol(e.target.value);
    };

    const cambioComentario = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComentario(e.target.value);
    };

    const [showModal, setShowModal] = useState<boolean>(false);
    
      const mostrarModal = (): void => {
        setShowModal(true);
      };
    
      const ocultarModal = (): void => {
        setShowModal(false);
      };

    const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mostrarModal();
    };

    const limpiarFormulario = (): void => {
      setNombre("");
      setApellidos("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setEdad("");
      setSexo("");
      setRol("");
      setComentario("");
      setFecha(new Date());
      setTerminos(false);
      setAviso(false);
    };

  return (
    <>  
    <form onSubmit={manejarEnvio} className="flex max-w-md flex-col gap-4 border-4 border-white p-10 m-4 rounded-xl">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Nombre</Label>
        </div>
        <TextInput value={nombre} onChange={(e) => setNombre(e.target.value)} id="email1" type="text" placeholder="Juan" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Apellidos</Label>
        </div>
        <TextInput value={apellidos} onChange={(e) => setApellidos(e.target.value)} id="email1" type="text" placeholder="Pérez" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Email</Label>
        </div>
        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} id="email1" type="email" placeholder="name@gmail.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Contraseña</Label>
        </div>
        <TextInput value={password} onChange={(e) => setPassword(e.target.value)} id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2">Verificar Contraseña</Label>
        </div>
        <TextInput value={password2} onChange={(e) => setPassword2(e.target.value)} id="password2" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="edad">Edad</Label>
        </div>
        <TextInput value={edad} onChange={(e) => setEdad(e.target.value)} id="edad" type="number" placeholder="18" required />
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="sexo">Sexo</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="Masculino" onChange={cambioSexo} id="Masculino" name="sexo" checked={sexo === "Masculino"} />
        <Label htmlFor="Masculino">Masculino</Label>
        <Radio value="Femenino" onChange={cambioSexo} id="Femenino" name="sexo" checked={sexo === "Femenino"} />
        <Label htmlFor="Femenino">Femenino</Label>
        <Radio value="Otro" onChange={cambioSexo} id="Otro" name="sexo" checked={sexo === "Otro"} />
        <Label htmlFor="Otro">Otro</Label>
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="rol">Rol</Label>
        </div>
        <Select value={rol} onChange={cambioRol} id="rol" required>
          <option value="">Selecciona un rol</option>
          <option value="Administrador">Administrador</option>
          <option value="Programador">Programador</option>
          <option value="Usuario">Usuario</option>
        </Select>
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment">¿Qué opinas de nosotros?</Label>
      </div>
      <Textarea value={comentario} onChange={cambioComentario} id="comment" placeholder="Deja un comentario..." required rows={4} />
    </div>
    <div>
  <div className="mb-2 block">
    <Label htmlFor="fecha">Fecha de Registro</Label>
  </div>
  <Datepicker
    id="fecha"
    value={fecha}
    onChange={(date: Date | null) => setFecha(date)}
    language="es"
    required
  />
</div>
    <div className="flex flex-col items-center gap-2 mt-5 mb-3 ">
        <div className="flex items-center gap-2">
        <Checkbox checked={terminos} onChange={(e) => setTerminos(e.target.checked)} id="remember" />
        <Label htmlFor="remember">¿Estas de acuerdo con los terminos y condiciones?</Label>
        </div>
        <div className="flex items-center gap-2">
        <Checkbox checked={aviso} onChange={(e) => setAviso(e.target.checked)} id="remember" />
        <Label htmlFor="remember">Acepto el aviso de privacidad</Label>
        </div>
      </div>
    
    <Button type="submit">Mostrar</Button>
      
    </form>
    <button onClick={limpiarFormulario} className="bg-gray-900 m-2 text-white p-2 border-2 border-white rounded-xl cursor-pointer">
      Reiniciar
    </button>
    
    <Modal show={showModal} onClose={ocultarModal}>
        <ModalHeader className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-t-lg !p-5">
          Softwareland
        </ModalHeader>

        <ModalBody className="p-6 bg-gray-950">
          <div>
            <p>{nombre} {apellidos}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{password2}</p>
            <p>{edad}</p>
            <p>{sexo}</p>
            <p>{rol}</p>
            <p>{comentario}</p>
            <p>{fecha?.toLocaleDateString()}</p>
            <p>{terminos.toString()}</p>
            <p>{aviso.toString()}</p>
          </div>
        </ModalBody>

        <ModalFooter className="flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          <button onClick={ocultarModal}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded transition-colors cursor-pointer">
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}