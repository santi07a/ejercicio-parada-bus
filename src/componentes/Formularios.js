import Buscador from "./Buscador";
import TiempoRestante from "./TiempoRestante";
import PropTypes from "prop-types";

const Formularios = props => {
  const { datos, paradaBuscada, setParadaBuscada } = props;

  return (
    <section className="forms">
      <Buscador paradaBuscada={paradaBuscada} setParadaBuscada={setParadaBuscada} />
      <TiempoRestante />
    </section>
  );
};

Formularios.propTypes = {
  datos: PropTypes.array.isRequired,
  paradaBuscada: PropTypes.string.isRequired,
};

export default Formularios;
