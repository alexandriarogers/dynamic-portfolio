import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../img/color-sharp2.png'
import projImg1 from '../img/project-img1.png'
import projImg2 from '../img/project-img2.png'
import projImg3 from '../img/project-img3.png'

export const Projects =() => {
    const projects = [
        
        {
            title: <a className="project-link" href="https://alexandriarogers.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"> Weather Dashboard </a>,
            description: "A Weather Dashboard created using HTML, CSS, JavaScript, and current weather data via the Openweathermap.org API.",
            imgUrl: projImg1,
          },
          
          {
            title: <a className="project-link" href="https://alexandriarogers.github.io/Daily-Scheduler/" target="_blank" rel="noreferrer"> Work Day Scheduler </a>,
            description: "A simple calendar application that allows a user to save events for each hour of the day. Created using HTML, CSS, jQuery, and the Moment.js library. ",
            imgUrl: projImg2,
          },
          {
            title: <a className="project-link" href="https://alexandriarogers.github.io/JavaScript-Quiz/" target="_blank" rel="noreferrer"> Javascript Quiz </a>,
            description: "A JavaScript quiz created with HTML, CSS, and JavaScript.",
            imgUrl: projImg3,
          },
       

    ]

    return(
        <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
                <div className="project-bx">
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>More Projects Coming Soon!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>More Projects Coming Soon!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Background"></img>
      </section>
    )

}