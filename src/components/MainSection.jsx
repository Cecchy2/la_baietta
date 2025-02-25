import { Button, Image } from "react-bootstrap";

const MainSection = () => {
  return (
    <div className="mainSection">
      <div className="d-md-flex ">
        <div>
          <Image src="/public/Baietta Web/baietta-tramonto.jpg" className="imgClub" />
        </div>
        <div className="textClub">
          <h1 className="textClubH1">La Baietta</h1>
          <p className="textClubP">
            La Baietta Wakeboard school", unica scuola in provincia di Palermo specializzata nel Wakeboard e anche in
            altri sport da tavola e non:
          </p>
          <Button className="btnScopri">Scopri di Più</Button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
