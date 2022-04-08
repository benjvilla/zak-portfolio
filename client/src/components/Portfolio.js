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
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";

export default function Portfolio() {
  return (
    <>
      <CardColumns className="item-center">
        <Card
          style={{
            width: "30rem",
            margin: "3rem",
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
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "30rem",
            margin: "3rem",
          }}
        >
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
        </Card>
        <Card
          style={{
            width: "30rem",
            margin: "3rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{
            backgroundColor: "#333",
            borderColor: "#333",
            width: "30rem",
            margin: "3rem",
          }}
        >
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
        <Card
          style={{
            width: "30rem",
            margin: "3rem",
          }}
        >
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
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
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card
          body
          color="primary"
          inverse
          style={{
            width: "30rem",
            margin: "3rem",
          }}
        >
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
      </CardColumns>
    </>
  );
}
