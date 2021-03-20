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
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const { datos: existeParada, pedirDatos: pedirExisteParada } = useFetch();
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  const [linea, setLinea] = useState("");
  const [tiempo, setTiempo] = useState(0);
  const { data: { ibus: paradaPrueba } } = paradaAPI;

  useEffect(() => {
    pedirExisteParada(`https://api.tmb.cat/v1/transit/parades/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
  }, [paradaBuscada, pedirExisteParada, pedirParada]);
  useEffect(() => {
    if (existeParada) {
      pedirParada(`https://api.tmb.cat/v1/ibus/stops/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
    }
  }, [paradaBuscada, existeParada, pedirParada]);

  return (
    <GeneralContext.Provider value={{ linea, parada, ocultarFrase, tiempo, paradaBuscada, existeParada, setParadaBuscada, setLinea, setOcultarFrase, setTiempo }}>
      <div className="contenedor">
        <header className="cabecera">
          <Titular numeroParada={paradaBuscada} />
          <Display parada={paradaPrueba} />
          <TiempoLinea linea={linea} />
        </header>
        <Formularios />
      </div >
    </GeneralContext.Provider>
  );
}

export default App;
