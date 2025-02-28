import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer"></div>
      <div className="underFooter">
        <Container>
          <Row>
            {" "}
            <Col md={3} className="text-light">
              <Image src="/public/Baietta Web/BAIETTAWHITE-300x300.png" className="footerLogo" />
            </Col>
            <Col className="text-light align-item-flex-start" md={3}>
              <h3 className="">DOVE SIAMO</h3>
              <p>Contrada Grassuri, 90047 Partinico (PA)</p>
            </Col>
            <Col className="text-light align-item-flex-start" md={3}>
              <h3>CONTATTI</h3>
              <p>Info@labaietta.it</p>
            </Col>
            <Col className="text-light align-item-flex-start" md={3}>
              <a href="">Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
