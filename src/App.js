import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import shoes1 from "./img/shoes1.jpg";
import shoes2 from "./img/shoes2.jpg";
import shoes3 from "./img/shoes3.jpg";
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import ShoeItems from './shoesitems';

function App() {

  let [shoes] = useState(data);
  const img = [shoes1, shoes2, shoes3];

  return (
    <div>

    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className="container">
        <div className="row">
          <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>
          {shoes.map((shoe, index) => (
            <ShoeItems
              key = {index}
              imgLink = {img[index]}
              title = {shoe.title}
              price = {shoe.price}
            />
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;