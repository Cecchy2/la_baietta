import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Col, Container, Row } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const infoWindowStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 7px 1px rgba(0,0,0,0.3)",
  maxWidth: "300px",
};

const center = {
  lat: 38.00391,
  lng: 13.08788,
};

const GoogleMapComponent = () => {
  return (
    <div className="googleMapContainer">
      <Container>
        <Row>
          <Col>
            <LoadScript googleMapsApiKey="AIzaSyDseez0jf9fw97OifYIQbegByFO7mxyMZw">
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center}>
                  <InfoWindow position={center}>
                    <div style={infoWindowStyle}>
                      <h4 style={{ marginBottom: "10px", color: "#1a73e8" }}>La Baietta Wakeboard School</h4>
                      <p style={{ margin: "5px 0", color: "#333" }}>Contrada Grassuri, 90047 Partinico PA</p>
                      <p style={{ margin: "5px 0", color: "#333" }}>
                        Tel:{" "}
                        <a href="tel:3295536669" style={{ color: "#1a73e8", textDecoration: "none" }}>
                          329 553 6669
                        </a>
                      </p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=38.00391,13.08788"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          marginTop: "10px",
                          color: "#1a73e8",
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Indicazioni stradali →
                      </a>
                    </div>
                  </InfoWindow>
                </Marker>
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GoogleMapComponent;
