import { useContext, useState } from "react";
import ParadaContext from "../Contexts/ParadaContext";
import GeneralContext from "../Contexts/GeneralContext";

const Buscador = () => {
  const { setParadaBuscada } = useContext(ParadaContext);
  const { setOcultarFrase } = useContext(GeneralContext);
  const [busqueda, setBusqueda] = useState("");

  const modificaParadaBuscada = e => {
    setBusqueda(e.target.value);
  };

  const buscarParada = e => {
    e.preventDefault();
    setParadaBuscada(busqueda);
  };


  return (
    <form onSubmit={buscarParada}>
      <label htmlFor="num-parada">{buscarParada ? "Parada nº" : ""} </label>
      <input type="number" id="num-parada" onChange={modificaParadaBuscada} />
      <button type="submit" onClick={setOcultarFrase(true)}>Buscar</button>
    </form>);
};

export default Buscador;


