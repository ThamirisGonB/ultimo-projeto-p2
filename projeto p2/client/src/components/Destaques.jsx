import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card className="card-hover">
                    <Card.Img variant="top" src="src/img/roma.jfif" width={300} height={300} />
                    <Card.Body>
                        <Card.Title>Conheça nossos destinos!</Card.Title>
                        <Card.Text>
                        Venha explorar nossas incríveis opções de viagem e descubra lugares únicos para visitar!
                        </Card.Text>
                        <LinkContainer to="/Destinos">
                            <Button variant="warning">Destinos</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card className="card-hover">
                    <Card.Img variant="top" src="src/img/espanha.jpg" width={300} height={300} />
                    <Card.Body>
                        <Card.Title>Destinos</Card.Title>
                        <Card.Text>
                        Aproveite nossas promoções e conheça o que há de mais belo em nosso País.
                        </Card.Text>
                        <LinkContainer to="/Login">
                            <Button variant="warning">Saiba mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card className="card-hover">
                    <Card.Img variant="top" src="src/img/londres.jpg" width={300} height={300} />
                    <Card.Body>
                        <Card.Title>Contato</Card.Title>
                        <Card.Text>
                        Se você tiver alguma dúvida ou sugestão, entre em contato conosco. 
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;