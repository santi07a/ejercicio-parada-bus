import PropTypes from "prop-types";

const Titular = props => {
  const { numeroParada, existeParada } = props;
  return (
    existeParada ? <h1>Parada nº {numeroParada}</h1> : <h1>La parada {numeroParada} no existe</h1>
  );
};

Titular.propTypes = {
  numeroParada: PropTypes.string.isRequired,
};

export default Titular;
