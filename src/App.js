import Header from './components/Header';
import Nav from './components/Nav';
import Home from './Home';
import About from './components/About';
import Missing from './components/Missing';
import {useState} from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Sidebar from './components/Sidebar';

import FormRQS from './components/formulariosrqs/FormRQS';
import TablaReclamo from './components/tablasrqs/TablaReclamo';

import reclamos from './data/reclamos';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [reclamosLista, setReclamosLista] = useState(reclamos)

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Header title={"Modulo de Solicitudes y Reclamos"}/>
      <Nav />
      <button onClick={handleSidebarOpen}>Abrir Sidebar</button>
      <Sidebar open={isSidebarOpen} onClose={handleSidebarClose} />
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/formularioRQS">
          <FormRQS  />
        </Route>
        <Route exact path="/Reclamos">
          <TablaReclamo  filas={reclamosLista}/>
        </Route>

        <Route exact path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
    </div>
  );
}

export default App;
