import { Container, Navbar } from "react-bootstrap";

function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Course Navigator</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
