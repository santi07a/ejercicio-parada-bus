import { useContext } from "react";
import ParadaContext from "../Contexts/ParadaContext";

const Buscador = () => {
  const { paradaBuscada, setParadaBuscada, setUrlBusqueda } = useContext(ParadaContext);

  const modificaParadaBuscada = e => {
    setParadaBuscada(e.target.value);
  };

  const buscarParada = e => {
    e.preventDefault();
  };


  return (
    <form onSubmit={buscarParada}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input type="number" id="num-parada" onChange={modificaParadaBuscada} />
      <button type="submit">Buscar</button>
    </form>);
};

export default Buscador;


