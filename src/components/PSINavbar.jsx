import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
export default function PSINavbar({ onLoggedIn }) {
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
                        <Nav.Link onClick={handleSignout} >Sign out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
        //     <Container fluid>
        //         <Navbar.Brand href="#home">ICT Logger</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link onClick={() => onClickNav('home')}>Home</Nav.Link>
        //                 <Nav.Link onClick={() => onClickNav('about')}>About</Nav.Link>
        //                 <Nav.Link onClick={handleSignout} >Sign out</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        //     <Container fluid>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#features">Features</Nav.Link>
        //                 <Nav.Link onClick={() => onClickNav('about')}>Pricing</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Another action
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">
        //                         Separated link
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="#deets">More deets</Nav.Link>
        //                 <Nav.Link eventKey={2} href="#memes">
        //                     Dank memes
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">ICT Logger</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link className={selectedNav == 'home' ? 'nav-link active' : 'nav-link'} onClick={() => onClickNav('home')}>Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className={selectedNav == 'about' ? 'nav-link active' : 'nav-link'} onClick={() => onClickNav('about')}>About</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#" onClick={handleSignout}>Sign out</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}