import React from 'react';
import Logo from '../whatsApp3.png'

// import { Container } from './styles';

function ContactsBody() {
  return (
      <div className="contact-body">
      <h1>Contact</h1>
      <h2>If you like it, contact me at the numbers below and check my Portifolio
          to watch some of my finished projects.</h2>
      <img src={Logo} alt="logoWhatsApp" width="60px"/>
      <h2>+55-11-99303-0267</h2>
      
       
      </div>
  );
}

export default ContactsBody;