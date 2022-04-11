import React from "react";
import {
  Card,
  Accordion,
  Col,
  Row,
  Container

} from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";

export default function Portfolio() {

  return (
    <><Container fluid="md">
    <div className="container">
  <div className="row">
    <div className="col">
      {/* Card 1 */}
      <Card style={{ width: '50rem',
     }}>
  <Card.Img variant="top" src={NEOWeek1}
  
  />
  <Card.Body>
    <Card.Title>Card Title 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
    <Card.Img variant="top" src={NEOWeek1}
  />
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
  </Card.Body>
</Card>

{/* Card 2 */}
 <Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src={NEOWeek1}
  
  />
  <Card.Body>
    <Card.Title>Card Title 2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
    <Card.Img variant="top" src={NEOWeek1}
  />
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
  </Card.Body>
</Card>
{/* Card 3 */}
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src={NEOWeek1}
  
  />
  <Card.Body>
    <Card.Title>Card Title 3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #3</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
  </Card.Body>
</Card>
{/* card 4  */}

      </div>
      </div>
      </div>

</Container>
    </>
  );
}
