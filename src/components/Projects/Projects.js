import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import disney from '../../Assets/Projects/disney.png'
import landing from '../../Assets/Projects/landing.jpg'
import microsoft from '../../Assets/Projects/microsoft.png'
import music from '../../Assets/Projects/music.jpg'
import book from '../../Assets/Projects/Book-Recommendation-Engine.jpg'
import searchEngine from '../../Assets/Projects/search-engine.png'

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
              imgPath={music}
              isBlog={false}
              title="music-player"
              description="Discover and stream your favorite tunes with our music player app, powered by the Spotify API. Access an extensive library of songs, create personalized playlists, and enjoy curated recommendations based on your musical taste. Take your music on the go and immerse yourself in a world of endless melodies"
              ghLink="https://github.com/Sandeep1908/music-player.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microsoft}
              isBlog={false}
              title="Microsoft-clone"
              description="Elevate your user experience with our Microsoft clone frontend application. Immerse yourself in a sleek and intuitive interface, mirroring the familiar design of Microsoft applications. Seamlessly navigate through essential tools, collaborate effortlessly, and enhance your productivity with a user-friendly frontend that puts you in control of your digital workspace."
              ghLink="https://github.com/Sandeep1908/microsoft-clone.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Login-UI"
              description="Welcome to our captivating frontend login landing page. With its modern and visually appealing design, it provides a seamless login experience for users. Enjoy a clean interface, intuitive navigation, and secure authentication as you access your personalized account, making every login a breeze."
              ghLink="https://github.com/Sandeep1908/Login-UI.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={searchEngine}
              isBlog={false}
              title="Search-engine"
              description="Discover the vast digital universe with our powerful search engine. Find information, images, videos, and more from across the web with lightning-fast speed and accuracy. Enjoy a user-friendly interface, personalized results, and advanced search filters, empowering you to explore, learn, and stay informed with every search query."
              ghLink="https://github.com/Sandeep1908/SearchEngine.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disney}
              isBlog={false}
              title="Disney-Clone"
              description="
              Step into the enchanting world of our Disney clone frontend. Immerse yourself in a captivating and magical interface, reminiscent of beloved Disney movies. Experience a visually stunning design, delightful animations, and interactive features that bring the Disney magic to life, creating an unforgettable experience for users of all ages.."
              ghLink="https://github.com/Sandeep1908/disney-plus-clone.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Recommender System"
              description="
              Unlock a world of literary wonders with our book recommender system. Tailored to your unique reading preferences, it suggests captivating titles that match your interests. Explore new genres, discover hidden gems, and embark on unforgettable literary journeys with personalized recommendations that ignite your love for reading."
              ghLink="https://github.com/Sandeep1908/Book-recommender-system.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
