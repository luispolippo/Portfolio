import React from 'react'
import HtmlLogo from '../images/logos/html_5.svg';
import CssLogo from '../images/logos/css_3.svg';
import JsLogo from '../images/logos/js.svg';
import GitLogo from '../images/logos/git.svg';
import ReactLogo from '../images/logos/react.svg';
import ReduxLogo from '../images/logos/redux.svg';
import NpmLogo from '../images/logos/npm.svg';
import VsCodeLogo from '../images/logos/vs_code.svg';
import JavaLogo from '../images/logos/java.svg';
import KotlinLogo from '../images/logos/jb_kotlin.svg';
import LinuxLogo from '../images/logos/linux.svg'
import UbuntuLogo from '../images/logos/ubuntu.svg';
import MintLogo from '../images/logos/linux-mint.svg';
import AbilitiesCSS from '../styles/Abilities.module.css';

function Abilities() {

  const logos = [HtmlLogo, CssLogo, JsLogo, ReactLogo, ReduxLogo, NpmLogo, GitLogo, VsCodeLogo, JavaLogo, KotlinLogo, LinuxLogo, UbuntuLogo, MintLogo];

  return (
    <main className='main'>
    <header className='header'>
      <h1>Habilidades</h1>
    </header>
    <div className={AbilitiesCSS.icons_abilities}>
      {
        logos.map((logo) => (
          <img key={logo} src={logo} alt={`${logo} logo`}/>
        ))
      }
    </div>
  </main>
  )
}

export default Abilities;
