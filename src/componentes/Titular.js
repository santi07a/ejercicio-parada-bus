import PropTypes from "prop-types";

const Titular = props => {
  const { numeroParada } = props;
  return (
    <h1>Parada nº {numeroParada}</h1>
  );
};

Titular.propTypes = {
  numeroParada: PropTypes.string.isRequired,
};

export default Titular;
