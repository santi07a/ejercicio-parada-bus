import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const Titular = props => {
  const { paradaBuscada, existeParada } = useContext(GeneralContext);

  if (paradaBuscada === "") {
    return <h1>Parada de Buses</h1>;
  }

  if (existeParada.numberMatched === 1) {
    return <h1>Parada nº {paradaBuscada}</h1>;
  } else return <h1>La parada {paradaBuscada} no existe</h1>;
};

export default Titular;
