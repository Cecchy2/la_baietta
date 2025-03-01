import { Button, Col, Container, Image, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import CarouselComp from "./CarouselComp";

import SectionSlidingCarousel from "./SectionSlidingCarousel";
import SectionDownTheWave from "./SectionDownTheWave";
import SectionWave from "./SectionWave";
import SectionCorsi from "./SectionCorsi";
import SectionNonSoloWake from "./SectionNonSoloWake";
import GoogleMapComponent from "./GoogleMapComponent";
import SectionReview from "./SectionReview";
import FormMessage from "./FormMessage";
import Footer from "./Footer";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineFacebook } from "react-icons/ai";

const MainPage = () => {
  return (
    <>
      <div>
        <div className="ImgCarouselWrapper position-absolute">
          <CarouselComp />
        </div>
        <MyNavBar />
        <div className="centerContainer">
          <Image src="/Baietta Web/BAIETTAWHITE.png" className="baiettaLogo" />
          <Button className="btnPrenota">PRENOTA ORA</Button>
        </div>
        <div className="socialIcons">
          <AiOutlineFacebook size={50} />
          <IoLogoInstagram size={50} />
        </div>
        <div>
          <Image src="/public/Baietta Web/Loghi/logo-fissw2.png" className="fiswwLogo" />
        </div>
      </div>
      <SectionWave />
      <SectionDownTheWave />
      <SectionSlidingCarousel />
      <div className=" text-center ">
        <Container className="mt-2">
          <Row>
            <Col>
              <h1 className="colorBaietta mt-5 fw-bold display-4">I nostri corsi</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <SectionCorsi />
      <SectionNonSoloWake />
      <SectionReview />
      <GoogleMapComponent />
      <FormMessage />
      <Footer />
    </>
  );
};

export default MainPage;
