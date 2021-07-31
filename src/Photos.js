import './App.css';
import React from "react";
import NavBar from "./NavBar";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function Photos() {
    return (
        <>
            <div>
                <NavBar />
                <br /><br />

                <Container>
                    <Row>
                        <Col xs={2} />
                        <Col>
                            <Carousel className="darkBorder">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/front.JPG"}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>The front yard</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/upstairs.JPG"}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Upstairs Loft</h3>
                                        <p>Two double beds; sitting area with Keurig machine</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/backRenovations.JPG"}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Back Porch</h3>
                                        <p>Back additions being added to the cabin</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/stairRenovations.JPG"}
                                        alt="Forth slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Before Flipping Stairs</h3>
                                        <p>Trinity Satterley preparing to change the direction of the stairs</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/stairRenovations2.JPG"}
                                        alt="Fifth slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>After Flipping Stairs</h3>
                                        <p>Bob Fryer inspecting the flipped stairs</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/stairRenovations3.JPG"}
                                        alt="Sisth slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className="d-inline-flex px-2 bg-dark rounded">
                                            200 Year Oak Logs
                                        </h3>
                                        <p className="d-inline-flex px-2 bg-dark rounded">
                                            The 200 year old white oak logs are so sturdy that a chainsaw had difficulty removing a small portion of one log
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={2} />
                    </Row>
                </Container>
            </div>
        </>
    );
}
