
import React from 'react'
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
import logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <div>
 
  <Navbar variant="light" bg="info" expand="lg">
  <Container fluid>
       <img className ="logo" src={logo} alt="" />
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
     
      <Nav className="me-auto">
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/courses">COURSES</Nav.Link>
        <Nav.Link href="/login">LOGIN</Nav.Link>
        {/* <Nav.Link href="">REGISTER</Nav.Link> */}
        <NavDropdown title="REGISTER" id="basic-nav-dropdown">
          <NavDropdown.Item href="/studentenroll">Register as Student</NavDropdown.Item>
          <NavDropdown.Item href="/employenroll">Register as Employer</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/allstudents">ALL STUDENTS</Nav.Link>
        <Nav.Link href="/empapprove">EMPLOYEE APPROVAL</Nav.Link>
        <Nav.Link href="/emp-update">EMPLOYEES</Nav.Link>
        <Nav.Link href="/search">SEARCH</Nav.Link>
        <Nav.Link href="/">LOGOUT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header;