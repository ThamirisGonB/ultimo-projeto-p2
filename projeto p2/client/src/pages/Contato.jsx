import {Container, Button, Form} from 'react-bootstrap'
import Depoimentos from '../components/Depoimentos'
import Menu from '../components/Menu'
import { Card } from 'react-bootstrap';



function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <>
          <Menu />
          <div className='mx-auto mt-10' style={ {height:'105px'}}>
          </div>
          <Card className="mx-auto mt-5" style={{ width: '500px', padding: '30px'}}>
            <Card.Title className="text-center">Contato</Card.Title>
            <Card.Text className="text-center">Entre em contato conosco</Card.Text>
      
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome completo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Mensagem">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Enviar contato
                </Button>
              </div>
            </Form>
          </Card>
        </>
      )}

export default Contato;