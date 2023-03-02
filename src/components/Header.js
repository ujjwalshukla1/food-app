import React from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   <div>
    <Navbar bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <Image src="https://png.pngtree.com/png-vector/20220731/ourmid/pngtree-fast-food-machine-icon-png-image_5658252.png" width="90" height="80" alt="logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
   </div>
  );
}

export default Header;
