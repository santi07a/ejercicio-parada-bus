import { useContext, useEffect } from "react";
import { Route, useParams } from "react-router";
import GeneralContext from "../Contexts/GeneralContext";
import NotFound from "./NotFound";
import useFetch from "../hooks/useFetch";
import ParadaContext from "../Contexts/ParadaContext";

const Linea = () => {
  let { id } = useParams();
  const { datos: datosParadasLinea, pedirDatos: pedirParadasLinea } = useFetch();
  const urlId = `https://api.tmb.cat/v1/transit/linies/bus/${id}/parades${process.env.REACT_APP_API_KEY} `;
  console.log(id);
  useEffect(() => {
    pedirParadasLinea(urlId);
  }, [urlId, pedirParadasLinea]);
  console.log(datosParadasLinea);
  return (
    datosParadasLinea ?
      <>
        <header className="cabecera">
          <h2>{/* Bus {id} - Hospital Clínic / Polígon Zona Franca */}</h2>
          <h3>{/* Polígon Zona Franca -{">"} Hospital Clínic */}</h3>
          <a href="/*">{/* Volver a la portada */}</a>
        </header>
        <section>
          <ul className="grafico-paradas">
            {datosParadasLinea.features.map(parada =>
              <li key={parada.id} className="parada">Parada nº {parada.properties.CODI_PARADA}: {parada.properties.NOM_PARADA}
                &nbsp;(<a href={`http://maps.google.com/maps?z=19&t=m&q=loc:
                  ${parada.geometry.coordinates[1]}+${parada.geometry.coordinates[0]}`}>ver mapa
                </a>)
              </li>)}
          </ul>
        </section>
      </> : <p>cargando</p>
  );
};

export default Linea;
