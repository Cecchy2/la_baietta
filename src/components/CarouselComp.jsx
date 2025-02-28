import { Carousel } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <Carousel indicators={true} fade={true} interval={8000} className="custom-carousel">
      <Carousel.Item>
        <img
          className="ImgCarousel d-block w-100"
          src="/Baietta Web/66D0984E-2D31-4B25-888D-A3C7FC1CBB7E.jpeg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="ImgCarousel d-block w-100"
          src="/Baietta Web/dji_fly_20231103_103706_0034_1699007652279_photo-1-scaled.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
