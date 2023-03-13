//ignora essa página por enquanto

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Menu from '../components/Menu';
import CmsApi from '../api/CmsApi';

function Cadastro() {
  const [formValues, setFormValues] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await CmsApi().cadastrar(formValues.email, formValues.senha);
      if (!response.ok) {
        throw new Error(response.status);
      }
      alert('Usuário cadastrado com sucesso!');
      window.location.href = '/login'; 
    } catch (error) {
      setError('Não foi possível realizar o cadastro');
    }
  };

  return (
    <Container className='conteudo-margin'>
      <Menu />
      <h1>Cadastro</h1>
      {error && <div className='alert alert-danger'>{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='Email'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='Digite seu e-mail'
            name='email'
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='Senha'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Digite sua senha'
            name='senha'
            value={formValues.senha}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant='info' type='submit'>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default Cadastro;
