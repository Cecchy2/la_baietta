import { Col, Container, Image, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import FormMessage from "./FormMessage";
import Footer from "./Footer";

const ChiSiamoPage = () => {
  return (
    <div>
      <div className="navChiSiamoPage">
        <MyNavBar />
      </div>
      <Container>
        <Row className="mt-5">
          <Col lg={6}>
            <Image
              src="/public/Baietta Web/dji_fly_20231103_103706_0034_1699007652279_photo-1-scaled.jpeg"
              className="chiSiamoImg"
            />
          </Col>
          <Col lg={6}>
            <h1 className="text-center colorBaietta fw-bold">Il Club</h1>

            <p className="text-muted fs-5 fw-light">
              Il Circolo Nautico La Baietta è una Associazione Sportiva Dilettantistica fondata nel 1980 da uno dei
              pionieri dello Sci Nautico L. Mangione De Gregorio. Nel 2017 il Circolo si rinnova dando forma a “La
              Baietta Wakeboard school”, unica scuola in provincia di Palermo specializzata nel Wakeboard e anche in
              altri sport da tavola e non, come: Wakesurf. Wakeskate, Barefoot, Sup, Windsurf, Skateboard, Waterski e
              Vela, adatti a tutti, dai principianti ai professionisti, dai più grandi ai più piccini. Teatro di questa
              passione è lo stupendo scenario dell’oasi del lago Poma che. grazie ai suoi paesaggi ben si presta a parco
              giochi naturale dove passare la giornata all’insegna del divertimento, relax e sicurezza.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={6}>
            <h1 className="text-center colorBaietta fw-bold">Il ceo "Frazzo":</h1>

            <p className="text-muted fs-5 fw-light">
              Manfredi Napoli, più comunemente conosciuto come Frazzo, è il Ceo del club, nonché main instructor. Vanta
              di tante partecipazioni ai campionati mondiali ed europei con grandissimi risultati. A lezione sa come
              metterti a proprio agio facendoti superare le difficoltà iniziali e rendendo la lezione piacevole e
              divertente.
            </p>
          </Col>
          <Col lg={6}>
            <Image src="/public/Baietta Web/66D0984E-2D31-4B25-888D-A3C7FC1CBB7E.jpeg" className="chiSiamoImg" />
          </Col>
        </Row>
      </Container>
      <FormMessage />
      <Footer />
    </div>
  );
};

export default ChiSiamoPage;
