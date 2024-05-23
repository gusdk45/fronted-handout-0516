import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import data from './data';
import Card from './Card';

function App() {

  let [shoes] = useState(data);

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
        {
          shoes.map((a,i)=>{
          return(
            <Card shoes={shoes[i]} i ={i+1}></Card>
          )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;