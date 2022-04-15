import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import greyBackground from "../images/grey.jpeg";
import julia from "../images/julia.png";

export default function BootstrapCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //           setIndex(selectedIndex);
  //         };

  return (
    <main className="mainCarousel">
      <Carousel variant="dark" interval={null}>
        <Carousel.Item>
          <img src={julia} alt="" /> 
          <Carousel.Caption>
            <h5 className="carouselText">
              "I have had the pleasure of attending training and development
              opportunities created and organized by Zak since 2016. Zak has the
              ability to approach learning topics in a way that is accessible
              across fields and allows for the diversity and inclusion of the
              participants, not only as individuals with diverse professional
              backgrounds but also in regards to race, gender, sexuality,
              disability, economic background and education of the participants.
              Zak educates in a way that allows for long term development. I
              have seen the long term positive impact on other attendees and
              myself in future collaborations and interactions. I would highly
              recommend Zak for future Training and Development opportunities."
            </h5>
            <p>Brynn Beitzel, Privacy Program Manager at Microsoft</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  src={julia} alt="" />
          <Carousel.Caption>
            <h5 className="carouselText">
              "Zak is a great asset to any project or organization. He works
              hard to identify needs and problem-solve while collaborating with
              others. Zak is passionate and innovative in his thinking. He
              follows through on the goals and tasks he sets out to complete or
              that are assigned to him."
            </h5>
            <p>
              Arielle Zerger, MSW, LSW Lead Clinician at Adult and Child Health
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  src={julia} alt="" />
          <Carousel.Caption>
            <h5 className="carouselText">
              "Zak worked for me as a Trainer and during that time, I quickly
              discovered what a tremendous asset he was. He's great at
              delivering content in a manner in which can be easily understood
              by his audience, helping employees reach their highest potential,
              and staying positive when faced with adversities."
            </h5>
            <p>
              Norman Gupton, Green Belt Practitioner Lean Six Sigma and COPC,
              Learning Architect and Training Transformation Specialist
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={julia} alt="" />
          <Carousel.Caption>
            <h5 className="carouselText">
              "I met Zak when he was a volunteer activist with Soulforce, one of
              my clients. As the media director for Soulforce, I was keenly
              aware each of the Equality Ride activists and as a former Equality
              Rider myself, I know the immense preparation, dedication,
              teamwork, and patience that is required of anyone thrust into the
              whirlwind project of traveling the country to engage and support
              dialogues around critical but controversial issues such as
              homophobia, transphobia, and fundamentalism. In the years since,
              I've seen Zak develop into an activist in his own right,
              courageously taking on issues that are dear to him and eloquently
              (and bravely, I might add) speaking up and speaking out. He is a
              skilled organizer and a compassionate friend. I'm grateful that I
              had the pleasure of working with him and thankful for his
              continued presence in my network."
            </h5>
            <p>Brian Murphy Creative Director, Video Marketing</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}
