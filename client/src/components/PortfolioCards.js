import React from "react";
import { Card, Accordion, Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";
import NEOWeek2 from "../images/New Hire Orientation - Week 2.jpg";
import Expectations from "../images/New Hire Orientation - Expectations, Conduct and Appearance.jpg";
import GoGuidelines from "../images/New Hire Orientation - Go Guidelines.jpg";
import QueeringHealthcare from "../images/Queering Healthcare.jpg";
import QueeringHealthcare2 from "../images/QueeringHealthcare-2.jpg";
import QueeringHealthcare3 from "../images/QueeringHealthcare-Lived Experience Data.jpg";
import QueeringHealthcare4 from "../images/QueeringHealthcare-Case Study.jpg";
import UX01 from "../images/UX01.jpg";
import UX02 from "../images/UX02.jpeg";
import UX03 from "../images/UX03.png";
import UX04JPG from "../images/UX04.jpeg";
import UX04JPEG from "../images/UX04.jpg";
import UX05 from "../images/UX05.jpg";
import UX06 from "../images/UX06.jpg";
import UX07 from "../images/UX07.jpg";
import section50801 from "../images/Section508-1.jpg"
import section50802 from "../images/Section508-2.jpg"
import section50803 from "../images/Section508-3.jpg"
import section50804 from "../images/Section508-4.jpg"
import digitaldesign01 from "../images/DigitalDesign01.png"
import digitaldesign02 from "../images/DigitalDesign02.png"
import digitaldesign03 from "../images/DigitalDesign03.jpg"
import digitaldesign04 from "../images/DigitalDesign04.png"
import LinkedInLearning from "../images/LinkedInLearning.jpg";
import LinkedInLearning1 from "../images/LinkedInLearning-1.jpg";
import LinkedInLearning2 from "../images/LinkedInLearning-2.jpg";
import LinkedInLearning3 from "../images/LinkedInLearning-3.jpg";
import LinkedInLearning4 from "../images/LinkedInLearning-4.jpg";
import LinkedInLearning5 from "../images/LinkedInLearning-5.jpg";
import PersonalBrand01 from "../images/PersonalBrand01.png"
import PersonalBrand02 from "../images/PersonalBrand02.png"
import PersonalBrand03 from "../images/PersonalBrand03.png"
import PersonalBrand04 from "../images/PersonalBrand04.png"
import UofL01 from "../images/UofL01.jpg"
import UofL02 from "../images/UofL02.jpg"
import UofL03 from "../images/UofL03.jpg"
import UofL04 from "../images/UofL04.png"
import UofL05 from "../images/UofL05.jpg"
import UofL06 from "../images/UofL06.png"
import UofL07 from "../images/UofL07.png"

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
        <div className="portfolioContainer">
          <div className="col">
            {/* Card 1 Start UX/UI Work */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={UX01}
                alt="ThunderSparx Student Onboarding User Flow"
              />
              <Card.Body>
                <Card.Title>UX/UI Work</Card.Title>
                <Card.Text>From January to March ‘21 I enrolled in the ElevenFifty Academy UX/UI Bootcamp. For our first project we were given a fictional product that we would be working with. The product was an online classroom tool that is being built. Users of the platform will include teachers, students, and parents. This project took us through building our first fully realized design. User Research, user flow, design thinking and design system building, wireframing, and prototyping skills were all learned and then applied for this project. The second and final project was a group project. As a group of 4 we were assigned a brand redesign for a DTC coffee company. Original site had little branding and a grayscale user interface. We then had to present to the client our solutions. Full presentation deck, video of click through, and user research and personas were built to inform the design for the company. I was our design system manager, so my role was to build out the entire design system our Lead Designer would use to build out the high fidelity mockups.</Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my UX/UI work below</Accordion.Header>
                    <Accordion.Body>
                      <Card.Img
                        variant="top"
                        src={UX02}
                        alt="Person Description Thomas Kissinger case study"
                      />
                      <Card.Img
                        variant="top"
                        src={UX03}
                        alt="Installing Java. Use case and Client Interactin for Cup o' Joy"
                      />
                      <Card.Img
                        variant="top"
                        src={UX04JPEG}
                        alt="Four circle images with square boxes"
                        
                      />
                      <Card.Img
                        variant="top"
                        src={UX04JPG}
                        alt="Hand drawn webpage mockup"
                      />
                      <Card.Img
                        variant="top"
                        src={UX05}
                        alt="Flow chart. Demographics/Profile Creation, Enter Classroom, Attend Class, Upload Assignment, Access Messaging, Onboarding Complete"
                      />
                       <Card.Img
                        variant="top"
                        src={UX06}
                        alt="mobile app flow chart"
                      />
                      <Card.Img
                        variant="top"
                        src={UX07}
                        alt="mobile app visual mock up"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            {/* Card 1 End */}
            {/* Card 2 Section 508 Start */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={section50803}
                alt="Getting Started with Section 508"
              />
              <Card.Body>
                <Card.Title>Section 508</Card.Title>
                <Card.Text>Section 508 of the Rehabilitation Act of 1973, as amended, requires agencies, during the procurement, development, maintenance, or use of Information and Communication Technology (ICT), to ensure that individuals with disabilities have access to and use of ICT information and data comparable to the access and use afforded to individuals without disabilities, unless an undue burden would be imposed on the agency. This was an eLearning Course I designed for a government agency</Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my Section 508 work below</Accordion.Header>
                    <Accordion.Body>
                      <Card.Img
                        variant="top"
                        src={section50801}
                        alt="Section 508 Defined"
                      />
                      <Card.Img
                        variant="top"
                        src={section50802}
                        alt="Section 508 Course Objectives"
                      />
                      <Card.Img
                        variant="top"
                        src={section50804}
                        alt="Section 508 Lesson Objectives"
                      />
                      
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            {/* Card 2 End */}
            {/* Card 3 Queering Healthcare Start */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={QueeringHealthcare}
                alt="Queering Healthcare"
              />
              <Card.Body>
                <Card.Title>Queering Healthcare</Card.Title>
                <Card.Text>This deck was built and presented in DEI tracks at various healthcare conferences to discuss the LGBTQ+ Healthcare specifics</Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my DEI work below</Accordion.Header>
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
            {/* Card 3 End */}
            {/* Card 4 Digital Design Work Start */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={digitaldesign01}
                alt="Show up in every moment like you are meant to be there"
              />
              <Card.Body>
                <Card.Title>Digital Design Work</Card.Title>
                <Card.Text>
                A collection of various images I have created and shared on social media
                </Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    Click to see more images of my social media work below
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card.Img
                        variant="top"
                        src={digitaldesign02}
                        alt="Excellence Perfection"
                      />
                      <Card.Img
                        variant="top"
                        src={digitaldesign03}
                        alt="City Year Chicago. 06-07 Corps playlist"
                      />
                      <Card.Img
                        variant="top"
                        src={digitaldesign04}
                        alt="Brand New Bitch"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            {/* Card 4 End */}
            {/* Card 5 LinkedIn Learning */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={LinkedInLearning}
                alt="LinkedIn Learning"
              />
              <Card.Body>
                <Card.Title>LinkedIn Learning</Card.Title>
                <Card.Text>
                  LinkedIn Learning Platform Introduction ILT
                </Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my LinkedIn learning work below</Accordion.Header>
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
            {/* Card 5 End */}
            {/* Card 6 New Hire Onboarding Start */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={NEOWeek1}
                alt="New Hire Orientaitn Week 1"
              />
              <Card.Body>
                <Card.Title>New Hire Orientation</Card.Title>
                <Card.Text>I was tasked to redesign a deck used for New Hire Onboarding that was interactive and on brand for an agency.</Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my New Hire Orientation work below</Accordion.Header>
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
                      />
                       <Card.Img
                        variant="top"
                        src={GoGuidelines}
                        alt="Go Guidelines"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            {/* Card 6 end */}
            {/* Card 7 Personal Branding Exercise Start */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={PersonalBrand01}
                alt="ZR"
              />
              <Card.Body>
                <Card.Title>Personal Branding Exercise</Card.Title>
                <Card.Text>The results of my first personal branding exercise focusing on impact, color theory and feel</Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my personal branding work below</Accordion.Header>
                    <Accordion.Body>
                      <Card.Img
                        variant="top"
                        src={PersonalBrand02}
                        alt="ZR light background, UX/UI Desiner, LXD Specialist, Elearning Architect, DEI Practitioner"
                      />
                      <Card.Img
                        variant="top"
                        src={PersonalBrand03}
                        alt="ZR dark background, UX/UI Desiner, LXD Specialist, Elearning Architect, DEI Practitioner"
                      />
                      <Card.Img
                        variant="top"
                        src={PersonalBrand04}
                        alt="ZR dark background"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            {/* Card 7 End */}
            {/* Card 8 UofL Coursework Start */}
            <Card className="individualCard">
              <Card.Img
                variant="top"
                src={UofL01}
                alt="Diversity Equity and Inclusion: Foundations, Zakariah Rittenhosue, LEAD 575, Spring 20021"
              />
              <Card.Body>
                <Card.Title>University of Louisville Coursework</Card.Title>
                <Card.Text>I am currently at the University of Louisville and I am working towards my B.S Organizational Leadership and Learning with a minor in Leadership and Talent Development and undergraduate certificate in Human Resources Leadership. I will graduate in December 2022. Below are the final projects during my tenure.
</Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click to see more images of my University work below</Accordion.Header>
                    <Accordion.Body>
                      <Card.Img
                        variant="top"
                        src={UofL02}
                        alt="New Patien Registration"
                      />
                      <Card.Img
                        variant="top"
                        src={UofL03}
                        alt="Learn 365. Zakariah Ritenhouse."
                      />
                      <Card.Img
                        variant="top"
                        src={UofL04}
                        alt="What is a needs assessment: in 6 parts."
                      />
                      <Card.Img
                        variant="top"
                        src={UofL05}
                        alt="Learning Expirience Designer. Job analysis and performance management"
                      />
                      <Card.Img
                        variant="top"
                        src={UofL06}
                        alt="Survey question writing"
                      />
                      <Card.Img
                        variant="top"
                        src={UofL07}
                        alt="Adult and child health EMR training: support services"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            {/* Card 8 End */}
          </div>
        </div>
      </Container>
    </>
  );
}
