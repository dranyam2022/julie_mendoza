import { Form } from "react-bootstrap";

function SocioeconomicStatus() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Socioeconomic status</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="upper">upper</option>
        <option value="upper-middle">upper-middle</option>
        <option value="lower-middle">lower-middle</option>
        <option value="upper-lower">upper-lower</option>
        <option value="lower">lower</option>
      </Form.Select>
    </Form.Group>
  );
}

export default SocioeconomicStatus;
