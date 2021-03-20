import { useContext, useEffect } from "react";
import Display from "../componentes/Display";
import Formularios from "../componentes/Formularios";
import TiempoLinea from "../componentes/TiempoLinea";
import Titular from "../componentes/Titular";
import GeneralContext from "../Contexts/GeneralContext";
import ParadaContext from "../Contexts/ParadaContext";
import useFetch from "../hooks/useFetch";

const Parada = () => {
  const { datos: existeParada, pedirDatos: pedirExisteParada } = useFetch();
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  const { paradaBuscada, linea } = useContext(GeneralContext);

  useEffect(() => {
    pedirExisteParada(`https://api.tmb.cat/v1/transit/parades/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
  }, [paradaBuscada, pedirExisteParada, pedirParada]);
  useEffect(() => {
    if (existeParada) {
      pedirParada(`https://api.tmb.cat/v1/ibus/stops/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
    }
  }, [paradaBuscada, existeParada, pedirParada]);

  return (
    <ParadaContext.Provider value={{ parada, existeParada, paradaBuscada }}>
      <div className="contenedor">
        <header className="cabecera">
          <Titular />
          {(parada && existeParada) && <Display />}
          {linea !== "" && < TiempoLinea />}
        </header>
        <Formularios />
      </div >
    </ParadaContext.Provider>
  );
};

export default Parada;
