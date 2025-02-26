import { Button, Image } from "react-bootstrap";
import { TiWavesOutline } from "react-icons/ti";

const SectionNonSoloWake = () => {
  return (
    <div className="sectionNonSoloWake">
      <div className="sectionUpTheWave d-lg-flex">
        <div className="textContainer2 d-lg-flex flex-column justify-content-center">
          <h1 className="text-center  fw-bold colorBaietta">Non solo Wake</h1>
          <TiWavesOutline size={60} className="colorBaietta waveIcon" />

          <p className="text-muted fs-5 fw-light ">
            Oltre alle emozionanti sessioni di wakeboard, puoi trascorrere una giornata di relax immerso nella natura e
            a goderti il suggestivo panorama che solo qui puoi trovare, usufruendo anche dell'area ristoro.
            Un'esperienza che va oltre l'avventura, un'oasi di serenità da vivere appieno.
          </p>
          <Button> SCOPRI DI PIÙ</Button>
        </div>
        <Image
          src="/public/Baietta Web/93663df5-74d4-437b-bdf3-bbc8da524444.jpg"
          className="fotoTramonto fotoTramontosmall"
        />
      </div>
      <div className="backSectionNonSoloWake"></div>
    </div>
  );
};

export default SectionNonSoloWake;
