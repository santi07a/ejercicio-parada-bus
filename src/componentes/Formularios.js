import { useContext } from "react";
import ParadaContext from "../Contexts/ParadaContext";
import Buscador from "./Buscador";
import BuscadorLinea from "./BuscadorLinea";

const Formularios = () => {
  const { parada } = useContext(ParadaContext);
  return (
    <section className="forms">
      <Buscador />
      {parada && <BuscadorLinea />}
    </section>
  );
};

export default Formularios;
