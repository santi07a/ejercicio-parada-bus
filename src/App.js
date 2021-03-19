import { useEffect, useState } from "react";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import Titular from "./componentes/Titular";
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

  const [paradaBuscada, setParadaBuscada] = useState("");
  const [linea, setLinea] = useState("");
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const [tiempo, setTiempo] = useState(0);
  const { ibus: paradaPrueba, ibus: [{ line, "t-in-min": tiempoEnMinutos }] } = paradaAPI.data;

  return (
    <GeneralContext.Provider value={{ paradaPrueba, ocultarFrase, tiempo, paradaBuscada, setParadaBuscada, setLinea, setOcultarFrase, setTiempo }}>
      <div className="contenedor">
        <header className="cabecera">
          <Titular numeroParada={paradaBuscada} />
          <Display parada={paradaPrueba} />
          <TiempoLinea linea={linea} tiempoRestante={tiempoEnMinutos} />
        </header>
        <Formularios />
      </div >
    </GeneralContext.Provider>
  );
}

export default App;
