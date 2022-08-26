import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Pet-A-Pedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <NavDropdown title="Pets" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/pets">My Pets</NavDropdown.Item>
                            <NavDropdown.Item href="/random">
                                Random Pet
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/new">New Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/liked">
                                Favorites
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" onClick={() => {
                            localStorage.removeItem("PAP_user")
                            navigate("/", { replace: true })
                        }}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



    // Second way I tried this
/* <Nav variant="tabs" activeKey="1">
       <Nav.Item>
           <Nav.Link eventKey="1" name="Profile" href="/profile">
               Profile
           </Nav.Link>
       </Nav.Item>
       <Nav.Item>
           <Nav.Link eventKey="2" name="My Pets" href="/pets">
               My pets
           </Nav.Link>
       </Nav.Item>
       <Nav.Item>
           <Nav.Link eventKey="3" name="New Profile" href="/new">
               New profile
           </Nav.Link>
       </Nav.Item>
       <Nav.Item>
           <Nav.Link eventKey="4" name="Home" href="/">
               Home
           </Nav.Link>
       </Nav.Item>
       <Nav.Item>
           {
               <Nav.Link eventKey="5" name="Logout" href="" onClick={() => {
                   localStorage.removeItem("PAP_user")
                   navigate("/", { replace: true })
               }}>
                   Logout
               </Nav.Link>}
       </Nav.Item>
   </Nav>
);*/

    // old return statement, pre-bootstrap
/* return (
    <ul>
        <li className="navbar__item active">
            <Link className="navbar__link" to="/profile">Profile</Link>
        </li>
        <li className="navbar__item active">
            <Link className="navbar__link" to="/pets">My Pets</Link>
        </li>
        <li className="navbar__item active">
            <Link className="navbar__link" to="/new">New Profile</Link>
        </li>
        <li className="navbar__item active">
            <Link className="navbar__link" to="/">Home</Link>
        </li>
        {
            localStorage.getItem("PAP_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("PAP_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
                : ""
        }
    </ul>
)
*/