import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import useCart from "../hooks/useCart.js";

const Cart = () => {
  const { selectedservice, remove, setSelectedservice, AllContexts } =
    useAuth();
  const { user } = AllContexts;
  const { uid } = useCart();

  const history = useHistory();
  const totalPrice = selectedservice.reduce(
    (total, service) => total + service.price,
    0
  );

  return (
    <div className="my-4">
      <Container>
        {selectedservice.length ? (
          <Row>
            <Col className="text-center" md={4}>
              <h4>Total {selectedservice.length} service selected</h4>
              <h6>Total Price: {totalPrice.toFixed(2)} $</h6>

              <button
                onClick={() => {
                  fetch(
                    `https://ghostly-flesh-74666.herokuapp.com/purchase/${uid}`,
                    {
                      method: "delete",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        alert("This for purchasing");
                        setSelectedservice([]);
                        history.push("/home");
                      }
                    });
                }}
                className="btn btn-primary"
              >
                Check Out
              </button>
            </Col>
            <Col className="" md={8}>
              {selectedservice.map((service) => {
                const { img, _id, title, desc, rating, ratingCount, price } =
                  service;

                return (
                  <Row className="my-2 bg-info" key={_id}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h5>{title}</h5>
                      <p className="mb-0">{desc}</p>
                      <h4>Price: {price}</h4>
                      <Row>
                        <Col sm={4}>
                          <Col>
                            <Rating
                              initialRating={rating}
                              readonly
                              emptySymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={emptyStar}
                                />
                              }
                              fullSymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={fullStar}
                                />
                              }
                            />
                            <span>{rating}</span>
                          </Col>
                          <Col>Total review {ratingCount}</Col>
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/services/${_id}`}
                              className="btn btn-primary w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(_id)}
                              className="btn btn-primary  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No service Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
