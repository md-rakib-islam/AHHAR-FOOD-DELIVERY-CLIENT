import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import useservices from "../../hooks/useservices.js";
import Bg from "./../../assets/images/bg.png";
import bgImage from "./../../assets/images/sectionBg.png";

const Home = () => {
  const history = useHistory();
  const [services] = useservices();
  const featureservices = services.slice(0, 6);
  function GoServices() {
    history.push("/services");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">The best Food Services</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  Food is any substance consumed to provide nutritional support
                  for an organism. Food is usually of plant, animal or fungal
                  origin
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="primary"
                >
                  View services
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">More Items </h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              Here you can find our all latest Foods Items. Choose your items..
            </p>
          </Slide>
          <Row>
            {featureservices?.map((service) => (
              <service service={service} id={service.id}></service>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
