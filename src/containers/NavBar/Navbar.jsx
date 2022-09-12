import React, { useContext } from 'react';
import './styles.css';
import smartphone from '../../assets/smartphone.png'
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Phones } from '../../context/PhoneContext';

export function NavBar() {
  const { phones } = useContext(Phones);

  return (
      <div>
        <Navbar fixed='top' bg="light" expand="lg">
          <Container fluid>
            <Link to="/">
              <img src={smartphone} className="App-logo" alt="logo" />
            </Link>         
            <Navbar.Brand href="#">Phone Catalog</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className='links' to="/">Home</Link>  
                <NavDropdown title="Brands" id="navbarScrollingDropdown">
                  { phones.map(phone=>(
                    <div className='link-container' key={phone.id}>
                      <Link className='dropdown-link'to={`/manufacturer/${phone.manufacturer}`}>{phone.manufacturer}</Link>
                    </div>
                    ))
                  }
                </NavDropdown>
              </Nav>
            </Navbar.Collapse> 
          </Container>
        </Navbar>
      </div> 
  )
}
