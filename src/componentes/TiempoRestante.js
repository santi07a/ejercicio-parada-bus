const TiempoRestante = props => {

  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea">
        <option value="">Elige línea</option>
      </select>
    </form>
  );
};

export default TiempoRestante;
