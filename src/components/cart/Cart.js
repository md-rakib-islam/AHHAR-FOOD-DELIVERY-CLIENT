import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Cart = () => {
  const { selectedservice, setSelectedservice, removeItem } = useAuth();
  const totalCost = selectedservice.reduce(
    (previous, service) => previous + service.price,
    0
  );

  return (
    <div className="my-4">
      {totalCost ? (
        <Container>
          <Row>
            <Col md={8}>
              {selectedservice.map((service) => (
                <Row className="bg-info my-3">
                  <Col
                    className="p-0 d-flex align-items-center justify-content-center"
                    md={4}
                  >
                    <img width="100%" src={service.img} alt="" />
                  </Col>
                  <Col className="py-2">
                    <h6 md={8}>{service.title}</h6>
                    <p className="m-0">{service.desc}</p>
                    <Row>
                      <Col>
                        <Row>
                          <h6 className="my-1">Price:${service.price}</h6>
                        </Row>
                        <Row>
                          <Col>
                            <Rating
                              readonly
                              style={{ color: "goldenrod" }}
                              initialRating={service.rating}
                              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />{" "}
                            {service.rating}
                            <p className="m-0">
                              Total Review: {service.ratingCount}
                            </p>
                          </Col>
                          <Col className="d-flex align-items-center">
                            <NavLink
                              to={`/services/${service.id}`}
                              className="w-50 btn py-2 btn-primary"
                            >
                              View Details
                            </NavLink>
                            <button
                              onClick={() => {
                                removeItem(service.id);
                              }}
                              className="btn py-2 ms-1 w-50 btn-primary"
                            >
                              Remove
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Col>
            <Col
              className="position-fixed"
              style={{ top: "100px", right: "30px" }}
              md={4}
            >
              <div className="text-center my-2">
                <h3>Total {selectedservice.length} service Selected</h3>
                <h4>Cost: {totalCost}$</h4>
                <button
                  onClick={() => {
                    setSelectedservice([]);
                    alert("Thanks for purchasing!!");
                  }}
                  className="btn btn-primary"
                >
                  Proceed to purchase
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1 className="text-center my-5 py-5">No service Selected</h1>
      )}
    </div>
  );
};

export default Cart;
