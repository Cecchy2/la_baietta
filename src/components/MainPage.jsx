import { Image } from "react-bootstrap";
import MyNavBar from "./MyNavBar";

const MainPage = () => {
  return (
    <div>
      <div className="ImgCarouselWrapper position-absolute">
        <Image src="/Baietta Web/66D0984E-2D31-4B25-888D-A3C7FC1CBB7E.jpeg" className="ImgCarousel" />
      </div>
      <MyNavBar />
      <div>
        <Image src="/Baietta Web/BAIETTAWHITE-300x300.png" className="baiettaLogo" />
      </div>
    </div>
  );
};

export default MainPage;
