import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './styles/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/storymap');
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/storymap" className="nav-title">Story Map</Nav.Link>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <Nav.Link as={Link} to="/login" className="nav-link" onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
