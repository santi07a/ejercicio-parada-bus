import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const BuscadorLinea = () => {
  const paradas = useContext(GeneralContext);
  const { ibus, paradaBuscada, setLinea } = paradas;
  const elegirBus = e => setLinea(e.target.value);
  return (
    <form hidden={paradaBuscada === "" ? true : false}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirBus} id="tiempo-linea">
        <option value="">Elige línea</option>
        {ibus.map(parada => <option value={parada.line} key={parada.routeId}>{parada.line}</option>)}
      </select>
    </form >
  );
};

export default BuscadorLinea;
