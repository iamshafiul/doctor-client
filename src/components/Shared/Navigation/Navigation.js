import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link mr-2" to="/home">Home</Link>
            <Link className="nav-link mr-2" to="/appointment">Appointment</Link>
            <Link className="nav-link mr-2" to="/dashboard">Dashboard</Link>
            <Link className="nav-link mr-2 text-white" to="/admin">Admin</Link>
            <Link className="nav-link mr-2 text-white" to="/blogs">Blogs</Link>
            <Link className="nav-link mr-2 text-white" to="/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;