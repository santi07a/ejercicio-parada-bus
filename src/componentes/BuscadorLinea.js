import { useContext, useEffect } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const BuscadorLinea = () => {
  const { ocultarFrase, parada, setOcultarFrase, existeParada, linea, paradaBuscada, setLinea } = useContext(GeneralContext);
  const elegirBus = e => setLinea(e.target.value);

  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirBus} id="tiempo-linea">
        <option value="">Elige línea</option>
        {
          parada?.data.ibus
            .map(linea => <option value={linea.line} >{linea.line}</option>)
        }
      </select>
    </form >
  );
};

export default BuscadorLinea;
