import { useState, useEffect } from "react";
import FormUsuario from "./pages/formUsuario";
import CardUsuario from "./components/cardUsuario";
import "./App.css";

function App() {
  const [personas, setPersonas] = useState([]);

  // Carga de datos sessionStorage
  useEffect(() => {
    const datos = sessionStorage.getItem("personasRegistradas");
    if (datos) {
      try {
        const personasParseadas = JSON.parse(datos);
        setPersonas(personasParseadas);
      } catch (error) {
        console.error("Error al cargar datos del sessionStorage:", error);
        sessionStorage.removeItem("personasRegistradas");
      }
    }
  }, []);

  // Guardar datos cuando cambian
  useEffect(() => {
    try {
      sessionStorage.setItem("personasRegistradas", JSON.stringify(personas));
    } catch (error) {
      console.error("Error al guardar en sessionStorage:", error);
    }
  }, [personas]);

  const agregarPersona = (persona) => {
    const personaConId = {
      ...persona,
      id: Date.now(),
    };
    setPersonas((prevPersonas) => [...prevPersonas, personaConId]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Formulario de Registro</h1>
      </header>

      <main className="app-main">
        <div className="container">
          <FormUsuario onAgregarPersona={agregarPersona} />
          <CardUsuario personas={personas} />
        </div>
      </main>
    </div>
  );
}

export default App;
