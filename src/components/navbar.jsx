import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      < Link to="/home" className="navbar-brand">
      <Navbar.Brand className="mx-auto">Story Map</Navbar.Brand>
      </ Link >
    </Navbar>
  );
};

export default NavBar;
