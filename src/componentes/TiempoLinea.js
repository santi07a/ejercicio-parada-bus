import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const TiempoLinea = props => {
  const { linea } = props;
  const { tiempo, setTiempo, ibus, ocultarFrase } = useContext(GeneralContext);

  useEffect(() => {
    if (linea !== 0 && linea !== "") {
      setTiempo(ibus.filter(bus => bus.line === linea)[0]["text-ca"]);
    }
  }, [ibus, linea, setTiempo]);
  return (
    <h2 hidden={ocultarFrase}>Tiempo para la línea {linea}: {tiempo} minutos</h2>
  );
};

TiempoLinea.propTypes = {
  linea: PropTypes.string.isRequired,
  tiempoRestante: PropTypes.number.isRequired
};
export default TiempoLinea;


