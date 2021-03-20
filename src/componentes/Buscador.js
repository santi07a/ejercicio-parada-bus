import { useContext, useState } from "react";
import GeneralContext from "../Contexts/GeneralContext";
import ParadaContext from "../Contexts/ParadaContext";

const Buscador = () => {
  const { setOcultarFrase, setParadaBuscada } = useContext(GeneralContext);
  const { existeParada, paradaBuscada } = useContext(ParadaContext);
  const [busqueda, setBusqueda] = useState("");

  const modificaParadaBuscada = e => {
    setBusqueda(e.target.value);
  };

  const buscarParada = e => {
    e.preventDefault();
    setParadaBuscada(busqueda);
    if (existeParada && (existeParada.numberMatched === 1)) {
      setOcultarFrase(false);
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


