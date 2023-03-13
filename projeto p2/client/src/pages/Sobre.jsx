import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import CmsApi from "../api/CmsApi";
import Menu from "../components/Menu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";


function Sobre() {
  const [sobre, setSobre] = useState([]);

  useEffect(() => {
    async function getSobre() {
      const response = await CmsApi().getSobre();
      const sobre = await response.json();
      setSobre(sobre.data);
    }

    getSobre();
  }, []);

  return (
    <>
      <Menu />
      <div className="bg-light py-5 mt-5">
        <Container className="p-5" style={{ maxWidth: "1200px" }}>
          <Row className="justify-content-center">
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1 className="fw-bold mb-4">
                  Descubra o mundo com a TourTrip
                </h1>
                <p className="lead">
                  A TourTrip é uma empresa de viagens que oferece experiências
                  únicas para seus clientes, com destinos exóticos e
                  emocionantes ao redor do mundo.
                </p>
                <p className="lead">
                  Com um time de especialistas em turismo, a TourTrip se dedica
                  a planejar cada detalhe da viagem para garantir a satisfação
                  dos seus clientes, desde a escolha do destino até a acomodação
                  e atividades durante a viagem.
                </p>
                <p className="lead">
                  Além disso, a empresa preza pela segurança e conforto dos seus
                  clientes, proporcionando uma experiência inesquecível e sem
                  preocupações.
                </p>
                <LinkContainer to="/login">
                <Button variant="primary" className="mt-4">
                  Saiba mais
                </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img
                src=".\src\img\cascata.jpg"
                alt="Sobre imagem"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Sobre;
