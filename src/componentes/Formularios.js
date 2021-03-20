import { useContext } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import Buscador from "./Buscador";
import BuscadorLinea from "./BuscadorLinea";

const Formularios = () => {
  const ocultarFrase = useContext(GeneralContext);
  return (
    <section className="forms">
      <Buscador />
      <BuscadorLinea />
    </section>
  );
};

export default Formularios;
