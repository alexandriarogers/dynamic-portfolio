import { Container, Col, Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../img/meter1.svg';
import meter2 from '../img/meter2.svg';
import meter3 from '../img/meter3.svg';
import colorSharp from '../img/color-sharp.png';


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> In my professtional career I have demonstrated the ability to work individually and/or within a team while delivering viable solutions that consistently meet assignment/project goals. I am constantly working toward learning new technologies and how to incorporate them into my current skill set to help improve my job performance and ability.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Root Cause Analysis</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>API Troubleshooting</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Documentation</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
    
}