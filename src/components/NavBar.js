import React from 'react';
import logo from '../navBarLogo.png';
// REACT FONT AWESOME IMPORT 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Container } from './styles';

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

    <a className="navbar-brand" href="/"><img className="logo" src={ logo } alt="logo" height="70px"/>Victor Moraes</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     < FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutme">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">How work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portifolio">Portifolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contacts">Contacts</a>
        </li>
      </ul>
    </div>
</div>
  </nav>
  );
}

export default NavBar;