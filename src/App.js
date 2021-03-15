import { useState } from "react";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import Titular from "./componentes/Titular";
import ParadaContext from "./Contexts/ParadaContext";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";

function App() {
  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [urlBusqueda, setUrlBusqueda] = useState("");
  const { datos } = useFetch(urlBusqueda);
  const [paradaBuscada, setParadaBuscada] = useState("");
  const { data } = paradaApi;
  const { ibus: [{ line, destination, routeId, "t-in-min": tiempoEnMinutos }] } = data;
  const paradaPrueba = data.ibus;

  return (
    <div className="contenedor">
      <header className="cabecera">
        <Titular numeroParada={paradaBuscada} />
        <Display parada={paradaPrueba} />
        <TiempoLinea /* (De esta manera, ùnicamente devuelve el número y tiempo del primer bus que aparece,
        no está vinculado al buscador de ninguna manera) */ numeroLinea={line} tiempoRestante={tiempoEnMinutos} />
      </header>
      <ParadaContext.Provider value={{ paradaPrueba, paradaBuscada, setParadaBuscada, setUrlBusqueda }}>
        <Formularios />
      </ParadaContext.Provider>
    </div >
  );
}

export default App;
