import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Display from "./componentes/Display";
import TiempoLinea from "./componentes/TiempoLinea";
import TiempoRestante from "./componentes/TiempoRestante";
import Titular from "./componentes/Titular";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";

function App() {
  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [paradaBuscada, setParadaBuscada] = useState(0);
  const { data } = paradaApi;
  const { ibus: [{ line, destination, routeId, "t-in-min": tiempoEnMinutos }] } = data;
  return (
    <div className="contenedor">
      <header className="cabecera">
        <Titular numeroParada={paradaBuscada} />
        <Display />
        <TiempoLinea /* (De esta manera, ùnicamente devuelve el número y tiempo del primer bus que aparece,
        no está vinculado al buscador de ninguna manera) */ numeroLinea={line} tiempoRestante={tiempoEnMinutos} />
      </header>
      <section className="forms">
        <Buscador paradaBuscada={paradaBuscada} idParada={routeId} />
        <TiempoRestante />
      </section>
    </div>
  );
}

export default App;
