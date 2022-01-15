import React from 'react'
import GithubIcon from '../images/GithubIcon.svg';
import FacebookIcon from '../images/FacebookIcon.svg';
import GoogleIcon from '../images/GoogleIcon.svg';
import LinkedInIcon from '../images/LinkedInIcon.svg';
import HomeCSS from '../styles/Home.module.css'

function Home() {

  return (
    <main className='main'>
      <header className={HomeCSS.header_home}>
        <h1>Guilherme Polippo</h1>
        <h2>Desenvolvedor Web.</h2>
      </header>
      <div className={HomeCSS.phrases_container}>
        <p>Amante de tecnologia</p>
        <p>Estudante de Desenvolvimento Web</p>
        <p>Sempre aprendendo</p>
      </div>
      <div className={HomeCSS.icons_container}>
        <a href='https://github.com/luispolippo'>
          <img src={GithubIcon} alt="Github" />
        </a>
        <a href='https://www.facebook.com/luis.polippo'>
          <img src={FacebookIcon} alt="Github"/>
        </a>
        <a href='mailto:luisguilhermepolippo@gmail.com'>
          <img src={GoogleIcon} alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/guilhermepolippo/">
          <img src={LinkedInIcon} alt="Github"/>
        </a>
      </div>
      </main>
  )
}

export default Home;
