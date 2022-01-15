import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Backdrop from './components/Backdrop';
import HamburguerMenu from './components/HamburguerMenu';
import SideMenu from './components/SideMenu';
import Abilities from './pages/Abilities';
import Sobre from './pages/Sobre';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './styles/App.css';

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenuClick = () => {
    setIsShowMenu(true);
  }

  const handleCloseMenuClick = () => {
    setIsShowMenu(false);
  }

  return (
      <>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/projetos" component={ Projects } />
          <Route path="/sobre" component={ Sobre } />
          <Route path="/contato" component={ Contact } />
          <Route path="/habilidades" component={Abilities} />
        </Switch>
        <HamburguerMenu handleClick={handleMenuClick}/>
        <SideMenu menuClass={isShowMenu} handleClick={handleCloseMenuClick}/>
        {
          isShowMenu && <Backdrop />
        }
      </>
  );
}

export default App;
