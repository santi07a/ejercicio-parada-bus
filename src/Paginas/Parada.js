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
    pedirExisteParada(process.env.REACT_APP_API_URL_EXISTE + paradaBuscada + process.env.REACT_APP_API_KEY);
  }, [paradaBuscada, pedirExisteParada, pedirParada]);
  useEffect(() => {
    if (existeParada) {
      pedirParada(process.env.REACT_APP_API_URL_PARADA + paradaBuscada + process.env.REACT_APP_API_KEY);
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
