import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/project1.png";
import editor from "../../Assets/Projects/project2.png";
import chatify from "../../Assets/Projects/project3.png";
import polis from "../../Assets/Projects/polis.png";
import combattix from "../../Assets/Projects/combattix.png";
import springlanenursery from "../../Assets/Projects/springlane.png";
import trukey from "../../Assets/Projects/trukey.png";
import elevation from "../../Assets/Projects/elevation.png";
import ideaallies from "../../Assets/Projects/ideaallies.png";
import suicide from "../../Assets/Projects/project4.png";
import pacDashboard from "../../Assets/Projects/pac.png";
import impact from "../../Assets/Projects/impact.png";

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
              imgPath={combattix}
              isBlog={false}
              title="Combattix"
              description="Combattix provides a seamless platform for combat sports ticketing and event management. Fans can easily purchase and access tickets, while fighters and promoters benefit from streamlined event organization and audience engagement. With a clean and intuitive interface, Combattix eliminates messy links, last-minute DMs, and outdated processes—ensuring a modern, hassle-free experience for the entire combat sports community."
              ghLink=""
              demoLink="https://www.combattix.com/"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springlanenursery}
              isBlog={false}
              title="Springlane"
              description="Spring Lane Nursery provides a warm, safe, and inspiring early education environment for children aged 3 months to 5 years. Situated in Croydon, the nursery nurtures confident, curious learners through purposeful play based on the Early Years Foundation Stage (EYFS) framework. With a strong focus on building relationships, developing independence, and offering extended care options like breakfast and after-hours clubs, it supports families and helps young children thrive."
              ghLink=""
              demoLink="https://www.springlanenursery.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impact}
              isBlog={false}
              title="Evolution Impact Initiative"
              description="Evolution Impact Initiative CIC is a community-driven organisation based in Medway, Kent. Our mission is to support young people, families, and vulnerable groups through programs that build skills, improve wellbeing, and strengthen community bonds. We believe every individual deserves the chance to thrive. By combining sport, education, creativity, and social support, we're shaping a stronger, more connected community."
              ghLink=""
              demoLink="https://www.evolutionimpactinitiative.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trukey}
              isBlog={false}
              title="TruKey"
              description="TruKey Property delivers purpose-driven, fully managed housing solutions across London and surrounding counties. Tailored to the needs of councils, insurers, landlords—and the people they support—the platform ensures safe, compliant, and ready-to-live-in accommodations. With rapid placements, guaranteed rent options, and all safety checks professionally handled, TruKey bridges the gap between urgent housing needs and stable, dignified living arrangements."
              ghLink=""
              demoLink="https://www.trukeyproperty.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elevation}
              isBlog={false}
              title="Elevation Mentorship"
              description="Elevation Mentorship is a coaching and personal development platform designed to help individuals unlock their potential. The website provides mentorship in finance, business, health, and personal well-being, while also fostering a supportive community for learning and growth. Through structured programs and expert guidance, it empowers people to achieve personal and professional success."
              ghLink=""
              demoLink="https://www.elevationmentorship.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideaallies}
              isBlog={false}
              title="Idea allies"
              description="Idea Allies is your launchpad from concept to startup reality—offering full-cycle support for founders at every stage. As both a startup accelerator and creative agency, they help validate ideas, design intuitive products, and scale with confidence through strategy, branding, MVP development, go-to-market planning, and post-launch support. With flexible engagement models—either service-based or equity-driven—and a founder-first mindset, Idea Allies is less of a vendor and more of a true strategic partner."
              ghLink=""
              demoLink="https://www.ideaallies.com/"
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
              imgPath={pacDashboard}
              isBlog={false}
              title="PAC Admin Dashboard"
              description="The PAC Admin Dashboard provides a seamless way to manage financial investments, track transactions, and oversee user activities. With a clean and intuitive interface, admins can monitor investment portfolios, manage product categories, and gain insights into user engagement. The dashboard ensures efficient financial management, making it easier to oversee assets and transactions in real time."
              ghLink=""
              demoLink="https://admin-asset-dashboard.vercel.app/categories"
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
