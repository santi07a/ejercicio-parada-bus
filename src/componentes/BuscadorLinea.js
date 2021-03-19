import { useContext, useEffect } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const BuscadorLinea = () => {
  const { ocultarFrase, setOcultarFrase, ibus, paradaBuscada, setLinea } = useContext(GeneralContext);
  const elegirBus = e => setLinea(e.target.value);
  const rutas = [...ibus];
  const compruebaRutas = rutas.map(route => route.routeId);

  useEffect(() => {
    if (compruebaRutas.includes(paradaBuscada)) {
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
