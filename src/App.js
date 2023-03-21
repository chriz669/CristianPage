import React from 'react';
import { Container,  Button } from 'react-bootstrap';
import { Spring } from 'react-spring';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextoAutomatico from './TextoAutomatico';
import NavigationBar from './navbar';
import UncontrolledExample from './carousel';
import './index.css';

function App() {
  const [navbar, setNavbar] = React.useState(false);



  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setNavbar(true);
    } else {
      setNavbar(true);
    }
  };
  

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Router>
      <NavigationBar>
        <Routes>
          <Route exact path="/" element={<about/>}/>
          <Route exact path="/login" element={<studies/>}/>
          <Route exact path="/recovery-password" element={<portfolio/>}/>
        </Routes>
      </NavigationBar>
    </Router>

      <Container className="mt-5">
        <Spring
          from={{ opacity: 0, marginTop: -100, width: '0%' }}
          to={{ opacity: 1, marginTop: 0, width: '100%' }}
          config={{ duration: 1000 }}
        >
        {(props) => (
          <div className="portada" style={props}>
            <div className="portada-container">
              <div className="bienvenida">
                <TextoAutomatico />
              </div>
            </div>
        </div>
        )}
        </Spring>
        <Spring
          from={{ opacity: 0, marginTop: -100 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <section id="about">
                <h2>Sobre mí</h2>
                <p>¡Hola! Soy Cristian, un desarrollador web apasionado por la tecnología y las matemáticas. Me encanta crear soluciones elegantes y eficientes para problemas complejos, y siempre estoy buscando aprender algo nuevo. En mi tiempo libre, me gusta leer libros de ciencia ficción y tocar la guitarra.</p>
              </section>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, marginTop: -100 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ duration: 1000, delay: 500 }}
        >
          {(props) => (
            <div style={props}>
              <section id="studies">
                <h2>Estudios</h2>
                <ul>
                  <li>Ingeniería en Sistemas - Universidad Nacional de Colombia</li>
                  <li>Maestría en Ciencias de la Computación - Universidad de los Andes</li>
                </ul>
              </section>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0, marginTop: -100 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ duration: 1000, delay: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <section id="portfolio">
                <h2>Portafolio</h2>
                
              </section>
              <UncontrolledExample/>
            </div>
          )}
        </Spring>
      </Container>
    </div>
  );
}

export default App;

