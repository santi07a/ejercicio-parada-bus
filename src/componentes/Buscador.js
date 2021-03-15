import PropTypes from "prop-types";

const Buscador = props => {
  const { paradaBuscada, idParada } = props;
  return (
    <form>
      <label htmlFor="num-parada">Parada nº: {paradaBuscada} </label>
      <input type="number" id={`${idParada}`} />
      <button type="submit">Buscar</button>
    </form>);
};

Buscador.propTypes = {
  paradaBuscada: PropTypes.number.isRequired,
  idParada: PropTypes.string,
};

export default Buscador;


