import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import ParadaContext from "../Contexts/ParadaContext";

const Titular = () => {
  const { paradaBuscada, existeParada } = useContext(ParadaContext);

  return (
    paradaBuscada === "a" ?
      <h1>Parada de Buses</h1> :
      ((existeParada && existeParada.numberMatched === 1) ?
        <h1> Parada nº {paradaBuscada}</h1> : <h1>La parada {paradaBuscada} no existe</h1>)
  );
};
export default Titular;
