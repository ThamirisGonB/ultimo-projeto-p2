import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CmsApi from '../api/CmsApi';

function FuncionalidadesPage() {
  const [funcionalidades, setFuncionalidades] = useState([]);
  const [novaFuncionalidade, setNovaFuncionalidade] = useState({});

  useEffect(() => {
    async function getFuncionalidades() {
      const response = await CmsApi().getFuncionalidades();
      const funcionalidades = await response.json();
      setFuncionalidades(funcionalidades.data);
    }

    getFuncionalidades();
  }, []);

  async function adicionarFuncionalidade() {
    const response = await CmsApi().postFuncionalidade(novaFuncionalidade);
    if (!response.ok) {
      alert('Erro ao cadastrar viagem');
      return;
    }

    const funcionalidade = await response.json();
    alert('Viagem cadastrada com sucesso');
    setFuncionalidades([...funcionalidades, funcionalidade.data]);
    setNovaFuncionalidade({});
  }

  async function excluirFuncionalidade(id) {
    const response = await CmsApi().deleteFuncionalidade(id);
    if (!response.ok) {
      alert('Erro ao excluir viagem');
      return;
    }

    alert('Viagem excluída com sucesso');
    const funcionalidadesAtualizadas = funcionalidades.filter(
      (funcionalidade) => funcionalidade.id !== id
    );
    setFuncionalidades(funcionalidadesAtualizadas);
  }

  async function editarFuncionalidade(funcionalidade) {
    const response = await CmsApi().patchFuncionalidade({
      id: funcionalidade.id,
      title: funcionalidade.title,
      description: funcionalidade.description,
    });
    if (!response.ok) {
      alert('Erro ao editar viagem');
      return;
    }

    alert('Viagem editada com sucesso');
    const funcionalidadesAtualizadas = funcionalidades.map((f) =>
      f.id === funcionalidade.id ? funcionalidade : f
    );
    setFuncionalidades(funcionalidadesAtualizadas);
  }


  function handleInputChange(event) {
    const { name, value } = event.target;
    setNovaFuncionalidade((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }


  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h2>Adicionar viagem</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Origem</Form.Label>
                  <Form.Control
                    as="select"
                    name="title"
                    value={novaFuncionalidade.title || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione uma cidade</option>
                    {[
                      "Belo Horizonte",
                      "Belém",
                      "Brasília",
                      "Campinas",
                      "Campo Grande",
                      "Contagem",
                      "Cuiabá",
                      "Curitiba",
                      "Duque de Caxias",
                      "Feira de Santana",
                      "Fortaleza",
                      "Goiânia",
                      "Guarulhos",
                      "Jaboatão dos Guararapes",
                      "João Pessoa",
                      "Juiz de Fora",
                      "Maceió",
                      "Manaus",
                      "Natal",
                      "Niterói",
                      "Nova Iguaçu",
                      "Osasco",
                      "Porto Alegre",
                      "Recife",
                      "Ribeirão Preto",
                      "Rio de Janeiro",
                      "Salvador",
                      "Santo André",
                      "Sorocaba",
                      "São Bernardo do Campo",
                      "São Gonçalo",
                      "São José dos Campos",
                      "São Luís",
                      "São Paulo",
                      "Teresina",
                      "Uberlândia",
                    ]
                      .sort()
                      .map((cidade) => (
                        <option key={cidade} value={cidade}>
                          {cidade}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Destino</Form.Label>
                  <Form.Control
                    as="select"
                    name="description"
                    value={novaFuncionalidade.description || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione uma cidade</option>
                    <optgroup label="Destinos nacionais">
                      <option value="">Selecione uma cidade</option>
                      <option value="Aracaju">Aracaju</option>
                      <option value="Belém">Belém</option>
                      <option value="Belo Horizonte">Belo Horizonte</option>
                      <option value="Boa Vista">Boa Vista</option>
                      <option value="Brasília">Brasília</option>
                      <option value="Campo Grande">Campo Grande</option>
                      <option value="Cuiabá">Cuiabá</option>
                      <option value="Curitiba">Curitiba</option>
                      <option value="Florianópolis">Florianópolis</option>
                      <option value="Fortaleza">Fortaleza</option>
                      <option value="Goiânia">Goiânia</option>
                      <option value="João Pessoa">João Pessoa</option>
                      <option value="Macapá">Macapá</option>
                      <option value="Maceió">Maceió</option>
                      <option value="Manaus">Manaus</option>
                      <option value="Natal">Natal</option>
                      <option value="Palmas">Palmas</option>
                      <option value="Porto Alegre">Porto Alegre</option>
                      <option value="Porto Velho">Porto Velho</option>
                      <option value="Recife">Recife</option>
                      <option value="Rio Branco">Rio Branco</option>
                      <option value="Rio de Janeiro">Rio de Janeiro</option>
                      <option value="Salvador">Salvador</option>
                      <option value="São Luís">São Luís</option>
                      <option value="São Paulo">São Paulo</option>
                      <option value="Teresina">Teresina</option>
                      <option value="Vitória">Vitória</option>
                    </optgroup>
                    <optgroup label="Destinos internacionais">
                      <option value="Paris">Paris</option>
                      <option value="Nova York">Turquia</option>
                      <option value="Londres">Londres</option>
                      <option value="Orlando">Orlando</option>
                      <option value="Hong Kong">Hong Kong</option>
                    </optgroup>
                  </Form.Control>
                </Form.Group>
              </Form>
              <br />
              <Button variant="primary" onClick={adicionarFuncionalidade}>
                Adicionar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h2>Minhas Viagens</h2>
            </Card.Header>
            <Card.Body>
              {funcionalidades.map((funcionalidade) => (
                <div key={funcionalidade.id}>
                  <h6>Origem:</h6>
                  <h3>{funcionalidade.title}</h3>
                  <h6> Destino:</h6>
                  <h3>{funcionalidade.description}</h3>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <Button
                      variant="secondary"
                      disabled
                      onClick={() => excluirFuncionalidade(funcionalidade.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => excluirFuncionalidade(funcionalidade.id)}
                    >
                      Cancelar Viagem
                    </Button>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default FuncionalidadesPage;