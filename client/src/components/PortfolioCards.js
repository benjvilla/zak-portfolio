import React from "react";
import { Card, Accordion, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";
import NEOWeek2 from "../images/New Hire Orientation - Week 2.jpg";
import Expectations from "../images/New Hire Orientation - Expectations, Conduct and Appearance.jpg";
import GoGuidelines from "../images/New Hire Orientation - Go Guidelines.jpg";
import ZakBrand from "../images/ZakPersonalBrand.png";
import QueeringHealthcare from "../images/Queering Healthcare.jpg"
import QueeringHealthcare2 from "../images/QueeringHealthcare-2.jpg"
import QueeringHealthcare3 from "../images/QueeringHealthcare-Lived Experience Data.jpg"
import QueeringHealthcare4 from "../images/QueeringHealthcare-Case Study.jpg"
import LinkedInLearning from "../images/LinkedInLearning.jpg"
import LinkedInLearning1 from "../images/LinkedInLearning-1.jpg"
import LinkedInLearning2 from "../images/LinkedInLearning-2.jpg"
import LinkedInLearning3 from "../images/LinkedInLearning-3.jpg"
import LinkedInLearning4 from "../images/LinkedInLearning-4.jpg"
import LinkedInLearning5 from "../images/LinkedInLearning-5.jpg"
import UofL from "../images/UoLCourseWork.png"
import UofL1 from "../images/UofLCourseWork-2.JPG"
import EFA from "../images/EFA.png"
import EFA1 from "../images/EFA-1.png"
import EFA2 from "../images/EFA-2.png"
import EFA3 from "../images/EFA-3.png"
import EFA4 from "../images/EFA-4.png"

export default function PortfolioCards() {
  // variable to hold image, title, text
  // const cardInfo = [
  //   {
  //     coverImage: [{ image: NEOWeek1, alt: "New Hire Orientation Week 1" }],
  //     title: "New Hire Orientation Overview",
  //     text: "Some Text to describe the project",
  //     innerImage: [
  //       { image: NEOWeek2, alt: "New Hire Orientation Week 2" },
  //       { image: Expectations, alt: "Expectations, Conduct and Appearance" },
  //     ],
  //     header: "Accordian Header",
  //   },
    // {
    //     coverImage: [{ image: "", alt: "" }],
    //     title: "",
    //     text: "t",
    //     innerImage: [
    //       { image: "", alt: "" },
    //       { image: "", alt: "" },
    //     ],
    //     header: "Accordian Header",

    //   },
  // ];

  // function to render cards
  // const displayCard = (card, index) => {
  //   return (
  //     <Card style={{ width: "50rem" }} key={index}>
  //       {/* map cardinfo array */}
  //       {/* {cardInfo.map(cardInfo.coverImage)} */}

  //       <Card.Img
  //         variant="top"
  //         src={NEOWeek1}
  //         alt="New Hire Orientaitn Week 1"
  //       />
  //       <Card.Body>
  //         <Card.Title>New Hire Orientation</Card.Title>
  //         <Card.Text>Placeholder Text</Card.Text>
  //         <Accordion defaultActiveKey="0">
  //           <Accordion.Item eventKey="1">
  //             <Accordion.Header>Placeholder text</Accordion.Header>
  //             <Accordion.Body>
  //             <Card.Img variant="top" src={NEOWeek2} alt="New Hire Orientation Week 2"/>
  //             </Accordion.Body>
  //           </Accordion.Item>
  //         </Accordion>
  //       </Card.Body>
  //     </Card>
  //   );
  // };

  return (
    <>
      <Container fluid="md">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Card 1 */}
              <Card style={{ width: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={NEOWeek1}
                  alt="New Hire Orientaitn Week 1"
                />
                <Card.Body>
                  <Card.Title>New Hire Orientation</Card.Title>
                  <Card.Text>Placeholder Text</Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Placeholder text</Accordion.Header>
                      <Accordion.Body>
                        <Card.Img
                          variant="top"
                          src={NEOWeek2}
                          alt="New Hire Orientation Week 2"
                        />
                        <Card.Img
                          variant="top"
                          src={Expectations}
                          alt="Expectations, Conduct and Appearance"
                        /><Card.Img
                        variant="top"
                        src={GoGuidelines}
                        alt="GO Guidelines"
                      />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              {/* Card 1 End */}
              {/* Card 2 Start */}
              <Card style={{ width: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={QueeringHealthcare }
                  alt="Queering Healthcare"
                />
                <Card.Body>
                  <Card.Title>Queering Healthcare</Card.Title>
                  <Card.Text>Placeholder Text</Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Placeholder text</Accordion.Header>
                      <Accordion.Body>
                        <Card.Img
                          variant="top"
                          src={QueeringHealthcare2}
                          alt="Robert Rafskym American writer, publicist and HIV/AIDS activist quote"
                        />
                        <Card.Img
                          variant="top"
                          src={QueeringHealthcare3}
                          alt="Lived Experience Data"
                        />
                        <Card.Img
                          variant="top"
                          src={QueeringHealthcare4}
                          alt="Case Study: Florence"
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              {/* Card 2 End */}
              {/* Card 3 Start */}
              <Card style={{ width: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={LinkedInLearning}
                  alt="LinkedIn Learning"
                />
                <Card.Body>
                  <Card.Title>LinkedIn Learning</Card.Title>
                  <Card.Text>LinkedIn Learning Platform Introduction ILT</Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Placeholder text</Accordion.Header>
                      <Accordion.Body>
                        <Card.Img
                          variant="top"
                          src={LinkedInLearning1}
                          alt="LinkedIn Learning Objectives"
                        />
                        <Card.Img
                          variant="top"
                          src={LinkedInLearning2}
                          alt="What is LinkedIn Learning? The benefit you didn't know you needed."
                        />
                         <Card.Img
                          variant="top"
                          src={LinkedInLearning3}
                          alt="LinkedIn learning Keep learning in the moments that matter. Sign in page."
                        />
                        <Card.Img
                          variant="top"
                          src={LinkedInLearning4}
                          alt="LinkedIn learning Homepage"
                        />
                        <Card.Img
                          variant="top"
                          src={LinkedInLearning5}
                          alt="LinkedIn learning Course vs Path"
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              {/* Card 3 End */}
              {/* Card 4 Start */}
              <Card style={{ width: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={UofL1}
                  alt="What is a needs Assessment: in 6 parts"
                />
                <Card.Body>
                  <Card.Title>University of Louisville Coursework</Card.Title>
                  <Card.Text>I currently the University of Louisville and I am working towards my B.S Organizational Leadership and Learning with a minor in Leadership and Talent Development and undergraduate certificate in Human Resources Leadership. I will graduate in May 2022.</Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Below are the final projects during my tenure</Accordion.Header>
                      <Accordion.Body>
                        <Card.Img
                          variant="top"
                          src={UofL}
                          alt="What is a needs Assessment: in 6 parts"
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              {/* Card 4 End */}
              {/* Card 5 Start */}
              <Card style={{ width: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={EFA}
                  alt="Installing Jave. Use case and client interation for Cup o'Joy"
                />
                <Card.Body>
                  <Card.Title>EFA -Real World Project</Card.Title>
                  <Card.Text>As a group of 4 we were assigned a brand redesign for a DTC coffee company. Original site had little branding and a grayscale user interface. We then had to present to the client our solutions. Full presentation deck, video of click through, and user research and personas were built to inform the design for the company. I was our design system manager, so role was to build out the entire design system our Lead Designer would use to build out the high fidelity mockups.</Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Placeholder text</Accordion.Header>
                      <Accordion.Body>
                        <Card.Img
                          variant="top"
                          src={EFA1}
                          alt="The team. About. Students in Eleven Fifty Academy's Jan '21 User Experience Design Bootcamp"
                        />
                        <Card.Img
                          variant="top"
                          src={EFA2}
                          alt="The Problem. Brand Awareness. User Confusion. Current Design. Market Saturation. Usability"
                        />
                        <Card.Img
                          variant="top"
                          src={EFA3}
                          alt="Solution. Brand the product and create an easy-to-use digital interface that inspired confidence in the product."
                        />
                        <Card.Img
                          variant="top"
                          src={EFA4}
                          alt="Product branding and mission. Colors, logos, and typography. Typography Britannic Bold. Mission Cup o' Joy offers a unique digital shopping experience for ethical consumer by providing the best locally sources coffee delivered worldwide."
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              {/* Card 5 end */}
              {/* Card 6 Start */}
              <Card style={{ width: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={NEOWeek1}
                  alt="New Hire Orientaitn Week 1"
                />
                <Card.Body>
                  <Card.Title>New Hire Orientation</Card.Title>
                  <Card.Text>Placeholder Text</Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Placeholder text</Accordion.Header>
                      <Accordion.Body>
                        <Card.Img
                          variant="top"
                          src={NEOWeek2}
                          alt="New Hire Orientation Week 2"
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              {/* Card 6 End */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
