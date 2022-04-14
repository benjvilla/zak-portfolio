import React from "react";
import { Card, Accordion, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";
import NEOWeek2 from "../images/New Hire Orientation - Week 2.jpg";
import Expectations from "../images/New Hire Orientation - Expectations, Conduct and Appearance.jpg";
import GoGuidelines from "../images/New Hire Orientation - Go Guidelines.jpg";
import ZakBrand from "../images/ZakPersonalBrand.png";

export default function PortfolioCards() {
  // variable to hold image, title, text
  const cardInfo = [
    {
      coverImage: [{ image: NEOWeek1, alt: "New Hire Orientation Week 1" }],
      title: "New Hire Orientation Overview",
      text: "Some Text to describe the project",
      innerImage: [
        { image: NEOWeek2, alt: "New Hire Orientation Week 2" },
        { image: Expectations, alt: "Expectations, Conduct and Appearance" },
      ],
      header: "Accordian Header",
    },
  {
      coverImage: [{ image: "", alt: "" }],
      title: "",
      text: "t",
      innerImage: [
        { image: "", alt: "" },
        { image: "", alt: "" },
      ],
      header: "Accordian Header",
    
    },
  ];

  // function to render cards
  const displayCard = (card, index) => {
    return (
      <Card style={{ width: "50rem" }} key={index}>
        {/* map cardinfo array */}
        {/* {cardInfo.map(cardInfo.coverImage)} */}
        
        <Card.Img
          variant="top"
          src={card.coverImage[index].image}
          alt={card.coverImage[index].alt}
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>{card.header}</Accordion.Header>
              <Accordion.Body>
                {card.innerImage.map(({image,alt}) =>( <Card.Img
                  variant="top"
                  src={image}
                  alt={alt}
                />))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Container fluid="md">
        <div className="container">
          <div className="row">
            <div className="col">
              {cardInfo.map(displayCard)}
              {/* Card End */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
