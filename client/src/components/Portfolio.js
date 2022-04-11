import React from "react";
import {
  Button,
  CardColumns,
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardBody,
  CardText,
  Accordion,
  AccordionItem,
  AccordionHeader,
  Collapse,
  Container

} from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";

export default function Portfolio() {

  return (
    <>
    <Container>
    <div className="container">
  <div className="row">
    <div className="col">
      {/* Card  */}
      <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={NEOWeek1}
  
  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
      </div>
      </div>
</Container>
    </>
  );
}
