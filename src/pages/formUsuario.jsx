import React, { useState } from "react";
import { format, isBefore, isAfter, parseISO } from "date-fns";

const FormUsuario = ({ onAgregarPersona }) => {
  const hoy = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    fechaNacimiento: "",
    comentarios: "",
  });

  const [errores, setErrores] = useState({});
  const [mostrarExito, setMostrarExito] = useState(false);

  // Validaciones
  const validarNombre = (nombre) => {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!nombre.trim()) {
      return "El nombre es obligatorio.";
    } else if (!regex.test(nombre)) {
      return "Solo se permiten caracteres alfabéticos de A-Z, espacio en blanco y tildes";
    }
    return "";
  };

  const validarFechaN = (fecha) => {
    if (!fecha) {
      return "La fecha es obligatoria.";
    }

    const fechaIngresada = parseISO(fecha);
    const fechaMin = new Date("1900-01-01");
    const fechaMax = new Date();

    if (isBefore(fechaIngresada, fechaMin)) {
      return "La fecha no puede ser anterior al 1 de enero de 1900.";
    }
    if (isAfter(fechaIngresada, fechaMax)) {
      return "La fecha no puede ser futura";
    }
    return "";
  };

  const validarComentarios = (comentarios) => {
    const regex = /^[A-Za-z0-9\s.,'"&@$*()\-;?¿¡!]*$/;
    if (comentarios && !regex.test(comentarios)) {
      return "Caracteres inválidos en los comentarios.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errores[name]) {
      setErrores((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresValidacion = {
      nombreCompleto: validarNombre(formData.nombreCompleto),
      fechaNacimiento: validarFechaN(formData.fechaNacimiento),
      comentarios: validarComentarios(formData.comentarios),
    };

    setErrores(erroresValidacion);

    const noHayErrores = Object.values(erroresValidacion).every(
      (error) => error === ""
    );

    if (noHayErrores) {
      const persona = {
        id: Date.now(),
        nombreCompleto: formData.nombreCompleto.trim(),
        fechaNacimiento: formData.fechaNacimiento,
        comentarios: formData.comentarios.trim(),
      };

      if (onAgregarPersona) {
        onAgregarPersona(persona);
      }

      setMostrarExito(true);
      setFormData({
        nombreCompleto: "",
        fechaNacimiento: "",
        comentarios: "",
      });

      setTimeout(() => setMostrarExito(false), 3000);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formUsuario" noValidate>
        <h2>Registrar Usuario</h2>

        {mostrarExito && (
          <div className="exito">¡Usuario registrado con éxito!</div>
        )}

        <div className="inputGroup">
          <label htmlFor="nombreCompleto">Nombre Completo *</label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className={errores.nombreCompleto ? "error" : ""}
            placeholder="Ingrese su nombre completo..."
          />
          {errores.nombreCompleto && (
            <span className="mensajeError">{errores.nombreCompleto}</span>
          )}
        </div>

        <div className="inputGroup">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            min="1900-01-01"
            max={hoy}
            className={errores.fechaNacimiento ? "error" : ""}
          />
          {errores.fechaNacimiento && (
            <span className="mensajeError">{errores.fechaNacimiento}</span>
          )}
        </div>

        <div className="inputGroup">
          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            name="comentarios"
            id="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows="3"
            className={errores.comentarios ? "error" : ""}
            placeholder="Deje sus comentarios..."
          />
          {errores.comentarios && (
            <span className="mensajeError">{errores.comentarios}</span>
          )}
        </div>

        <button type="submit" className="btnGuardar">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FormUsuario;
