import React from 'react'
import {Nav, Navbar} from "react-bootstrap";

class MainNav extends React.Component {

    render() {
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">MAES MIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#aboutUs">About Us</Nav.Link>
                            <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="https://mymaes.org/" target="_blank">MAES National</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default MainNav;
