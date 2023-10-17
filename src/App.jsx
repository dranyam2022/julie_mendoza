import "./App.css";
import AppForm from "./components/AppForm";
import NavMenu from "./components/NavMenu";
import Courses from "./components/Courses";
import { Row, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavMenu />
      <Container>
        <Row>
          <AppForm />
          <Courses />
        </Row>
      </Container>
    </>
  );
}

export default App;
