import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/project1.png";
import editor from "../../Assets/Projects/project2.png";
import chatify from "../../Assets/Projects/project3.png";
import polis from "../../Assets/Projects/polis.png";
import suicide from "../../Assets/Projects/project4.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polis}
              isBlog={false}
              title="Polis"
              description="Our real estate platform transforms the way you rent, buy, and list properties. With an intuitive interface, users can effortlessly manage property listings, whether it's for long-term rentals, purchases, or short-term stays. We offer a seamless experience that caters to all real estate needs, ensuring that both property owners and seekers find the perfect match with ease"
              ghLink=""
              demoLink="https://polis.ng"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HookBank"
              description="Hoobank revolutionizes how you manage credit cards. Our expert team uses a cutting-edge methodology to identify the cards that best suit your financial needs. We analyze factors such as annual percentage rates and fees to help you make informed decisions and maximize your financial potential."
              ghLink="https://github.com/favour-samson/hook-bank"
              demoLink="https://hookbank-ui.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Table Cloth"
              description="Tablecloth Finance is your hub for money matters, news, content, and tools. Whether you’re working on becoming debt free, buying a house, exploring investment opportunities, or planning for retirement, we’ll guide you along the path to financial freedom."
              ghLink="https://github.com/favour-samson/tablecloth"
              demoLink="https://tablecloth-finance-ui.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Furnishop"
              description="Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services."
              ghLink="https://github.com/favour-samson/furnishop"
              demoLink="https://furnishop-lilac.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="BGL"
              description="We are one of Africa's leading Securities Trading and Dealing Companies headquartered in Lagos, Nigeria. We provide world dealing services and products to clients BGL Securities leverages on the distinctive BGL brand, harnessing its core competence and unique human resources to deliver excellent and value added services to clients"
              ghLink="https://github.com/favour-samson/stockapp"
              demoLink="https://stockapp-ashy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
