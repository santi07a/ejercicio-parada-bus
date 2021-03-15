import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import TiempoRestante from "./componentes/TiempoRestante";
import Titular from "./componentes/Titular";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";

function App() {
  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [paradaBuscada, setParadaBuscada] = useState("");
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
      <Formularios datos={data.ibus} paradaBuscada={paradaBuscada} setParadaBuscada={setParadaBuscada} />
    </div>
  );
}

export default App;
