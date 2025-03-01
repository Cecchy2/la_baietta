import { Card, Col, Container, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import SectionCorsi from "./SectionCorsi";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import Footer from "./Footer";

const CorsiPage = () => {
  return (
    <div>
      <div className="bg-dark ">
        <MyNavBar />
      </div>
      <SectionCorsi />
      <Container>
        <Row>
          <Col>
            {" "}
            <h1 className="colorBaietta text-center fw-bold my-5">TEAM</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/public/Baietta Web/manfredi.jpg" className="instructorImg" />
              <Card.Body>
                <Card.Title className="text-center fw-bold my-4">Manfredi Napoli</Card.Title>
                <Card.Text className="text-center colorBaietta">CEO</Card.Text>
                <div className="d-flex justify-content-center">
                  <AiOutlineFacebook size={40} color=" rgba(43, 152, 146, 0.7)" />
                  <AiOutlineInstagram size={40} color=" rgba(43, 152, 146, 0.7)" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-5">
              <Card.Img variant="top" src="/public/Baietta Web/aguglia.jpg" className="instructorImg" />
              <Card.Body>
                <Card.Title className="text-center fw-bold my-4">Riccardo Aguglia</Card.Title>
                <Card.Text className="text-center colorBaietta">Wakesurf Instructor</Card.Text>
                <div className="d-flex justify-content-center">
                  <AiOutlineFacebook size={40} color=" rgba(43, 152, 146, 0.7)" />
                  <AiOutlineInstagram size={40} color=" rgba(43, 152, 146, 0.7)" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CorsiPage;
