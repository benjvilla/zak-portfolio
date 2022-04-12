import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="contactBody">
      <Container className="justify-content-center">
        <h4 className="text-center">
          Freelance Work? Consulting? Prospective Employment? Speaking
          Engagement? Coffee and Nerd Talk? I can't wait to connect with you!
        </h4>
        <p className="mt-5">Required fields are marked with an asterisk (*)</p>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          action="Lniemcav@gmail.com"
          method="POST"
        >
          {/* Name */}
          <Form.Group className="mt-3" controlId="formBasicName">
            <Form.Label for="name">Name *</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              required
            />
            <Form.Text></Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label for="email">Email address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email address"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter your email address.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Reason for Contact */}
          <Form.Group className="mt-3" controlId="formBasicSubject">
            <Form.Label for="subject">Reason for Contact *</Form.Label>
            <Form.Control
              type="subject"
              name="subject"
              placeholder="Enter reason you want to connect"
              required
            />
            <Form.Text></Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter your reason for contact.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Message */}
          <Form.Group className="mt-3" controlId="formBasicMessage">
            <Form.Label for="message">Message *</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="message"
              name="message"
              placeholder="Type your message here"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="mt-2" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
}
