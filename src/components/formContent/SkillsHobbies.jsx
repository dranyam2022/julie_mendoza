import { Form } from "react-bootstrap";

function SkillsHobbies() {
  return (
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
  );
}

export default SkillsHobbies;
