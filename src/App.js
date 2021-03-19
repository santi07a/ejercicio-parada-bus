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
  const [paradaBuscada, setParadaBuscada] = useState("");
  const [linea, setLinea] = useState("");
  const { data } = paradaApi;
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const [tiempo, setTiempo] = useState(0);
  const { ibus, ibus: [{ line, "t-in-min": tiempoEnMinutos }] } = data;
  const paradaPrueba = data.ibus;

  return (
    <GeneralContext.Provider value={{ ibus, paradaPrueba, ocultarFrase, tiempo, paradaBuscada, setParadaBuscada, setLinea, setOcultarFrase, setTiempo }}>
      <div className="contenedor">
        <header className="cabecera">
          <Titular numeroParada={paradaBuscada} />
          <Display parada={paradaPrueba} />
          <TiempoLinea linea={linea} tiempoRestante={tiempoEnMinutos} />
        </header>
        <ParadaContext.Provider value={{ paradaPrueba, paradaBuscada, setParadaBuscada }}>
          <Formularios />
        </ParadaContext.Provider>
      </div >
    </GeneralContext.Provider>
  );
}

export default App;
