// import for React
import React from "react";
import { useEffect, useState } from "react";
// imports for return
import { Card, Container, Accordion, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";

//Materials page content
export default function Materials() {

  // use state to hold result of fetch
  const [allCourses, setAllCourses] = useState([]);

  // uses state to calculate output value
  useEffect(() => {

    // async function to allow await fetch
    let getCourses = async () => {

      // fetch to server on Materials page load
      let fetchResponse = await fetch("http://localhost:5000/materials")

      // assign response stream and return promise
      let courseData = await fetchResponse.json()
      
      //
      setAllCourses(courseData)
    }
    // call async
    getCourses()

    // runs on initial render
  }, []);

  /* content returned to Materials page */
  return (
    <div className="materialsBody">
      {/* header for materials page */}
      <h2 className="materialsHeader">Learning Materials from TalentLMS</h2>
      
      {/* map api data to variable for use in return */}
      <Row>
      {allCourses.map((course) => {
        return (
          <Col>
          <Container className="materialCards">
            <Card style={{ width: '20rem' }}>
              <Card.Img 
                src={course.big_avatar} 
                alt={course.name}
                />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{course.name}</Accordion.Header>
                  <Accordion.Body>
                  <Card.Body>
                    <Card.Text>
                      {course.description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Created on: {course.creation_date}</ListGroupItem>
                    <ListGroupItem>Last Updated: {course.last_update_on}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Text> 
                      Click the link below to visit the TalentLMS website!
                    </Card.Text>
                    <Card.Text> 
                      *You will need to login to access these courses
                    </Card.Text>
                    <Card.Link 
                      href="https://zakariahrittenhouse.talentlms.com/dashboard" 
                      target="_blank"
                    >
                      Link to TalentLMS
                    </Card.Link>
                  </Card.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Container>
          </Col>
        )
      })}
      </Row>
    </ div>
  );
}
