import PropTypes from "prop-types";
import { lineaType } from "../types/lineaType";
import Lineas from "./Lineas";

const Display = props => {
  const { parada } = props;
  return (
    parada.map(linea => <Lineas key={linea.routeId} linea={linea}></Lineas >)
  );
};

Display.propTypes = {
  parada: PropTypes.array.isRequired
};


export default Display;
