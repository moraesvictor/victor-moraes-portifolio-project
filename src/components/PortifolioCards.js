import React from 'react';
import { Card, Button } from 'react-bootstrap';
import StarWars from '../project-star-wars.png'
import TrybeWallet from '../trybe-wallet.png'
// import { Container } from './styles';

function PortifolioCards() {
  return(
  <div className="portifolio-page">
    <nav className="portifolio-cards">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={ StarWars } />
        <Card.Body>
          <Card.Title>Project StarWars</Card.Title>
          <Card.Text>
          Using React JS, Hooks and a StarWars API I was able to create a table
          describing all existents planets at the StarWars movies. The challenge
          in this project was to create a mechanism to filter all information present
          on website e through this filter show correctly all the informations asked 
          by the user.
          </Card.Text>
          <Button 
          variant="primary"
          href="https://github.com/tryber/sd-08-project-starwars-planets-search/pull/113/files"
          >
            Mais informações
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={ TrybeWallet } />
        <Card.Body>
          <Card.Title>Trybe Wallet</Card.Title>
            <Card.Text>
            Using React JS and Redux, I was able to create an wallet
            which can store and count all your costs.
            The challenge in this project was to use correctly 
            Redux and pass through it all the informations to acess,
            edit and remove the costs from the costs table.
            </Card.Text>
          <Button variant="primary">Mais informações</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Trybe wallet</Card.Title>
            <Card.Text>
              text...
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </nav>
  </div>
  );
}

export default PortifolioCards;