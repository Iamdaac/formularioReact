import "./App.css";
import { useState, useEffect } from "react";
import FormUsuario from "./pages/formUsuario";
import CardUsuario from "./components/cardUsuario";

function App() {
  const [personas, setPersonas] = useState([]);

  //Carga de datos sessionStorage
  useEffect(() => {
    const datos = sessionStorage.getItem("personas");
    if (datos) {
      setPersonas(JSON.parse(datos));
    }
  }, []);

  //Guardar datos cuando cambian
  useEffect(() => {
    sessionStorage.setItem("personas", JSON.stringify(personas));
  }, [personas]);

  const agregarPersona = (persona) => {
    setPersonas([...personas, persona]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Formulario</h1>
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
