import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "./../hooks/useAuth.js";

const Details = () => {
  const history = useHistory();
  const [service, setservice] = useState({});
  const { id } = useParams();
  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;

  useEffect(() => {
    fetch(`https://ghostly-flesh-74666.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setservice(data);
        } else {
          alert("something went wrong!");
        }
      });
  }, [id]);

  return (
    <div className="my-4">
      {service?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={service.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{service.title}</h2>
              <h5>{service.desc}</h5>
              <Row>
                <Col>
                  <h1>Price:{service.price}$</h1>
                  <div className="my-2">
                    <Rating
                      initialRating={service.rating}
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
                    <span> {service.rating}</span>
                    <p className="mb-3">Total Review: {service.ratingCount}</p>
                    <button
                      onClick={() => {
                        if (uid) {
                          addToCart(service);
                        } else {
                          history.push("/login");
                        }
                      }}
                      className="btn btn-primary  w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <img
                      width="120px"
                      className="rounded-circle"
                      src={service.sellerThumb}
                      alt=""
                    />
                    <h5>Seller: {service.provider}</h5>
                    <p className="mb-0">Web Apps Developer</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO service Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
