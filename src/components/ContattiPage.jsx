import { Col, Container, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import GoogleMapComponent from "./GoogleMapComponent";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import FormMessage from "./FormMessage";
import Footer from "./Footer";

const ContattiPage = () => {
  return (
    <div>
      <div className="bg-dark ">
        <MyNavBar />
      </div>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center" md={6}>
            <div className="d-flex justify-content-center mt-5">
              <FaMapMarkerAlt color="rgb(0, 203, 169)" size={20} />
              <h4 className="ms-2"> Contrada Grassuri, 90047 Partinico PA</h4>
            </div>
            <div className="d-flex justify-content-center">
              <FaEnvelope color="rgb(0, 203, 169)" size={20} />

              <h4 className="ms-2">Mail to: info@labaietta.it</h4>
            </div>
            <div className="d-flex justify-content-center">
              <PiPhoneFill color="rgb(0, 203, 169)" size={20} />
              <h4 className="ms-2">Tel: 3295536669</h4>
            </div>
          </Col>
          <Col md={6}>
            <GoogleMapComponent />
          </Col>
        </Row>
      </Container>
      <FormMessage />
      <Footer />
    </div>
  );
};
export default ContattiPage;
