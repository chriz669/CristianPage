import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'rsuite';
import { Affix } from 'rsuite';


function NavigationBar() {
  const navbarAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Affix offsetTop={0}>
      <animated.nav className="navbar" style={navbarAnimation} bg="dark" variant="dark" expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">Cristian Villamil</Navbar.Brand>
          
            <Nav className="me-auto">
              <Nav.Link href="#about">Sobre mí</Nav.Link>
              <Nav.Link href="#studies">Estudios</Nav.Link>
              <Nav.Link href="#portfolio">Portafolio</Nav.Link>
            </Nav>
          
        </Container>
      </animated.nav>
    </Affix>
  );
}


export default NavigationBar;