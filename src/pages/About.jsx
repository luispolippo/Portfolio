import React from 'react';
import AboutCSS from '../styles/About.module.css';

function Sobre() {
  return (
    <main className='main'>
      <header className='header'>
        <h1>Sobre</h1>
      </header>
      <div className={AboutCSS.text_container_sobre}>
        <p>Olá, me chamo Guilherme, tenho 27 e moro em Canoas-RS.</p>
        <p>Sempre fui apaixonado por tecnologia e em 2019 comecei meus estudos.
        Hoje sou formando em Análise de Sistemas e estudo Desenvolvimento Web na Trybe</p>
        <p>Acredito que somente a educação pode mudar o mundo!</p>
      </div>
    </main>
  )
}

export default Sobre;
