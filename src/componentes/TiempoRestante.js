import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import OcultarContext from "../Contexts/OcultarContext";

const TiempoRestante = () => {
  const ocultarForm = useContext(OcultarContext);
  const paradas = useContext(GeneralContext);
  const { ibus, setParadaBuscada } = paradas;
  const elegirLinea = e => setParadaBuscada(e.target.value);
  return (
    <form hidden={ocultarForm}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirLinea} id="tiempo-linea">
        <option value="">Elige línea</option>
        {ibus.map(parada => <option value={parada.line} key={parada.routeId}>{parada.line}</option>)}
      </select>
    </form >
  );
};

export default TiempoRestante;
