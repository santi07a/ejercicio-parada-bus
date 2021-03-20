import { useContext, useState } from "react";
import GeneralContext from "../Contexts/GeneralContext";

const Buscador = () => {
  const { setOcultarFrase, parada, paradaBuscada, existeParada, setParadaBuscada } = useContext(GeneralContext);
  const [busqueda, setBusqueda] = useState("");

  const modificaParadaBuscada = e => {
    setParadaBuscada(e.target.value);
  };

  const buscarParada = e => {
    e.preventDefault();
    if (existeParada.numberMatched === 1) {
      setOcultarFrase(false);
      setParadaBuscada(paradaBuscada);
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


