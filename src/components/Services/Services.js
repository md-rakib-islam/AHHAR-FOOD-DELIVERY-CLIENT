import React from "react";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import useservices from "../../hooks/useservices.js";
import bgImage from "./../../assets/images/sectionBg.png";

const services = () => {
  const [services] = useservices();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <Bounce left cascade>
          <h2 className="text-center text-white mb-0">Our All services</h2>
        </Bounce>
        <Bounce right cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Learn exciting technologies from web development, design, game
            development and more!
          </p>
        </Bounce>
        <Row>
          {services?.map((service) => (
            <service service={service} id={service.id}></service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default services;
