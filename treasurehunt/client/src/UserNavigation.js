import React ,{useState}from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function UserNavigation(){
  return (
        <Navbar collapseOnSelect expand="lg" className="sh p-1 gradiating fixed-top">
       <Container>
         <Navbar.Brand href="/" className="">
         <img src={require("./treasure.jpg")} width="80px"></img>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="/" className="">Home</Nav.Link>
             <Nav.Link href="/login" className="rfix">Logout</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
  );
}

export default UserNavigation;