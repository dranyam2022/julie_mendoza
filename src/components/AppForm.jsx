import { Button, Form, Container } from "react-bootstrap";

function AppForm() {
  return (
    <Container>
      <Form className="my-5  text-white">
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

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Learning style preference</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="visual">visual</option>
            <option value="auditory">Female</option>
            <option value="reading/writing">reading/writing</option>
            <option value="kinesthetic">kinesthetic</option>
          </Form.Select>
        </Form.Group>

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
        <Form.Group className="mb-3">
          <Form.Label>Socioeconomic status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="upper">upper</option>
            <option value="upper-middle">upper-middle</option>
            <option value="lower-middle">lower-middle</option>
            <option value="upper-lower">upper-lower</option>
            <option value="lower">lower</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Academic Term</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="4">4 years</option>
            <option value="3">3 years</option>
            <option value="2">2 years</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skills/Hobbies</Form.Label>
          <Form.Check
            type="checkbox"
            id="technicalSkills"
            label="Technical skills (e.g. programming, design)"
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id="creativeSkills"
            label="Creative skills (e.g. painting, writing)"
          />

          <Form.Check // prettier-ignore
            type="checkbox"
            id="sports"
            label="Sports or physical activities"
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id="musicalTalents"
            label="Musical talents"
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id="communicationSkills"
            label="Communication skills"
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id="leadershipActivities"
            label="Leadership Activities"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Pear Influence</Form.Label>
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

        <Form.Group className="mb-3">
          <Form.Label>Financial aid or scholarship</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="neutral">Neutral</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Pear Influence</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="neutral">Neutral</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Industry relevance</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="...">...</option>
            <option value="high">high demand and growth</option>
            <option value="stable">stable ebut competitive</option>
            <option value="niche">niche or specialized</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AppForm;
