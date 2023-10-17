import { Form } from "react-bootstrap";

function PearInfluence() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Pear Influence</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
        <option value="neutral">Neutral</option>
      </Form.Select>
    </Form.Group>
  );
}

export default PearInfluence;
