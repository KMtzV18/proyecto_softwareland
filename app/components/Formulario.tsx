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

    const [errores, setErrores] = useState({
      nombre: "",
      apellidos: "",
      email: "",
      edad: "",
      fecha: ""
    });

    const obtenerHoy = () => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    };

    const cambioNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valorOriginal = e.target.value;
      const valorFiltrado = valorOriginal.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setNombre(valorFiltrado);
      
      if (valorFiltrado.trim() === "") {
        setErrores(prev => ({ ...prev, nombre: "El nombre es requerido y solo acepta letras." }));
      } else {
        setErrores(prev => ({ ...prev, nombre: "" }));
      }
    };
    
    const cambioApellidos = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valorOriginal = e.target.value;
      const valorFiltrado = valorOriginal.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setApellidos(valorFiltrado);
      
      if (valorFiltrado.trim() === "") {
        setErrores(prev => ({ ...prev, apellidos: "El apellido es requerido y solo acepta letras." }));
      } else {
        setErrores(prev => ({ ...prev, apellidos: "" }));
      }
    };
    
    const cambioEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valor = e.target.value;
      setEmail(valor);
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (valor.trim() === "") {
        setErrores(prev => ({ ...prev, email: "El correo electrónico es requerido." }));
      } else if (!emailRegex.test(valor)) {
        setErrores(prev => ({ ...prev, email: "Debe introducir un formato de correo electrónico válido." }));
      } else {
        setErrores(prev => ({ ...prev, email: "" }));
      }
    };
    
    const cambioPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
    
    const cambioPassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword2(e.target.value);
    };
    
    const cambioEdad = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valorOriginal = e.target.value;
      // Only allow numbers
      const valorFiltrado = valorOriginal.replace(/[^0-9]/g, '');
      setEdad(valorFiltrado);
      
      if (valorFiltrado === "") {
        setErrores(prev => ({ ...prev, edad: "La edad es requerida y solo acepta números positivos." }));
      } else {
        const num = parseInt(valorFiltrado, 10);
        if (num <= 0 || num > 100) {
          setErrores(prev => ({ ...prev, edad: "La edad debe ser un número positivo hasta 100." }));
        } else {
          setErrores(prev => ({ ...prev, edad: "" }));
        }
      }
    };
    
    const cambioFecha = (date: Date | null) => {
      setFecha(date);
      if (!date) {
        setErrores(prev => ({ ...prev, fecha: "La fecha de registro es requerida." }));
        return;
      }
      
      const hoy = obtenerHoy();
      const seleccionada = new Date(date);
      seleccionada.setHours(0, 0, 0, 0);
      
      if (seleccionada < hoy) {
        setErrores(prev => ({ ...prev, fecha: "La fecha debe ser a partir del día en curso." }));
      } else {
        setErrores(prev => ({ ...prev, fecha: "" }));
      }
    };

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
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const hoy = obtenerHoy();
      
      const errs = {
        nombre: nombre.trim() === "" ? "El nombre es requerido." : (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(nombre) ? "El nombre solo acepta letras." : ""),
        apellidos: apellidos.trim() === "" ? "El apellido es requerido." : (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(apellidos) ? "El apellido solo acepta letras." : ""),
        email: email.trim() === "" ? "El correo electrónico es requerido." : (!emailRegex.test(email) ? "Debe introducir un formato de correo electrónico válido." : ""),
        edad: "",
        fecha: ""
      };
      
      if (edad === "") {
        errs.edad = "La edad es requerida.";
      } else {
        const num = parseInt(edad, 10);
        if (isNaN(num) || num <= 0 || num > 100) {
          errs.edad = "La edad debe ser un número positivo hasta 100.";
        }
      }
      
      if (!fecha) {
        errs.fecha = "La fecha de registro es requerida.";
      } else {
        const seleccionada = new Date(fecha);
        seleccionada.setHours(0, 0, 0, 0);
        if (seleccionada < hoy) {
          errs.fecha = "La fecha debe ser a partir del día en curso.";
        }
      }
      
      setErrores(errs);
      
      const tieneErrores = Object.values(errs).some(err => err !== "");
      if (tieneErrores) {
        return;
      }
      
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
      setErrores({
        nombre: "",
        apellidos: "",
        email: "",
        edad: "",
        fecha: ""
      });
    };

  return (
    <>  
    <form onSubmit={manejarEnvio} className="flex max-w-md flex-col gap-4 border-4 border-white p-10 m-4 rounded-xl">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nombre" color={errores.nombre ? "failure" : (nombre.trim() !== "" ? "success" : undefined)}>Nombre</Label>
        </div>
        <TextInput 
          value={nombre} 
          onChange={cambioNombre} 
          id="nombre" 
          type="text" 
          placeholder="Juan" 
          required 
          color={errores.nombre ? "failure" : (nombre.trim() !== "" ? "success" : undefined)}
        />
        {errores.nombre && (
          <p className="mt-1 text-xs text-rose-500 font-medium">{errores.nombre}</p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="apellidos" color={errores.apellidos ? "failure" : (apellidos.trim() !== "" ? "success" : undefined)}>Apellidos</Label>
        </div>
        <TextInput 
          value={apellidos} 
          onChange={cambioApellidos} 
          id="apellidos" 
          type="text" 
          placeholder="Pérez" 
          required 
          color={errores.apellidos ? "failure" : (apellidos.trim() !== "" ? "success" : undefined)}
        />
        {errores.apellidos && (
          <p className="mt-1 text-xs text-rose-500 font-medium">{errores.apellidos}</p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" color={errores.email ? "failure" : (email.trim() !== "" ? "success" : undefined)}>Email</Label>
        </div>
        <TextInput 
          value={email} 
          onChange={cambioEmail} 
          id="email" 
          type="email" 
          placeholder="name@gmail.com" 
          required 
          color={errores.email ? "failure" : (email.trim() !== "" ? "success" : undefined)}
        />
        {errores.email && (
          <p className="mt-1 text-xs text-rose-500 font-medium">{errores.email}</p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="contrasenia">Contraseña</Label>
        </div>
        <TextInput value={password} onChange={cambioPassword} id="contrasenia" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="contrasenia2">Verificar Contraseña</Label>
        </div>
        <TextInput value={password2} onChange={cambioPassword2} id="contrasenia2" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="edad" color={errores.edad ? "failure" : (edad !== "" ? "success" : undefined)}>Edad</Label>
        </div>
        <TextInput 
          value={edad} 
          onChange={cambioEdad} 
          id="edad" 
          type="text" 
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="18" 
          required 
          color={errores.edad ? "failure" : (edad !== "" ? "success" : undefined)}
        />
        {errores.edad && (
          <p className="mt-1 text-xs text-rose-500 font-medium">{errores.edad}</p>
        )}
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
        <Label htmlFor="comentario">¿Qué opinas de nosotros?</Label>
      </div>
      <Textarea value={comentario} onChange={cambioComentario} id="comentario" placeholder="Deja un comentario..." required rows={4} />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="fecha" color={errores.fecha ? "failure" : (fecha ? "success" : undefined)}>Fecha de Registro</Label>
      </div>
      <Datepicker
        id="fecha"
        value={fecha}
        onChange={cambioFecha}
        language="es"
        minDate={obtenerHoy()}
        required
      />
      {errores.fecha && (
        <p className="mt-1 text-xs text-rose-500 font-medium">{errores.fecha}</p>
      )}
    </div>
    <div className="flex flex-col items-center gap-2 mt-5 mb-3 ">
        <div className="flex items-center gap-2">
        <Checkbox checked={terminos} onChange={(e) => setTerminos(e.target.checked)} id="terminos" />
        <Label htmlFor="terminos">¿Estas de acuerdo con los terminos y condiciones?</Label>
        </div>
        <div className="flex items-center gap-2">
        <Checkbox checked={aviso} onChange={(e) => setAviso(e.target.checked)} id="aviso" />
        <Label htmlFor="aviso">Acepto el aviso de privacidad</Label>
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