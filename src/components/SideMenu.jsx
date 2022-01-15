import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SideMenuCSS from '../styles/SideMenu.module.css';

function SideMenu({menuClass, handleClick}) {
  const {pathname} = useLocation();
  const history = useHistory();
  const menuOptions = ['Início', 'Sobre', 'Habilidades', 'Projetos', 'Contato']
  const paths = ['/', '/sobre', '/habilidades', '/projetos', '/contato'];

  const handleClickMenuOption = (index) => {
    history.push(paths[index]);
    handleClick();
  };

  return (
    <aside className={`${SideMenuCSS.sidebar_menu} ${menuClass ? SideMenuCSS.show : ''}`}>
    {/* <aside className={`sidebar-menu ${menuClass ? 'show' : ''}`}> */}
      <header>
        <div className={SideMenuCSS.sidebar_title_container}>
          <h2>Menu</h2>
        </div>
        <div className={SideMenuCSS.close_button} onClick={handleClick}>
          <span>X</span>
        </div>
      </header>
      <nav className={SideMenuCSS.nav_container}>
        {
          menuOptions.map((option,index) => (
            <button
              key={option}
              disabled={pathname === paths[index]}
              onClick={() => handleClickMenuOption(index)}
            >
              {option}
            </button>
          ))
        }
      </nav>
    </aside>
  )
}

export default SideMenu;
