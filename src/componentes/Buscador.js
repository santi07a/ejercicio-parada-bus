import PropTypes from "prop-types";

const Buscador = props => {
  const { paradaBuscada, setParadaBusqueda } = props;

  /*  const paradaIngresada = (e) => {
     setParadaBusqueda(e.target.value);
   };
   const submitParada = (e) => {
     e.preventDefault();
     setParadaBusqueda(paradaBuscada);
   };
   return (
     <form onSubmit={submitParada}>
       <label htmlFor="num-parada">Parada nº: </label>
       <input type="number" id="num-parada" onChange={paradaIngresada} />
       <button type="submit">Buscar</button>
     </form>); */
  return (
    <h3>Hola</h3>
  );
};

Buscador.propTypes = {
  paradaBuscada: PropTypes.string.isRequired,
};

export default Buscador;


