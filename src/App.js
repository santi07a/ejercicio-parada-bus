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
  const [linea, setLinea] = useState("");
  const [tiempo, setTiempo] = useState(0);

  return (
    <Router>
      <GeneralContext.Provider value={{ linea, ocultarFrase, tiempo, paradaBuscada, setParadaBuscada, setLinea, setOcultarFrase, setTiempo }}>
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
