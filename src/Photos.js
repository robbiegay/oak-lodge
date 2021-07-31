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
                            </Carousel>
                        </Col>
                        <Col xs={2} />
                    </Row>
                </Container>
            </div>
        </>
    );
}
