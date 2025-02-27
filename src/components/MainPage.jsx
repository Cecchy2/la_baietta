import { Button, Image } from "react-bootstrap";
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
      </div>
      <SectionWave />
      <SectionDownTheWave />
      <SectionSlidingCarousel />
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
