import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Location() {
  const [regionVal, setRegionVal] = useState("0");

  function handleRegionChange(event) {
    const val = event.target.value;
    setRegionVal(val);
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>Location</Form.Label>
      <Row>
        <Col>
          <Form.Select value={regionVal} onChange={handleRegionChange}>
            <option value="0">Select Region</option>
            <option value="1">National Capital Region(NCR)</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select>
            {regionVal === "0" ? (
              <option value="0">Select Location</option>
            ) : (
              <option value="1">test1</option>
            )}
          </Form.Select>
        </Col>
      </Row>
    </Form.Group>
  );
}

export default Location;
