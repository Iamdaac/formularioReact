import React from "react";
import { format, differenceInYears, parseISO } from "date-fns";

const CardUsuario = ({ personas }) => {
  const calcularEdad = (fechaNacimiento) => {
    try {
      return differenceInYears(new Date(), parseISO(fechaNacimiento));
    } catch (error) {
      console.error("Error calculando edad:", error);
      return "N/A";
    }
  };

  const formatFecha = (fecha) => {
    try {
      return format(parseISO(fecha), "dd/MM/yyyy");
    } catch (error) {
      console.error("Error formateando fecha:", error);
      return "Fecha inválida";
    }
  };

  if (!personas || personas.length === 0) {
    return (
      <div className="listaPersona">
        <h2>Lista de Personas</h2>
        <p className="sin-datos">No hay personas registradas.</p>
      </div>
    );
  }

  return (
    <div className="listaPersona">
      <h2>Personas Registradas ({personas.length})</h2>
      <div className="cardGrid">
        {personas.map((persona) => (
          <div key={persona.id || persona.nombreCompleto} className="card">
            <div className="cardHeader">
              <h3>{persona.nombreCompleto}</h3>
            </div>
            <div className="cardBody">
              <p className="fecha-info">
                <strong>Fecha de Nacimiento:</strong>{" "}
                {formatFecha(persona.fechaNacimiento)}
              </p>
              <p className="edad-info">
                <strong>Edad: </strong> {calcularEdad(persona.fechaNacimiento)}{" "}
                años
              </p>
              {persona.comentarios && persona.comentarios.trim() && (
                <div className="comentarios-section">
                  <strong>Comentarios:</strong>
                  <p className="comentarios-texto">{persona.comentarios}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardUsuario;
