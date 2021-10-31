import React from "react";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Bg from "./../assets/images/bg.png";
import bgImage from "./../assets/images/sectionBg.png";

const Home = () => {
  const { services } = useAuth();
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <Slide left>
                  <h1 className="text-white ">
                    "AAHAR" <br /> FOOD DELIVERY & SERVICE
                  </h1>
                </Slide>
              </Bounce>

              <Bounce right cascade>
                <Slide right>
                  {" "}
                  <p className="my-4 text-white fs-5">
                    Food is any substance consumed to provide nutritional
                    support for an organism. <br /> Food is usually of plant,
                    animal or fungal origin
                  </p>
                </Slide>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/services"
                  className="rounded-pill btn btn-danger fs-5 py-2 px-4"
                >
                  View Our Foods
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="feature"
        className="py-5"
        style={{ background: `url(${bgImage})` }}
      >
        <div>
          <services></services>
        </div>
        <div className="text-center text-white">
          <Slide left>
            <h1>
              More Foods Items Deliver with{" "}
              <span className="text-danger">One Hour</span>
            </h1>
          </Slide>

          <Slide right>
            <p className="mb-0">
              Here you can find our all latest Foods Items. Choose your items..
            </p>
          </Slide>
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {services.slice(0, 9)?.map((service) => (
                <service id={service.id} service={service} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
