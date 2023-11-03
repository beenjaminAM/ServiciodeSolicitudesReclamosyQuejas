//import Header from './components/Header';
import Nav from './components/Nav';
import Home from './Home';
import About from './components/About';
import Missing from './components/Missing';
import {useState} from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Sidebar from './components/Sidebar';

//import sidebar modules y estilos
import './components/elements/Bar/sidebar.css'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme} from 'antd'
import Logo from './components/elements/Bar/Logo'
import MenuList from './components/elements/Bar/MenuList'
import ToggleThemeButton from './components/elements/Bar/ToggleThemeButton'


import FormRQS from './components/formulariosrqs/FormRQS';
import TablaReclamo from './components/tablasrqs/TablaReclamo';

import reclamos from './data/reclamos';

//Componentes Sidebar
const {Header, Sider} = Layout

function App() {
  
  // Sidebar Responsive
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: {colorBgContainer},
  } = theme.useToken()

  const  toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

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
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{padding: 0, background: colorBgContainer }}>
            <Button
              type='text'
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ?
                <MenuUnfoldOutlined /> :
                <MenuFoldOutlined />
              }

            />
          </Header>
          <h1>Tabla</h1>
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
          
        </Layout>
      {/* <Form
        reqType={reqType}
        setReqType={setReqType}
      /> */}
      {/* comentario=<List items={items} />  */}


      </Layout>





      {/* 
      <Header title={"Modulo de Solicitudes y Reclamos"}/>
      <Nav />
      <button onClick={handleSidebarOpen}>Abrir Sidebar</button>
      <Sidebar open={isSidebarOpen} onClose={handleSidebarClose} />
      */}

    </div>
  );
}

export default App;
