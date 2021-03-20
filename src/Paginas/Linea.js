const Linea = () => {
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h2>Bus 109 - Hospital Clínic / Polígon Zona Franca</h2>
        <h3>Polígon Zona Franca -{">"} Hospital Clínic</h3>
        <a href="/">Volver a la portada</a>
      </header>
      <section>
        <ul className="grafico-paradas">
          <li className="parada">Parada nº X: Nombre parada (<a href="/">ver mapa</a>)</li>
          <li className="parada">Parada nº 1741: Cotxeres TB Zona Franca (<a href="/">ver mapa</a>)</li>
          <li className="parada">Parada nº 1045: Pg Zona Franca - Motors (<a href="/">ver mapa</a>)</li>
          <li className="parada">Parada nº 1615: Carrer número 4 - Carrer D (<a href="/">ver mapa</a>)</li>
          <li className="parada">Parada nº 1639: Carrer A- Comissaria Portuària (<a href="/">ver mapa</a>)</li>
          <li className="parada">Parada nº 1643: Mercabarna - Mercat del Peix (<a href="/">ver mapa</a>)</li>
        </ul>
      </section>
    </div>
  );
};

export default Linea;
