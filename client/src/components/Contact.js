import React from "react";
import Form from "./ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default function Contact() {

  document.title = "Zakariah Rittenhouse - Contact"
  
  return (
    <div className="contactBody">
      {/* Content in center of page */}
      <Container className="justify-content-center">
        <h4 className="text-center">
          Freelance Work? Consulting? Prospective Employment? Speaking
          Engagement? Coffee and Nerd Talk? I can't wait to connect with you!
        </h4>
        {/* Importing contact form */}
        <Form />
      </Container>
    </div>
  );
}
