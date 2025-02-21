import { Nav, Navbar } from "react-bootstrap";
import { PiPhoneCallFill } from "react-icons/pi";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-transparent myNavBar">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/Baietta Web/BAIETTAWHITE.png"
          width="60"
          height="60"
          className="d-inline-block align-top ms-5"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-4 border-start border-1 border-white">
          <Nav.Link href="#home" className="myNavLink ms-4" activeClassName="active">
            HOME
          </Nav.Link>
          <Nav.Link href="#link" className="myNavLink" activeClassName="active">
            CHI SIAMO
          </Nav.Link>
          <Nav.Link href="#link" className="myNavLink" activeClassName="active">
            CORSI
          </Nav.Link>
          <Nav.Link href="#link" className="myNavLink" activeClassName="active">
            CONTATTI
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto me-5">
          <Nav.Link href="#link" className="myNavLink">
            <PiPhoneCallFill size={20} className="mb-1 me-1" /> 3295536669
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
