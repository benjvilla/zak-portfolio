import React from "react";
import { Card, Accordion, Col, Row, Container, } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NEOWeek1 from "../images/New Hire Orientation - Week 1.jpg";
import NEOWeek2 from "../images/New Hire Orientation - Week 2.jpg";
import Expectations from "../images/New Hire Orientation - Expectations, Conduct and Appearance.jpg";
import GoGuidelines from "../images/New Hire Orientation - Go Guidelines.jpg";
import ZakBrand from "../images/ZakPersonalBrand.png";
import Cards from "./PortfolioCards.js"

export default function Portfolio() {
  return (
    <>
      <h2 className="PortfolioHeader">What I've Done</h2>
    {/* importing cards component  */}
      <Cards/>
    </>
  );
}
