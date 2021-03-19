import PropTypes from "prop-types";
import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const Titular = props => {
  const { ocultarFrase } = useContext(GeneralContext);
  const { numeroParada } = props;
  if (numeroParada === "") {
    return <h1>Parada de Buses</h1>;
  }
  return (
    !ocultarFrase ? <h1>Parada nº {numeroParada}</h1> : <h1>La parada {numeroParada} no existe</h1>
  );
};

Titular.propTypes = {
  numeroParada: PropTypes.string.isRequired,
};

export default Titular;
