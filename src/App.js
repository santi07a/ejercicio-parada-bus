import { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Display from "./componentes/Display";
import Formularios from "./componentes/Formularios";
import TiempoLinea from "./componentes/TiempoLinea";
import Titular from "./componentes/Titular";
import useFetch from "./hooks/useFetch";
import paradaAPI from "./parada.json";
import GeneralContext from "./Contexts/GeneralContext";
import Parada from "./Paginas/Parada";
import Linea from "./Paginas/Linea";
import NotFound from "./Paginas/NotFound";

function App() {
  const [paradaBuscada, setParadaBuscada] = useState("");
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const { datos: existeParada, pedirDatos: pedirExisteParada } = useFetch();
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  const [linea, setLinea] = useState("");
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    pedirExisteParada(`https://api.tmb.cat/v1/transit/parades/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
  }, [paradaBuscada, pedirExisteParada, pedirParada]);
  useEffect(() => {
    if (existeParada) {
      pedirParada(`https://api.tmb.cat/v1/ibus/stops/${paradaBuscada}?app_id=61904654&app_key=11d3b02f2f8b89d769d4ea6f88aa3ae5`);
    }
  }, [paradaBuscada, existeParada, pedirParada]);

  return (
    <Router>
      <GeneralContext.Provider value={{ linea, parada, ocultarFrase, tiempo, paradaBuscada, existeParada, setParadaBuscada, setLinea, setOcultarFrase, setTiempo }}>
        <Switch>
          <Route path="/parada" exact>
            <Parada />
          </Route>
          <Route path="/linea/">
            <Linea />
          </Route>
          <Route path="/" exact>
            <Redirect to="/parada" />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </GeneralContext.Provider>
    </Router>
  );
}

export default App;
