import { Col, Container, Image, Row } from "react-bootstrap";

const SectionCorsi = () => {
  return (
    <div className="mt-3 text-center bg-light">
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="colorBaietta mt-5 fw-bold display-4">I nostri corsi</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4} className="corsiCol">
            <div className="image-container">
              <Image src="/public/Baietta Web/wakeboarddd-760x570.png" className="corsiImg" />
              <p className="corsiText">wakeboard</p>
            </div>
          </Col>
          <Col md={4} className="corsiCol">
            <div className="image-container">
              <Image src="/public/Baietta Web/sup.jpg-760x570.webp" className="corsiImg" />
              <p className="corsiText">sup</p>
            </div>
          </Col>
          <Col md={4} className="corsiCol">
            <div className="image-container">
              <Image src="/public/Baietta Web/foillll-760x570.png" className="corsiImg" />
              <p className="corsiText">wingfoil</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4} className="corsiCol">
            <div className="image-container">
              <Image src="/public/Baietta Web/action-760x570.png" className="corsiImg" />
              <p className="corsiText">wakefoil</p>
            </div>
          </Col>
          <Col md={4} className="corsiCol">
            <div className="image-container">
              <Image src="/public/Baietta Web/wakesurf-760x570.png" className="corsiImg" />
              <p className="corsiText">wakesurf</p>
            </div>
          </Col>
          <Col md={4} className="corsiCol">
            <div className="image-container">
              <Image src="/public/Baietta Web/S5002732-760x570.jpg" className="corsiImg" />
              <p className="corsiText">rowing</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionCorsi;
