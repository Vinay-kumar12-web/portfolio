import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covidDetection from "../../Assets/Projects/covid_detection.png"; // Replace with the actual image path

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidDetection} // Ensure this image exists
              isBlog={false}
              title="COVID Detection"
              description="A COVID-19 Detection Project that uses Machine Learning to analyze X-ray images and diagnose COVID-19 cases."
              ghLink="https://github.com/Vinay-kumar12-web/covid-_detection"
              demoLink="#" // Replace with the actual deployment link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
