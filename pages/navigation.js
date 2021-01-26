import {Container, Col, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function Navigation() {
    return (

    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img src="/images/mini.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <p className="nav-label mt-5">WORK</p>
                <Nav.Link href="#features">Subjects</Nav.Link>
                <Nav.Link href="#features">Portraits</Nav.Link>
                <Nav.Link href="#features">Landscapes</Nav.Link>
                <Nav.Link href="#features">Film</Nav.Link>

                <p className="nav-label mt-5">INFO</p>
                <Nav.Link href="#features">CV</Nav.Link>
                <Nav.Link href="#features">About/Contact</Nav.Link>


                <p className="copyright mt-5">© Muhammed Constantino 2021</p>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    )
  }