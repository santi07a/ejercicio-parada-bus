import PropTypes from "prop-types";
import { lineaType } from "../types/lineaType";

const Display = props => {
  const { linea } = props;
  const { line: numero, destination: destino, "text-ca": minutos } = linea;
  return (
    <div className="display">
      <div className="bus">
        <span className="linea">{numero}</span>
        <span className="destino">{destino}</span>
        <span className="tiempo">{minutos}</span>
      </div>
    </div>
  );
};

Display.propTypes = {
  linea: PropTypes.shape(lineaType).isRequired
};


export default Display;
