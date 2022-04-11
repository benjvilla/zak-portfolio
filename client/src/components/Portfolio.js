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

} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";

export default function Portfolio() {

  return (
    <>
    <Container>
    <div class="container">
  <div class="row">
    <div class="col">
      <CardColumns className="card-item-center">
        {/* Card 1 */}
        <Card
          style={{
            width: "40rem",
            marginTop: "3rem"
            // display: "flex",
            // flexDirection: 'center'
          }}
        >
          <CardImg
            alt="New Hire Orientation Week 1"
            src={NEOWeek1}
            top
            width="100%"
          />
          
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
  {/* Accordion  */}
  <div className="accordion accordion-flush">
  <Accordion
    open="1"
    toggle={function noRefCheck(){}}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionItem accordionId="1">
      
        <strong>
          This is the first item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
      
    </AccordionItem>
    
    </Accordion>
</div>
{/* Accordian End */}
          </CardBody>
        </Card>
        {/* Card 2 */}
        <Card
          style={{
            width: "40rem",
            marginTop: "3rem"
            // display: "flex",
            // flexDirection: 'center'
          }}
        >
          <CardImg
            alt="New Hire Orientation Week 1"
            src={NEOWeek1}
            top
            width="100%"
          />
          
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
  {/* Accordion  */}
  <div>
  <Accordion
    open="1"
    toggle={function noRefCheck(){
    }}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionItem accordionId="1">
        <strong>
          This is the first item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
    </Accordion>
</div>
          </CardBody>
        </Card>
        {/****Card 3 ****/}
        <Card
          style={{
            width: "40rem",
            marginTop: "3rem"
            // display: "flex",
            // flexDirection: 'center'
          }}
        >
          <CardImg
            alt="New Hire Orientation Week 1"
            src={NEOWeek1}
            top
            width="100%"
          />
          
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
  {/* Accordion  */}
  <div>
  <Accordion
    open="1"
    toggle={function noRefCheck(){
    }}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionItem accordionId="1">
        <strong>
          This is the first item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
    </Accordion>
</div>
          </CardBody>
        </Card>
        </CardColumns>
      </div>
  </div>
</div>
</Container>
    </>
  );
}
