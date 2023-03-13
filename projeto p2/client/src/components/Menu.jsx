import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (<Navbar    collapseOnSelect
        expand="md"
        className="bg-dark navbar-light"
        variant="dark"
        fixed="top" >
        <Container>
            <Nav.Item> <img src=".\src\img\aviao.png" className='icon'></img></Nav.Item>
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
                    <LinkContainer to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav expand="md" className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link variant="outline-light">Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link variant="outline-light">Cadastro</Nav.Link>
            </LinkContainer>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

