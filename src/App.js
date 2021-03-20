import { useEffect, useState } from "react";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import Titular from "./componentes/Titular";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";
import GeneralContext from "./Contexts/GeneralContext";

function App() {
  const [paradaBuscada, setParadaBuscada] = useState("");

  const { datos: existeParada, pedirDatos: pedirExisteParada } = useFetch();
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  useEffect(() => {
    pedirExisteParada(`https://api.tmb.cat/v1/transit/parades/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
  }, [paradaBuscada, pedirExisteParada, pedirParada]);
  useEffect(() => {
    if (existeParada) {
      pedirParada(`https://api.tmb.cat/v1/ibus/stops/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
    }
  }, [paradaBuscada, existeParada, pedirParada]);

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
