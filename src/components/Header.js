import React from 'react';
// import Typed from 'react-typed';

// import { Container } from './styles';

function Header() {
  return(
      <div className="header-wrapper">
        <div className="main-info">
          <h1>Web Development and WebSite Promotions</h1>
          <h3>React JS | JavaScript | Redux | Hooks | Software Development</h3>
          {/* <Typed 
          className="typed-text"
          strings={["Web Design", "Web Development", "React JS", "Redux", "Hooks", "Software Developer"]}
          typeSpeed={60}
          backSpeed={60}
          loop          
          /> */}
          <a href="/" className="btn-main-offer">Contact me</a>
        </div>
      </div>
  );
}

export default Header;