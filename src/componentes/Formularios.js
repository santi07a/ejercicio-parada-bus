import { useContext } from "react";
import ParadaContext from "../Contexts/ParadaContext";
import Buscador from "./Buscador";
import BuscadorLinea from "./BuscadorLinea";

const Formularios = () => {
  const { parada, existeParada } = useContext(ParadaContext);
  return (
    <section className="forms">
      <Buscador />
      {(existeParada && existeParada.numberMatched === 1 && parada) && <BuscadorLinea />}
    </section>
  );
};

export default Formularios;
