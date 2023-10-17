import { Col, Table } from "react-bootstrap";

function Courses() {
  return (
    <Col className="mt-5">
      <h3 className="text-light">Search Results</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Courses</th>
            <th>School Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}

export default Courses;
