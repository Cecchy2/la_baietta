import { Button, Image } from "react-bootstrap";
import { TiWavesOutline } from "react-icons/ti";

const SectionDownTheWave = () => {
  return (
    <div className="sectionDownTheWave">
      <Image src="/public/Baietta Web/baietta-tramonto.jpg" className="fotoTramonto" />
      <div className="textContainer">
        <h1 className="text-center colorBaietta fw-bold">La Baietta</h1>
        <TiWavesOutline size={60} className="colorBaietta" />
        <p className="text-muted fs-5 fw-light">
          "La Baietta Wakeboard school", unica scuola in provincia di Palermo specializzata nel Wakeboard e anche in
          altri sport da tavola e non:
        </p>
        <Button> SCOPRI DI PIÙ</Button>
      </div>
    </div>
  );
};

export default SectionDownTheWave;
