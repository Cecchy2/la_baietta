const SectionSlidingCarousel = () => {
  const corsiArray = ["wakeboard", "wakesurf", "wakeskate", "sup", "wingfoil", "wakefoil", "rowing"];
  return (
    <>
      <div className="sectionSlidingCarousel">
        <div className="marquee">
          <div className="marquee-content">
            {corsiArray.map((corso, index) => (
              <span key={index} className="marquee-item">
                {corso.toUpperCase() + " •"}
              </span>
            ))}
            {corsiArray.map((corso, index) => (
              <span key={index + corsiArray.length} className="marquee-item">
                {corso.toLocaleUpperCase() + " •"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSlidingCarousel;
