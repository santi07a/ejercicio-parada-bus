import PropTypes from "prop-types";

const Buscador = props => {
  const { busquedaParada, idParada } = props;
  return (
    <form>
      <label htmlFor="num-parada">Parada nº: {busquedaParada} </label>
      <input type="number" id={`${idParada}`} />
      <button type="submit">Buscar</button>
    </form>);
};

Buscador.propTypes = {
  busquedaParada: PropTypes.number.isRequired,
  idParada: PropTypes.string,
};

export default Buscador;


