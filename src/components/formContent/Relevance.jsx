import { Form } from "react-bootstrap";

function Relevance() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Industry relevance</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="high">high demand and growth</option>
        <option value="stable">stable ebut competitive</option>
        <option value="niche">niche or specialized</option>
      </Form.Select>
    </Form.Group>
  );
}

export default Relevance;
