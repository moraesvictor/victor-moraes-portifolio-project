import React from 'react';
import Perfil from '../perfilImage2.jpg';

// import { Container } from './styles';

function IntroAboutMe() {
  return (
    <section className="intro-about-me">
       <img
        src={Perfil}
        alt="foto-perfil"
        className="profile-img"
        />
        <h1>Here You can read a little bit about me.</h1>
        <h3>My Name is Victor I'm 27 yo and I'm a front-end
           Developer and also a Back-end stundent at trybe.<br/>
           I speak three different languages: Portuguese, my mother's tongue, Italian and english.
           I'd studied one year college in USA, and also three months in Italy. 
           There I was able to create a good professional and personal relation with people. 
           Right now, I'm looking foward to improve my carrier and also develop myself.</h3>
        <h3>The technologies that I use the most are: React JS, JavaScript, HTML and CSS.
          I love chalenge myself every day and I believe that way is the path to become
          a person which can trasnform the world and build a better future to us all.
        </h3>
      </section>
  );
}

export default IntroAboutMe;