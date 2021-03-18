import { useEffect, useState } from "react";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import Titular from "./componentes/Titular";
import ParadaContext from "./Contexts/ParadaContext";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";
import GeneralContext from "./Contexts/GeneralContext";

function App() {
  /*   const { datos: parada, pedirDatos: pedirParada } = useFetch();
    const { datos: linea, pedirDatos: pedirLinea } = useFetch();
    useEffect(() => {
      pedirParada(urlBusqueda);
    }, [pedirParada, urlBusqueda]);
    useEffect(() => {
      if (parada) {
        pedirLinea(urlBusqueda);
      }
    }, [parada, pedirLinea, urlBusqueda]); */

  const [paradaApi, setParadaApi] = useState(paradaAPI);
  const [urlBusqueda, setUrlBusqueda] = useState("");
  const [existeParada, setExisteParada] = useState(false);
  const [paradaBuscada, setParadaBuscada] = useState("");
  const [linea, setLinea] = useState("");
  const { data } = paradaApi;
  const { ibus, ibus: [{ line, destination, routeId, "t-in-min": tiempoEnMinutos }] } = data;
  const paradaPrueba = data.ibus;

  return (
    <GeneralContext.Provider value={{ ibus, paradaPrueba, paradaBuscada, setParadaBuscada, setLinea }}>
      <div className="contenedor">
        <header className="cabecera">
          <Titular numeroParada={paradaBuscada} existeParada={existeParada} />
          <Display parada={paradaPrueba} />
          <TiempoLinea /* (De esta manera, ùnicamente devuelve el número y tiempo del primer bus que aparece,
        no está vinculado al buscador de ninguna manera) */ linea={linea} tiempoRestante={tiempoEnMinutos} />
        </header>
        <ParadaContext.Provider value={{ paradaPrueba, paradaBuscada, setParadaBuscada, setUrlBusqueda }}>
          <Formularios />
        </ParadaContext.Provider>
      </div >
    </GeneralContext.Provider>
  );
}

export default App;
