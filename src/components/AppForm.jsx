import { Col, Button, Form } from "react-bootstrap";

import Aspirations from "./formContent/Aspirations";
import AcademicTerm from "./formContent/AcademicTerm";
import Gender from "./formContent/Gender";
import LearningStyle from "./formContent/LearningStyle";
import HighschoolAchievement from "./formContent/HighschoolAchievement";
import Location from "./formContent/Location";
import PearInfluence from "./formContent/PearInfluence";
import Relevance from "./formContent/Relevance";
import Scholarship from "./formContent/Scholarship";
import SkillsHobbies from "./formContent/SkillsHobbies";
import SocioeconomicStatus from "./formContent/SocioeconomicStatus";

function AppForm() {
  return (
    <Col>
      <Form className="my-5  text-white">
        <Aspirations />
        <AcademicTerm />
        <LearningStyle />
        <Location />
        <HighschoolAchievement />
        <PearInfluence />
        <Gender />
        <Relevance />
        <Scholarship />
        <SocioeconomicStatus />
        <SkillsHobbies />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default AppForm;
