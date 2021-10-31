import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import sectionBg from "./../assets/images/sectionBg.png";
const About = () => {
  return (
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO AHAR FOOD DELIVERY
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Why Choose Us</h5>
              <p className="text-muted">
                food, substance consisting essentially of protein, carbohydrate,
                fat, and other nutrients used in the body of an organism to
                sustain growth and vital processes and to furnish energy. The
                absorption and utilization of food by the body is fundamental to
                nutrition and is facilitated by digestion. Plants, which convert
                solar energy to food by photosynthesis, are the primary food
                source. Animals that feed on plants often serve as sources of
                food for other animals. To learn more about the sequence of
                transfers of matter and energy in the form of food from organism
                to organism, see food chain.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                <span className="text-danger fw-bold">
                  Within one hour delivery service
                </span>{" "}
                <br />
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
                <span className="text-danger fw-bold">
                  Within one hour delivery service
                </span>
                Food is any substance consumed to provide nutritional support
                for an organism.Food is any substance consumed to provide
                nutritional support for an organism.Food is any substance
                consumed to provide nutritional support for an organism.Food is
                any substance consumed to provide nutritional support for an
                organism.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-danger"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
