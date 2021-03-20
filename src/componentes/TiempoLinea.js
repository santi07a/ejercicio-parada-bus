import { useContext, useEffect } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import ParadaContext from "../Contexts/ParadaContext";

const TiempoLinea = () => {
  const { tiempo, linea, setTiempo } = useContext(GeneralContext);
  const { parada } = useContext(ParadaContext);
  useEffect(() => {
    if (linea !== 0 && linea !== "") {
      setTiempo(parada?.data.ibus.filter(bus => bus.line === linea)[0]["t-in-min"]);
    }
  }, [parada, linea, setTiempo]);
  return (
    <h2>Tiempo para la línea {linea}: {tiempo} minutos</h2>
  );
};

export default TiempoLinea;


