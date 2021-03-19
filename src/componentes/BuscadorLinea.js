import { useContext, useEffect } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const BuscadorLinea = () => {
  const { paradas, ocultarFrase, setOcultarFrase, ibus, paradaBuscada, setLinea } = useContext(GeneralContext);
  const elegirBus = e => setLinea(e.target.value);

  useEffect(() => {
    if (paradaBuscada === "0241") {
      setOcultarFrase(false);
    }
  });
  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirBus} id="tiempo-linea">
        <option value="">Elige línea</option>
        {
          ibus.map(parada => <option value={parada.line} key={parada.routeId}>{parada.line}</option>)
        };
        </select>
    </form >
  );
};

export default BuscadorLinea;
