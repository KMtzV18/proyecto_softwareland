import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, TextInput, Select, Textarea, Radio } from "flowbite-react";
import { UserRecord } from "./TablaFormulario";

interface ModalEditarProps {
  showEditModal: boolean;
  onClose: () => void;
  editForm: UserRecord;
  setEditForm: React.Dispatch<React.SetStateAction<UserRecord>>;
  onSave: (e: React.FormEvent) => void;
}

export default function ModalEditar({
  showEditModal,
  onClose,
  editForm,
  setEditForm,
  onSave,
}: ModalEditarProps) {
  return (
    <Modal show={showEditModal} onClose={onClose}>
      <ModalHeader className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-t-lg !p-5">
        Editar Registro
      </ModalHeader>
      <form onSubmit={onSave}>
        <ModalBody className="p-6 bg-gray-900 text-white space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-nombre" className="text-white">Nombre</Label>
              <TextInput
                id="edit-nombre"
                value={editForm.firstName}
                onChange={(e) => setEditForm(prev => ({ ...prev, firstName: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-apellidos" className="text-white">Apellidos</Label>
              <TextInput
                id="edit-apellidos"
                value={editForm.lastName}
                onChange={(e) => setEditForm(prev => ({ ...prev, lastName: e.target.value }))}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="edit-email" className="text-white">Email</Label>
            <TextInput
              id="edit-email"
              type="email"
              value={editForm.email}
              onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-contrasenia" className="text-white">Contraseña</Label>
              <TextInput
                id="edit-contrasenia"
                type="text"
                value={editForm.password}
                onChange={(e) => setEditForm(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-edad" className="text-white">Edad</Label>
              <TextInput
                id="edit-edad"
                type="text"
                value={editForm.age}
                onChange={(e) => setEditForm(prev => ({ ...prev, age: e.target.value }))}
                required
              />
            </div>
          </div>

          <div>
            <Label className="text-white mb-2 block">Sexo</Label>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Radio
                  id="edit-sexo-m"
                  name="edit-sexo"
                  value="Masculino"
                  checked={editForm.gender === "Masculino"}
                  onChange={(e) => setEditForm(prev => ({ ...prev, gender: e.target.value }))}
                />
                <Label htmlFor="edit-sexo-m" className="text-white">Masculino</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="edit-sexo-f"
                  name="edit-sexo"
                  value="Femenino"
                  checked={editForm.gender === "Femenino"}
                  onChange={(e) => setEditForm(prev => ({ ...prev, gender: e.target.value }))}
                />
                <Label htmlFor="edit-sexo-f" className="text-white">Femenino</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="edit-sexo-o"
                  name="edit-sexo"
                  value="Otro"
                  checked={editForm.gender === "Otro"}
                  onChange={(e) => setEditForm(prev => ({ ...prev, gender: e.target.value }))}
                />
                <Label htmlFor="edit-sexo-o" className="text-white">Otro</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="edit-rol" className="text-white">Rol</Label>
            <Select
              id="edit-rol"
              value={editForm.role}
              onChange={(e) => setEditForm(prev => ({ ...prev, role: e.target.value }))}
              required
            >
              <option value="">Selecciona un rol</option>
              <option value="Administrador">Administrador</option>
              <option value="Programador">Programador</option>
              <option value="Usuario">Usuario</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="edit-comentario" className="text-white">Comentarios</Label>
            <Textarea
              id="edit-comentario"
              rows={3}
              value={editForm.comment}
              onChange={(e) => setEditForm(prev => ({ ...prev, comment: e.target.value }))}
            />
          </div>
        </ModalBody>

        <ModalFooter className="flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <Button type="submit" color="blue">
            Guardar cambios
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
