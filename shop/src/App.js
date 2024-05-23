import { useState } from "react";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import bg from './img/bg.png';
import { data } from './data.js';

function Card({ shoe, index }) { 
  return (
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (index + 1) + ".jpg"} width="80%" alt="shoe"></img>
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </div>
  );
}

function App() {
  let [shoes] = useState(data);

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
          {
            shoes.map((shoe, i) => (
              <Card shoe={shoe} index={i} key={i}/> 
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
