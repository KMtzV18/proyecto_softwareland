"use client";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Datepicker,
  Radio,
  Select,
  Textarea,
} from "flowbite-react";
import { UserRecord } from "./FormTable";

interface FormProps {
  onSave?: (record: UserRecord) => void;
}

export default function Form({ onSave }: FormProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [terms, setTerms] = useState(false);
  const [privacyNotice, setPrivacyNotice] = useState(false);
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [comment, setComment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [action, setAction] = useState<"save" | "show" | "">("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    date: "",
  });

  const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = e.target.value;
    const filteredValue = originalValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    setFirstName(filteredValue);

    if (filteredValue.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        firstName: "El nombre es requerido y solo acepta letras.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, firstName: "" }));
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = e.target.value;
    const filteredValue = originalValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    setLastName(filteredValue);

    if (filteredValue.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        lastName: "El apellido es requerido y solo acepta letras.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, lastName: "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        email: "El correo electrónico es requerido.",
      }));
    } else if (!emailRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Debe introducir un formato de correo electrónico válido.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = e.target.value;
    const filteredValue = originalValue.replace(/[^0-9]/g, "");
    setAge(filteredValue);

    if (filteredValue === "") {
      setErrors((prev) => ({
        ...prev,
        age: "La edad es requerida y solo acepta números positivos.",
      }));
    } else {
      const num = parseInt(filteredValue, 10);
      if (num <= 0 || num > 100) {
        setErrors((prev) => ({
          ...prev,
          age: "La edad debe ser un número positivo hasta 100.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, age: "" }));
      }
    }
  };

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
    if (!selectedDate) {
      setErrors((prev) => ({
        ...prev,
        date: "La fecha de registro es requerida.",
      }));
      return;
    }

    const today = getToday();
    const currentDate = new Date(selectedDate);
    currentDate.setHours(0, 0, 0, 0);

    if (currentDate < today) {
      setErrors((prev) => ({
        ...prev,
        date: "La fecha debe ser a partir del día en curso.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = getToday();

    const validationErrors = {
      firstName:
        firstName.trim() === ""
          ? "El nombre es requerido."
          : /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(firstName)
            ? "El nombre solo acepta letras."
            : "",
      lastName:
        lastName.trim() === ""
          ? "El apellido es requerido."
          : /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(lastName)
            ? "El apellido solo acepta letras."
            : "",
      email:
        email.trim() === ""
          ? "El correo electrónico es requerido."
          : !emailRegex.test(email)
            ? "Debe introducir un formato de correo electrónico válido."
            : "",
      age: "",
      date: "",
    };

    if (age === "") {
      validationErrors.age = "La edad es requerida.";
    } else {
      const num = parseInt(age, 10);
      if (isNaN(num) || num <= 0 || num > 100) {
        validationErrors.age = "La edad debe ser un número positivo hasta 100.";
      }
    }

    if (!date) {
      validationErrors.date = "La fecha de registro es requerida.";
    } else {
      const selectedDate = new Date(date);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        validationErrors.date = "La fecha debe ser a partir del día en curso.";
      }
    }

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((err) => err !== "");
    if (hasErrors) {
      return;
    }

    if (action === "save") {
      if (onSave) {
        onSave({
          firstName,
          lastName,
          email,
          password,
          age,
          gender,
          role,
          comment,
          date: date ? date.toLocaleDateString("es-ES") : "",
        });
      }
      resetForm();
    } else if (action === "show") {
      openModal();
    }
  };

  const resetForm = (): void => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setGender("");
    setRole("");
    setComment("");
    setDate(new Date());
    setTerms(false);
    setPrivacyNotice(false);
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      date: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 border-4 border-white p-10 m-4 rounded-xl"
      >
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="first-name"
              color={
                errors.firstName
                  ? "failure"
                  : firstName.trim() !== ""
                    ? "success"
                    : undefined
              }
            >
              Nombre
            </Label>
          </div>
          <TextInput
            value={firstName}
            onChange={handleFirstNameChange}
            id="first-name"
            type="text"
            placeholder="Juan"
            required
            color={
              errors.firstName
                ? "failure"
                : firstName.trim() !== ""
                  ? "success"
                  : undefined
            }
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-rose-500 font-medium">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="last-name"
              color={
                errors.lastName
                  ? "failure"
                  : lastName.trim() !== ""
                    ? "success"
                    : undefined
              }
            >
              Apellidos
            </Label>
          </div>
          <TextInput
            value={lastName}
            onChange={handleLastNameChange}
            id="last-name"
            type="text"
            placeholder="Pérez"
            required
            color={
              errors.lastName
                ? "failure"
                : lastName.trim() !== ""
                  ? "success"
                  : undefined
            }
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-rose-500 font-medium">
              {errors.lastName}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              color={
                errors.email
                  ? "failure"
                  : email.trim() !== ""
                    ? "success"
                    : undefined
              }
            >
              Email
            </Label>
          </div>
          <TextInput
            value={email}
            onChange={handleEmailChange}
            id="email"
            type="email"
            placeholder="name@gmail.com"
            required
            color={
              errors.email
                ? "failure"
                : email.trim() !== ""
                  ? "success"
                  : undefined
            }
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 font-medium">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <TextInput
            value={password}
            onChange={handlePasswordChange}
            id="password"
            type="password"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirm-password">Verificar Contraseña</Label>
          </div>
          <TextInput
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="confirm-password"
            type="password"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="age"
              color={
                errors.age ? "failure" : age !== "" ? "success" : undefined
              }
            >
              Edad
            </Label>
          </div>
          <TextInput
            value={age}
            onChange={handleAgeChange}
            id="age"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="18"
            required
            color={
              errors.age ? "failure" : age !== "" ? "success" : undefined
            }
          />
          {errors.age && (
            <p className="mt-1 text-xs text-rose-500 font-medium">
              {errors.age}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="gender">Sexo</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            value="Masculino"
            onChange={handleGenderChange}
            id="gender-male"
            name="gender"
            checked={gender === "Masculino"}
          />
          <Label htmlFor="gender-male">Masculino</Label>
          <Radio
            value="Femenino"
            onChange={handleGenderChange}
            id="gender-female"
            name="gender"
            checked={gender === "Femenino"}
          />
          <Label htmlFor="gender-female">Femenino</Label>
          <Radio
            value="Otro"
            onChange={handleGenderChange}
            id="gender-other"
            name="gender"
            checked={gender === "Otro"}
          />
          <Label htmlFor="gender-other">Otro</Label>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="role">Rol</Label>
          </div>
          <Select value={role} onChange={handleRoleChange} id="role" required>
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
          <Textarea
            value={comment}
            onChange={handleCommentChange}
            id="comment"
            placeholder="Deja un comentario..."
            required
            rows={4}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="registration-date"
              color={errors.date ? "failure" : date ? "success" : undefined}
            >
              Fecha de Registro
            </Label>
          </div>
          <Datepicker
            id="registration-date"
            value={date}
            onChange={handleDateChange}
            language="es"
            minDate={getToday()}
            required
          />
          {errors.date && (
            <p className="mt-1 text-xs text-rose-500 font-medium">
              {errors.date}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center gap-2 mt-5 mb-3 ">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              id="terms"
            />
            <Label htmlFor="terms">
              ¿Estas de acuerdo con los terminos y condiciones?
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={privacyNotice}
              onChange={(e) => setPrivacyNotice(e.target.checked)}
              id="privacy-notice"
            />
            <Label htmlFor="privacy-notice">Acepto el aviso de privacidad</Label>
          </div>
        </div>

        <Button type="submit" onClick={() => setAction("save")}>
          Guardar
        </Button>
        <Button type="submit" onClick={() => setAction("show")}>
          Mostrar
        </Button>
        <button
          type="button"
          onClick={resetForm}
          className="bg-gray-900 text-white py-2 hover:bg-gray-800 rounded-xl cursor-pointer"
        >
          Reiniciar
        </button>
      </form>

      <Modal show={showModal} onClose={closeModal}>
        <ModalHeader className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-t-lg !p-5">
          Softwareland
        </ModalHeader>

        <ModalBody className="p-6 bg-gray-950">
          <div>
            <p>
              {firstName} {lastName}
            </p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmPassword}</p>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{role}</p>
            <p>{comment}</p>
            <p>{date?.toLocaleDateString()}</p>
            <p>{terms.toString()}</p>
            <p>{privacyNotice.toString()}</p>
          </div>
        </ModalBody>

        <ModalFooter className="flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}
