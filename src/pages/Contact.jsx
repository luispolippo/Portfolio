import React from 'react'
import GithubIcon from '../images/GithubIcon.svg';
import FacebookIcon from '../images/FacebookIcon.svg';
import GoogleIcon from '../images/GoogleIcon.svg';
import LinkedInIcon from '../images/LinkedInIcon.svg';
import InstagramIcon from '../images/InstagramIcon.svg';
import TwitterIcon from '../images/TwitterIcon.svg';
import MailIcon from '../images/MailIcon.svg';
import ContactCSS from '../styles/Contact.module.css';

function Contact() {
  return (
    <main className='main'>
      <header className='header'>
        <h1>Contatos</h1>
      </header>
      <div className={ContactCSS.icons_contact}>
        <a href='https://github.com/luispolippo'>
          <img src={GithubIcon} alt="Github"/>
        </a>
        <a href='https://www.facebook.com/luis.polippo'>
          <img src={FacebookIcon} alt="Facebook"/>
        </a>
        <a href='mailto:luisguilhermepolippo@gmail.com'>
          <img src={GoogleIcon} alt="Google"/>
        </a>
        <a href='https://www.linkedin.com/in/guilhermepolippo/'>
          <img src={LinkedInIcon} alt="LinkedIn"/>
        </a>
        <a href='https://www.instagram.com/guilhermepolippo/'>
          <img src={InstagramIcon} alt="Instagram"/>
        </a>
        <a href='https://twitter.com/GuilhermePolip1'>
          <img src={TwitterIcon} alt="Twitter"/>
        </a>
        <a href='mailto:luispolippo@hotmail.com'>
          <img src={MailIcon} alt="Mail" />
        </a>
      </div>
    </main>
  )
}

export default Contact;
