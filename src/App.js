import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Display from "./componentes/Display";
import Titular from "./componentes/Titular";
import paradaAPI from "./parada.json";

function App() {
  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [busquedaParada, setBusquedaParada] = useState(0);
  const { data } = paradaApi;
  const { ibus: [{ line, destination, routeId }] } = data;
  const [idParada, setIdParada] = useState(routeId);

  return (
    <div className="contenedor">
      <header className="cabecera">
        <Titular numeroParada={busquedaParada} />
        <Display />
        <h2>Tiempo para la línea 60: 2 minutos</h2>
      </header>
      <section className="forms">
        <Buscador busquedaParada={busquedaParada} idParada={idParada} />
        <form>
          <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
          <select id="tiempo-linea">
            <option value="">Elige línea</option>
          </select>
        </form>
      </section>
    </div>
  );
}

export default App;
