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
                                        src={process.env.PUBLIC_URL + "/images/front1.JPG"}
                                        alt="The front yard"
                                    />
                                    <Carousel.Caption>
                                        <h3>The front yard</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/front2.JPG"}
                                        alt="The front yard"
                                    />
                                    <Carousel.Caption>
                                        <h3>The front yard</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main1.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main2.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main3.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main4.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main5.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main6.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/main7.JPG"}
                                        alt="Main room of the first floor"
                                    />
                                    <Carousel.Caption>
                                        <h3>Main room of the first floor</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/bathroom.JPG"}
                                        alt="First floor bathroom"
                                    />
                                    <Carousel.Caption>
                                        <h3>First floor bathroom</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/porch1.JPG"}
                                        alt="Screened in porch"
                                    />
                                    <Carousel.Caption>
                                        <h3>Screened in porch</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/porch2.JPG"}
                                        alt="Screened in porch"
                                    />
                                    <Carousel.Caption>
                                        <h3>Screened in porch</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/porch3.JPG"}
                                        alt="Screened in porch"
                                    />
                                    <Carousel.Caption>
                                        <h3>Screened in porch</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/back1.JPG"}
                                        alt="Backyard"
                                    />
                                    <Carousel.Caption>
                                        <h3>Backyard</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/back2.JPG"}
                                        alt="Backyard"
                                    />
                                    <Carousel.Caption>
                                        <h3>Backyard</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/upstairs1.JPG"}
                                        alt="Upstairs loft"
                                    />
                                    <Carousel.Caption>
                                        <h3>Upstairs loft</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/upstairs2.JPG"}
                                        alt="Upstairs loft"
                                    />
                                    <Carousel.Caption>
                                        <h3>Upstairs loft</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/bobAndJudi.JPG"}
                                        alt="Owners Bob and Judi Fryer"
                                    />
                                    <Carousel.Caption>
                                        <h3>Owners Bob and Judi Fryer</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/backRenovations.JPG"}
                                        alt="Back additions"
                                    />

                                    <Carousel.Caption>
                                        <h3>Back Porch</h3>
                                        <p>Back additions being added to the cabin</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + "/images/stairRenovations1.JPG"}
                                        alt="Stairs Before"
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
                                        alt="Stairs After"
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
                                        alt="Chainsaw"
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
