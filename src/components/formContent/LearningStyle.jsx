import { Form } from "react-bootstrap";

function LearningStyle() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Learning style preference</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="visual">visual</option>
        <option value="auditory">auditory</option>
        <option value="reading/writing">reading/writing</option>
        <option value="kinesthetic">kinesthetic</option>
      </Form.Select>
    </Form.Group>
  );
}

export default LearningStyle;
