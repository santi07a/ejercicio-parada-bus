import PropTypes from "prop-types";

const TiempoLinea = props => {
  const { linea, tiempoRestante } = props;
  return (
    <h2 hidden={linea === "" ? true : false}>Tiempo para la línea {linea}: {tiempoRestante} minutos</h2>
  );
};

TiempoLinea.propTypes = {
  linea: PropTypes.string.isRequired,
  tiempoRestante: PropTypes.number.isRequired
};
export default TiempoLinea;


