import { Button, Image } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import CarouselComp from "./CarouselComp";
import MainSection from "./MainSection";

const MainPage = () => {
  return (
    <div>
      <div className="ImgCarouselWrapper position-absolute">
        <CarouselComp />
      </div>
      <MyNavBar />
      <div className="centerContainer">
        <Image src="/Baietta Web/BAIETTAWHITE.png" className="baiettaLogo" />
        <Button className="btnPrenota">PRENOTA ORA</Button>
      </div>
      <MainSection />
    </div>
  );
};

export default MainPage;
