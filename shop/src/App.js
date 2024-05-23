import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { shopInfo } from './data.js';

function Card(props) {
  return (
    <>
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%"></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
    </>
  );
}

function App() {
  const [shoes] = useState(shopInfo);

  return (
    <div className="App">
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

      <div className="main-bg"></div>
      
      <div className='container'>
        <div className='row'>
          {shoes.map((a,i) => {
            return (
              <Card shoes={shoes} i={i}></Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
