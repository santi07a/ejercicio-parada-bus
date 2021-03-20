import { useContext } from "react";
import { Route } from "react-router";
import GeneralContext from "../Contexts/GeneralContext";
import NotFound from "./NotFound";

const Linea = () => {
  const { parada, existeParada } = useContext(GeneralContext);

  if (!parada || !existeParada) {

    return <Route path="*" exact>
      <NotFound />
    </Route>;
  } else {
    const bus = parada.data.ibus;
    const inicioYDestino = existeParada.features[0].properties.DESC_PARADA;
    const nombreParada = existeParada.features[0].properties.NOM_PARADA;
    return (

      <div className="contenedor">
        <header className="cabecera">
          <h2>Bus {bus.line} - {inicioYDestino}</h2>
          <h3>{nombreParada}</h3>
          <a href="./Parada">Volver a la portada</a>
        </header>
        <section>
          {/*   <ul className="grafico-paradas">
            {existeParada.features.map(
              parada => <li className="parada">Parada nº {parada}: {nombreParada} (<a href="/">ver mapa</a>)</li>
            )}
          </ul> */}
        </section>
      </div>
    );
  };
};

export default Linea;
