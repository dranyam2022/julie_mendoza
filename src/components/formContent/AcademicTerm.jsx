import { Form } from "react-bootstrap";
function AcademicTerm() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Academic Term</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="4">4 years</option>
        <option value="3">3 years</option>
        <option value="2">2 years</option>
      </Form.Select>
    </Form.Group>
  );
}

export default AcademicTerm;
