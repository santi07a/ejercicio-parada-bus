import { useContext, useEffect, useState } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import { lineaType } from "../types/lineaType";
import Lineas from "./Lineas";
import paradaAPI from "../parada.json";

const Display = () => {
  /*   const { parada } = useContext(ParadaContext); */
  const { data: { ibus: parada } } = paradaAPI;
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

export default Display;
