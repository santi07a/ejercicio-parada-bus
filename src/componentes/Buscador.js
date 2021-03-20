import { useContext, useState } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const Buscador = () => {
  const { setOcultarFrase, parada, paradaBuscada, setParadaBuscada } = useContext(GeneralContext);
  const [busqueda, setBusqueda] = useState("");

  const modificaParadaBuscada = e => {
    setBusqueda(e.target.value);
  };

  const buscarParada = e => {
    e.preventDefault();
    if (parada) {
      if (parada.numberMatched === 0) {
        setParadaBuscada(`${paradaBuscada} no existe`);
      } else {
        setParadaBuscada(busqueda);
        setOcultarFrase(false);
      }
    }
  };

  return (
    <form onSubmit={buscarParada}>
      <label htmlFor="num-parada">{buscarParada ? "Parada nº" : ""} </label>
      <input type="number" id="num-parada" onChange={modificaParadaBuscada} />
      <button type="submit">Buscar</button>
    </form>);
};

export default Buscador;


