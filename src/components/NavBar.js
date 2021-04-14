import React from 'react';
import logo from '../navBarLogo.png';
// import { Container } from './styles';

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

    <a className="navbar-brand" href="/"><img className="logo" src={ logo } alt="logo" height="70px"/>Victor Moraes</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">How work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Portifolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contacts</a>
        </li>
      </ul>
    </div>
</div>
  </nav>
  );
}

export default NavBar;