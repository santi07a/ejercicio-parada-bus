import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Display from "./componentes/Display";
import TiempoLinea from "./componentes/TiempoLinea";
import TiempoRestante from "./componentes/TiempoRestante";
import Titular from "./componentes/Titular";
import paradaAPI from "./parada.json";

function App() {
  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [busquedaParada, setBusquedaParada] = useState(0);
  const { data } = paradaApi;
  const { ibus: [{ line, destination, routeId, "t-in-min": tiempoEnMinutos }] } = data;
  const [idParada, setIdParada] = useState(routeId);

  return (
    <div className="contenedor">
      <header className="cabecera">
        <Titular numeroParada={busquedaParada} />
        <Display />
        <TiempoLinea /* (De esta manera, ùnicamente devuelve el número y tiempo del primer bus que aparece,
        no está vinculado al buscador de ninguna manera) numeroLinea={line} tiempoRestante={tiempoEnMinutos} */ />
      </header>
      <section className="forms">
        <Buscador busquedaParada={busquedaParada} idParada={idParada} />
        <TiempoRestante />
      </section>
    </div>
  );
}

export default App;
