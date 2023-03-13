import Container from 'react-bootstrap/Container'
import { Button, Card, CardGroup } from 'react-bootstrap'
import Menu from '../components/Menu'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { LinkContainer } from 'react-router-bootstrap';

function Destinos () {
    return (
        <>
        <Menu />
            <Container className='conteudo-margin'>
                <div className='destinos' style={{
                    maxWidth: '1500px',
                }}>
                    <CardHeader style={{ 
                        padding: '20px', 
                        textAlign: 'center' 
                        }}>
                        <h1 style={{ 
                            color: '#555', 
                            fontSize: '30px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '2px' 
                        }}>Destinos Nacionais</h1>
                    </CardHeader>

                    <CardGroup style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '20px'
                    }}>
                        <Card className="card-hover">
                            <Card.Img src="src/img/RJ.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Rio de Janeiro</Card.Title>
                                <Card.Subtitle>Explore o icônico Rio de Janeiro, com suas praias deslumbrantes, montanhas impressionantes e animada vida noturna.</Card.Subtitle>
                                <Card.Text>
                                    <LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-hover">
                            <Card.Img src="src/img/SP.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>São Paulo</Card.Title>
                                <Card.Subtitle> Descubra a vibrante metrópole de São Paulo, conhecida por sua culinária deliciosa, vida noturna animada e rica cultura artística.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-hover">
                            <Card.Img src="src/img/Fortaleza.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Fortaleza</Card.Title>
                                <Card.Subtitle> Relaxe nas praias paradisíacas de Fortaleza, conhecida por suas águas cristalinas, vida noturna animada e clima tropical o ano todo. </Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup style={{
                        display: 'Flex',
                        gap: '1rem',
                    }}>
                        <Card className="card-hover">
                            <Card.Img src="src/img/Curitiba.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Curitiba</Card.Title>
                                <Card.Subtitle>Descubra a charmosa cidade de Curitiba, com seus jardins exuberantes, arquitetura única e rica cena cultural.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-hover">
                            <Card.Img src="src/img/BH.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Belo Horizonte</Card.Title>
                                <Card.Subtitle>Visite Belo Horizonte e experimente a cultura mineira, com sua deliciosa culinária, cervejarias artesanais e riqueza histórica.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <Card>
                            <Card.Img src="src/img/Ponyo.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Ponyo</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Gabriel Soares</Card.Text>
                            </Card.Body>
                        </Card> */}
                    </CardGroup>
                </div>
            </Container>
             <Container className='conteudo-margin'>
                <div>
                <CardHeader style={{ 
                        padding: '20px', 
                        textAlign: 'center' 
                        }}>
                        <h1 style={{ 
                            color: '#555', 
                            fontSize: '30px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '2px' 
                        }}>Destinos Internacionais</h1>
                    </CardHeader>
                    <CardGroup style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '20px'
                    }}>
                        <Card className="card-hover">
                            <Card.Img src="src/img/londres.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Londres</Card.Title>
                                <Card.Subtitle>Descubra a cidade mais icônica do Reino Unido, lar de monumentos históricos, teatros mundialmente famosos e a realeza britânica.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-hover"> 
                            <Card.Img src="src/img/turquia.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Turquia</Card.Title>
                                <Card.Subtitle>A Turquia é o destino perfeito para quem deseja uma mistura única de história, cultura e belezas naturais.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-hover">
                            <Card.Img src="src/img/paris.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Paris</Card.Title>
                                <Card.Subtitle>Conhecida como a Cidade do Amor, Paris é um destino imperdível para qualquer amante da cultura e da história.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup style={{
                        display: 'flex',
                        gap: '1rem',
                    }}>
                        <Card className="card-hover">
                            <Card.Img src="src/img/Orlando.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Orlando</Card.Title>
                                <Card.Subtitle>Conhecida como a capital mundial dos parques temáticos, Orlando é o destino ideal para quem busca diversão e entretenimento.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-hover">
                            <Card.Img src="src/img/hong_kong.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Hong Kong</Card.Title>
                                <Card.Subtitle>A cidade futurística de Hong Kong é um destino emocionante e fascinante. Descubra a cultura chinesa tradicional, saboreie a deliciosa culinária local e explore a vibrante vida noturna.</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <Card className="card-hover">
                            <Card.Img src="src/img/.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>?</Card.Title>
                                <Card.Subtitle>?:</Card.Subtitle><Card.Text><LinkContainer to="/Login">
                                    <Button variant="warning" size="sm">Saiba mais</Button>
                                    </LinkContainer></Card.Text>
                            </Card.Body>
                        </Card> */}
                    </CardGroup>
                </div>
            </Container>
        </>
    );
}


export default Destinos;