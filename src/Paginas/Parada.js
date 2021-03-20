import Display from "../componentes/Display";
import Formularios from "../componentes/Formularios";
import TiempoLinea from "../componentes/TiempoLinea";
import Titular from "../componentes/Titular";

const Parada = () => {
  return (
    <div className="contenedor">

      <header className="cabecera">
        <Titular />
        {/*  <Display /> */}
        <TiempoLinea />
      </header>
      <Formularios />
    </div >
  );
};

export default Parada;
