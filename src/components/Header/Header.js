import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='sticky-top'>
      {['md'].map((expand) => (
        <Navbar key={expand} variant='dark' expand={expand}>
          <Container>
            <Link className='nav-link' to='/'><Navbar.Brand>Bicycle World</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bicycle World
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/purchase'>Purchase</Link>
                  <Link className='nav-link' to='/login'>Login</Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header;