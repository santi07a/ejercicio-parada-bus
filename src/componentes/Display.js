import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { lineaType } from "../types/lineaType";
import Lineas from "./Lineas";

const Display = props => {
  const { parada } = props;
  const [posicion, setPosicion] = useState(0);

  useEffect(() => {
    if (parada.length > 0) {
      setInterval(() => {
        setPosicion((position) => {
          if (position !== -(30 * (parada.length - 1))) {
            return position - 30;
          } else {
            return 0;
          }
        });
      }, 2000);
    }
  }, [parada.length]);

  return (
    <div className="display">
      {parada.map(linea => <Lineas key={linea.routeId} linea={linea} posicion={posicion}></Lineas >)}
    </div>
  );
};

Display.propTypes = {
  parada: PropTypes.arrayOf(PropTypes.shape(lineaType)).isRequired
};

export default Display;
