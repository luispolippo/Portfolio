import React from 'react';
import HamburguerMenuCSS from '../styles/HamburguerMenu.module.css';

function HamburguerMenu({handleClick}) {
  return (
    <div className={HamburguerMenuCSS.hamburguer_menu} onClick={handleClick}>
      <span />
      <span />
      <span />
    </div>
  )
}

export default HamburguerMenu;
