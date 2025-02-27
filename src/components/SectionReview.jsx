import { Carousel } from "react-bootstrap";
import { TiWavesOutline } from "react-icons/ti";

const SectionReview = () => {
  return (
    <div className="sectionReview">
      <h1 className="text-center  fw-bold text-white">COSA DICONO DI NOI</h1>
      <TiWavesOutline size={60} className="colorBaietta" />

      <Carousel indicators={true} interval={8000}>
        <Carousel.Item className="text-white carouselText">
          <p>&quot;Una piacevole giornata&quot;</p>
          <p>
            Ho prenotato una lezione di sup alla Baietta lago Poma a Partinico lo scorso weekend e mi sono divertito un
            sacco. Il personale e l’istruttore Manfredi mi hanno fatto sentire subito a casa con la loro gentilezza e
            cordialità. Manfredi mi ha seguito nel percorso curando ogni dettaglio e facendomi vivere una bellissima
            esperienza, ritornerò presto.
          </p>
          <p className="colorBaietta">Roberto</p>
        </Carousel.Item>
        <Carousel.Item className="text-white carouselText">
          <p>&quot;Wakeboard fantastico&quot;</p>
          <p>
            All’inizio ero un po’ scettica nel provarlo per paura, ma l’istruttore Manfredi mi ha subito messo a mio
            agio e tranquillizzandomi. Sport fantastico ed emozionante, soprattutto in questa cornice naturale e
            paesaggistica.
          </p>
          <p className="colorBaietta">Valeria</p>
        </Carousel.Item>
        <Carousel.Item className="text-white carouselText">
          <p>&quot;Una piacevole giornata&quot;</p>
          <p>
            Ho prenotato una lezione di Sup lo scorso weekend e mi sono divertito un sacco. Il personale e l’istruttore
            Manfredi mi hanno fatto sentire subito a casa con la loro gentilezza e cordialità. Manfredi mi ha seguito
            nel percorso curando ogni dettaglio e facendomi vivere una bellissima esperienza, ritornerò presto.
          </p>
          <p className="colorBaietta">Roberto</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SectionReview;
