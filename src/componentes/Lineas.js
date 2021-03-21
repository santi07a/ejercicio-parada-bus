import PropTypes from "prop-types";
import { lineaType } from "../types/lineaType";

const Lineas = props => {
  const { linea, posicion } = props;
  const { line: numero, destination: destino, "text-ca": minutos } = linea;

  return (
    <div className="bus" style={{ top: `${posicion}px` }}>
      <a href={`/linea/${linea.line}`} className="linea">{numero}</a>
      <span className="destino">{destino}</span>
      <span className="tiempo">{minutos}</span>
    </div>
  );
};

Lineas.propTypes = {
  linea: PropTypes.shape(lineaType).isRequired
};


export default Lineas;
