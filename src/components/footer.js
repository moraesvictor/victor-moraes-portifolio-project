import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

// import { Container } from './styles';

function Footer() {
  return(
    <footer className="footer">
      <a 
      href="https://github.com/moraesvictor">
      <FontAwesomeIcon icon={ faGithub } size="2x"/>
      </a>
      <a
      href="https://www.linkedin.com/in/victor-moraes-88b81b1b8/"
      >
      <FontAwesomeIcon icon={ faLinkedin } size="2x"/>
      </a>
      <a href="https://www.facebook.com/victor.moraes.315">
      <FontAwesomeIcon icon={ faFacebook } size="2x"/>
      </a>
      <p>moraesvictorgk@gmail.com</p>
    </footer>
  );
}

export default Footer;