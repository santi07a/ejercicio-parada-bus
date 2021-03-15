import PropTypes from "prop-types";

const TiempoLinea = props => {
  const { numeroLinea, tiempoRestante } = props;
  return (
    <h2>Tiempo para la línea {numeroLinea}: {tiempoRestante} minutos</h2>
  );
};

TiempoLinea.propTypes = {
  numeroLinea: PropTypes.string.isRequired,
  tiempoRestante: PropTypes.number.isRequired
};
export default TiempoLinea;


