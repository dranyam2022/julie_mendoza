import { Form } from "react-bootstrap";

function Scholarship() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Financial aid or scholarship</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="full scholarship">full scholarship</option>
        <option value="partial scholarship">partial scholarship</option>
        <option value="need-based financial aid">
          need-based financial aid
        </option>
        <option value="merit-based financial aid">
          merit-based financial aid
        </option>
      </Form.Select>
    </Form.Group>
  );
}

export default Scholarship;
