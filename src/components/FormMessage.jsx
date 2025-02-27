import { Col, Container, Form, Row } from "react-bootstrap";

const FormMessage = () => {
  return (
    <div className="sectionForm">
      <Container>
        <Row>
          <Col>
            <h1 className="colorBaietta">Contattaci</h1>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="nome" placeholder="Il tuo nome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Control type="email" placeholder="La tue e-mail" />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={7} placeholder="Scrivi un messaggio" />
              </Form.Group>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Acconsento al trattamento dei miei dati."
                className="colorBaietta mb-5"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormMessage;
