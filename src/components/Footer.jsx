import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer"></div>
      <div className="underFooter">
        <Container>
          <Row className="justify-content-center">
            {" "}
            <Col className="text-light align-item-flex-start" md={5}>
              <h3 className="">DOVE SIAMO</h3>
              <p>Contrada Grassuri, 90047 Partinico (PA)</p>
            </Col>
            <Col className="text-light align-item-flex-start" md={4}>
              <h3>CONTATTI</h3>
              <p>Info@labaietta.it</p>
              <Image src="/public/Baietta Web/BAIETTAWHITE-300x300.png " className="footerLogo" />
            </Col>
            <Col className="text-light align-item-flex-start" md={3}>
              <Nav.Link href="">
                <h3>Links Utili</h3>
              </Nav.Link>
              <Nav.Link href="">Privacy Policy</Nav.Link>
              <IoLogoInstagram size={40} />
              <IoLogoFacebook size={40} className="ms-4" />
            </Col>
            <p className="text-light">Club Nautico La Baietta A.R.L. All Rights Reserved C.F. 97129040826</p>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
