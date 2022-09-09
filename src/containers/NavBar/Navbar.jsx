import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export function NavBar({phones}) {

  return (
      <div>
        <Navbar fixed='top' bg="light" expand="lg">
          <Container fluid>
            <Link to="/">
            <FontAwesomeIcon icon={faPlus} />
            </Link>         
            <Navbar.Brand href="#">Phone Catalog</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className='links' to="/">home</Link>  
                <Link className='links' to="/favorites/">Favorites</Link>
                <NavDropdown title="Brands" id="navbarScrollingDropdown">
                  { phones.map(phone=>(
                    <div key={phone.id}>
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
