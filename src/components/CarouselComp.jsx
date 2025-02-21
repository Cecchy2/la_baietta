import { Carousel } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <Carousel indicators={true} fade={true} interval={8000} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 ImgCarousel"
          src="/Baietta Web/66D0984E-2D31-4B25-888D-A3C7FC1CBB7E.jpeg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 ImgCarousel"
          src="/Baietta Web/dji_fly_20231028_104422_0017_1698501002039_photo-scaled.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 ImgCarousel"
          src="/Baietta Web/dji_fly_20231103_103706_0034_1699007652279_photo-1-scaled.jpeg"
          alt="Thirt slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
