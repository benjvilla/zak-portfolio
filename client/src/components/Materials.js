// import for React
import React from "react";
import { useEffect, useState } from "react";
// imports for return
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

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
      console.log(fetchResponse)

      // assign response stream and return promise
      let courseData = await fetchResponse.json()
      console.log(courseData)
      
      //
      setAllCourses(courseData)
    }
    // call async
    getCourses()

    // runs on initial render
  }, []);
console.log(allCourses)

  /* content returned to Materials page */
  return (
    <div className="materialsBody">
      {/* header for materials page */}
      <h2 className="materialsHeader">Materials Page! (placeholder)</h2>
      
      {/* */}
      {allCourses.map((course) => {
        return (
          <Container>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Container>
        )
      })}
      
    </ div>
  );
}
