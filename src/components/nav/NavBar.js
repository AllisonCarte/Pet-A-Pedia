import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/home">Pet-A-Pedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <NavDropdown title="Pets" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/pets">My pets</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/new">
                                New Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" onClick={() => {
                            localStorage.removeItem("PAP_user")
                            navigate("/", { replace: true })
                        }}>Logout</Nav.Link>
                    </Nav>
                    <Button variant="outline-success" onClick={() => {
                        navigate("/search")
                    }}>Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
