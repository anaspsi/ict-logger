import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
export default function PSINavbar({ onLoggedIn, userInfo }) {
    const navigate = useNavigate()
    function handleSignout() {
        if (confirm('Are you sure ?')) {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            }
            axios.delete(import.meta.env.VITE_APP_ENDPOINT + '/users/logout', config)
                .then((response) => {
                    localStorage.removeItem('token')
                    onLoggedIn(false)
                    navigate('/')
                }).catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
            <Container fluid>
                <Navbar.Brand href="#home">ICT Logger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link >About</Nav.Link>
                        </LinkContainer>
                        <Nav.Link onClick={handleSignout} title={'Bye ' + userInfo.name}>Sign out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}