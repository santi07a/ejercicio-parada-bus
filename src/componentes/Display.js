import PropTypes from "prop-types";
import { useState } from "react";
import { lineaType } from "../types/lineaType";
import Lineas from "./Lineas";

const Display = props => {
  const { parada } = props;
  const [posicion, setPosicion] = useState(0);
  if (parada.length > 1) {
    setInterval(() => {
      if (posicion !== -(30 * (parada.length - 1))) {
        setPosicion(posicion - 30);
      } else {
        setPosicion(0);
      }
    }, 2000);
  }

  return (
    <div className="display">
      {parada.map(linea => <Lineas key={linea.routeId} linea={linea} posicion={posicion}></Lineas >)}
    </div>
  );
};

Display.propTypes = {
  parada: PropTypes.array.isRequired
};


export default Display;
