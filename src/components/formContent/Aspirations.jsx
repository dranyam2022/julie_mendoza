import { Form } from "react-bootstrap";

function Aspirations() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Career Apirations</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="medicine">medicine</option>
        <option value="engineering">engineering</option>
        <option value="arts">arts</option>
        <option value="business">business</option>
        <option value="technology">technology</option>
        <option value="education">education</option>
        <option value="others">others</option>
      </Form.Select>
    </Form.Group>
  );
}

export default Aspirations;
