import { useState } from "react";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import bg from './img/bg.png';
import { data } from './data.js';
import Card from './card.js';  // Ensure the filename matches

function App() {
  let [shoes] = useState(data);

  const images = [
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg"
  ];

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>

      <div className="container">
        <div className="row">
          {shoes.map((shoe, index) => (
            <Card key={index} shoe={shoe} image={images[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
