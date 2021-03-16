import { useState } from "react";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import Titular from "./componentes/Titular";
import OcultarContext from "./Contexts/OcultarContext";
import ParadaContext from "./Contexts/ParadaContext";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";
import GeneralContext from "./Contexts/GeneralContext";

function App() {
  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [urlBusqueda, setUrlBusqueda] = useState("");
  const [paradaBuscada, setParadaBuscada] = useState("");
  const { data } = paradaApi;
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const { ibus, ibus: [{ line, destination, routeId, "t-in-min": tiempoEnMinutos }] } = data;
  const paradaPrueba = data.ibus;

  return (
    <GeneralContext.Provider value={{ ibus, paradaPrueba, paradaBuscada, setParadaBuscada }}>
      <OcultarContext.Provider value={ocultarFrase}>
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
      </OcultarContext.Provider>
    </GeneralContext.Provider>
  );
}

export default App;
