import { Button, Image } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import CarouselComp from "./CarouselComp";

const MainPage = () => {
  return (
    <div>
      <div className="ImgCarouselWrapper position-absolute">
        <CarouselComp />
      </div>
      <MyNavBar />

      <Image src="/Baietta Web/BAIETTAWHITE.png" className="baiettaLogo" />
      <div>
        <Button className="btnPrenota ">Prenota Ora</Button>
      </div>
    </div>
  );
};

export default MainPage;
