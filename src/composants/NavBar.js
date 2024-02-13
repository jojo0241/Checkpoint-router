import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, Link } from "react-router-dom";
import UserForm from './UserForm';
import Films from '../Films';

function NavBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <img
              alt=""
              src="/Netflix.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;&nbsp;&nbsp;<Navbar.Brand href="#home">NetFlix</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/composants/Films">Liste des Films</Nav.Link>
              <Nav.Link href="/composants/UserForm">Ajouter Un film</Nav.Link>
              
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
           
        </Navbar>
        <Routes>
      
              <Route path="/composants/UserForm" element={<UserForm />} />
              <Route path="/composants/Films" element={<Films />} />
     </Routes>
        
      </>
    );
  }
  
  export default NavBar;