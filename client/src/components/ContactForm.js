import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactForm() {
  // Checking required fields for input
  const [validated, setValidated] = useState(false);
  // The Modal
  const [showModal, setShowModal] = useState(false);

  // // Handling the closing of the modal
  // const handleCloseModal = () => setShowModal(false);

  // To reload page after closing modal
  const reload = () => window.location.reload();

  // Function to handle the submit of the form
  const handleSubmit = async (event) => {
    // Assigned to the submit event
    const form = event.currentTarget;

    // If required fields don't have input
    if (form.checkValidity() === false) {
      event.preventDefault();
      // Don't submit
      event.stopPropagation();
    }

    // Run the argument "true" in place of the parameter "validated"
    setValidated(true);

    // If all fields entered correctly
    if (form.checkValidity() === true) {
      event.preventDefault();
      // Show Message
      setShowModal(true);
    }

    // Object with form details
    const { name, email, subject, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    // Fetch from server
    let response = await fetch("https://zak-portfolio-capstone.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      // Turn into string
      body: JSON.stringify(details),
    });
    let result = await response.json();
    console.log(result.status);
  };

  // // Handling the modal popping up
  // const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Form className="formContainer" noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Required fields text */}
        <p className="mt-5">Required fields are marked with an asterisk (*)</p>
        {/* Name */}
        <Form.Group className="mt-3" controlId="formBasicName">
          <Form.Label For="name">Name *</Form.Label>
          <Form.Control
            type="text"
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
          <Form.Label For="email">Email address *</Form.Label>
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
          <Form.Label For="subject">Reason for Contact *</Form.Label>
          <Form.Control
            type="text"
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
          <Form.Label For="message">Message *</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            type="message"
            name="message"
            placeholder="Type your message here"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="mt-2" variant="primary" type="submit">
          Send
        </Button>
        {/* <br /> */}

        
      </Form>
      <Modal show={showModal} onHide={reload}>
          <Modal.Body className="modalBody">Thank you for your message!</Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={reload}>
            Close
          </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

// render(<ContactForm />);
