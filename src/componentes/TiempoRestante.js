import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const TiempoRestante = () => {
  const paradas = useContext(GeneralContext);
  const { ibus, setParadaBuscada } = paradas;
  const elegirBus = e => setParadaBuscada(e.target.value);
  return (
    <form >
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirBus} id="tiempo-linea">
        <option value="">Elige línea</option>
        {ibus.map(parada => <option value={parada.line} key={parada.routeId}>{parada.line}</option>)}
      </select>
    </form >
  );
};

export default TiempoRestante;
