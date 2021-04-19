import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
// import { Container } from './styles';

function ContactsBody() {
  return (
      <div className="contact-body">
      <h1>Contact</h1>
      <h2>If you like it, contact me at the numbers below and check out my Portifolio
          to watch some of my finished projects.</h2>
      <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      <h2>+55-11-99303-0267</h2>
      <FontAwesomeIcon icon={ faGoogle } size="3x" />
      <h2>email:moraesvictorgk@gmail.com</h2>
      
       
      </div>
  );
}

export default ContactsBody;