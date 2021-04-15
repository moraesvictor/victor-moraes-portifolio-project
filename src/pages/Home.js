import React from 'react'
import Particles from 'react-particles-js';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
function Home() {
  return (
    <>
    <Particles 
    params={{
      particles: {
        number: {
          value: 30,
          density: true,
          value_area: 900,
        }
      },
      shape: {
        type: "square",
        stroke: {
          width: 8,
          color: "#f14709"
        }
      }
    }}
    />
    <NavBar />
    <Header />
    </>
  );
}

export default Home;
