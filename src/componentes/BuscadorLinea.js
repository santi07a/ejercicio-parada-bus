import { useContext, useEffect } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import ParadaContext from "../Contexts/ParadaContext";

const BuscadorLinea = () => {
  const { ocultarFrase, setLinea } = useContext(GeneralContext);
  const { parada } = useContext(ParadaContext);
  const elegirBus = e => setLinea(e.target.value);

  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirBus} id="tiempo-linea">
        <option value="">Elige línea</option>
        {
          parada?.data.ibus
            .map(linea => <option key={linea.line} value={linea.line} >{linea.line}</option>)
        }
      </select>
    </form >
  );
};

export default BuscadorLinea;
