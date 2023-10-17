import { Form } from "react-bootstrap";

function HighschoolAchievement() {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Highest Highschool Achievement</Form.Label>
      <Form.Select aria-label="Default select example">
        <option value="...">...</option>
        <option value="with highest honor">With Highest Honor</option>
        <option value="high honor">High Honor</option>
        <option value="honor">Honor</option>
        <option value="none">none</option>
      </Form.Select>
    </Form.Group>
  );
}

export default HighschoolAchievement;
