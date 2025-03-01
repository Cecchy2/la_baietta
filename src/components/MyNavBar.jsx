import { Nav, Navbar } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-transparent myNavBar">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/public/Baietta Web/BAIETTAWHITE.png"
          width="60"
          height="60"
          className="d-inline-block align-top ms-5"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-4 border-start border-1 border-white">
          <Nav.Link href="#home" className="myNavLink ms-4">
            HOME
          </Nav.Link>
          <Nav.Link href="#link" className="myNavLink">
            CHI SIAMO
          </Nav.Link>
          <Nav.Link href="#link" className="myNavLink">
            CORSI
          </Nav.Link>
          <Nav.Link href="#link" className="myNavLink">
            CONTATTI
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
