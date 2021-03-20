import { useContext, useEffect, useState } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import { lineaType } from "../types/lineaType";
import Lineas from "./Lineas";
import paradaAPI from "../parada.json";
import ParadaContext from "../Contexts/ParadaContext";

const Display = () => {
  const { parada } = useContext(ParadaContext);
  const [posicion, setPosicion] = useState(0);
  useEffect(() => {
    if (parada.data.ibus.length > 0) {
      setInterval(() => {
        setPosicion((position) => {
          if (position !== -(30 * (parada.data.ibus.length - 1))) {
            return position - 30;
          } else {
            return 0;
          }
        });
      }, 2000);
    }
  }, [parada.data.ibus.length]);

  return (
    <div className="display">
      {parada.data.ibus.map(linea => <Lineas key={linea.routeId} linea={linea} posicion={posicion}></Lineas >)}
    </div>
  );
};

export default Display;
