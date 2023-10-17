import { Form } from "react-bootstrap";

function Gender() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Select>
    </Form.Group>
  );
}

export default Gender;
