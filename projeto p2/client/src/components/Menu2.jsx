import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Meenu() {

    return (<Navbar    collapseOnSelect
        expand="md"
        className="bg-dark navbar-light "
        variant="dark"
        fixed="top" >
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>TourTrip</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                                <LinkContainer to="/Destinos">
                        <Nav.Link>Destinos</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/funcionalidades">
                        <Nav.Link>Minhas Viagens</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav expand="md" className="ms-auto" style={{gap:'1em'}}>
            <LinkContainer to="/login">
                <button className="btn btn-success">
              <Nav.Link variant="outline-light">UserTest</Nav.Link>
              </button>
            </LinkContainer>
            <LinkContainer to="/">
            <button className="btn btn-danger">
              <Nav.Link variant="outline-light">SAIR</Nav.Link>
            </button>
            </LinkContainer>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Meenu;

