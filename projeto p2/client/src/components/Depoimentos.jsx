import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
      <>
        <h2
          style={{
            color: "#555",
            fontSize: "30px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginTop:"20px",            
          }}
        >
          Depoimentos
        </h2>
        <Row className="mt-3">
          <Col sm="12" md="2" className="text-center">
            <img
              src="src/img/img1.jpg"
              alt="Foto do depoimento"
              className="rounded-circle shadow"
              width={150}
              height={150}
            />
          </Col>
          <Col sm="12" md="10">
            <div className="d-flex flex-column justify-content-center h-100">
              <h5>Camila Andrade</h5>
              <p className="mb-0">
                Desde que conheci a TourTrip, minha vida mudou! O dinamismo para
                criar planos e organizar minhas viagens é simplesmente incrível!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm="12" md="2" className="text-center">
            <img
              src="src/img/img2.jpg"
              alt="Foto do depoimento2"
              className="rounded-circle shadow"
              width={150}
              height={150}
            />
          </Col>
          <Col sm="12" md="10">
            <div className="d-flex flex-column justify-content-center h-100">
              <h5>Roberto Cardoso</h5>
              <p className="mb-0">
                A TuorTrip é uma empresa de viagem que oferece pacotes para
                destinos nacionais e internacionais. Com um atendimento
                personalizado e cuidado com os detalhes, a TuorTrip se destaca
                pela qualidade dos serviços prestados aos seus clientes. Seja
                para uma viagem de negócios ou lazer, a TuorTrip tem a opção
                ideal para atender às necessidades de cada cliente.
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
}

export default Depoimentos