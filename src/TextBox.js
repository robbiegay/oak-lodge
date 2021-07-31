import './App.css';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function TextBox({ children }) {
    return (
        <>
            <div className="textBox">
                <Container className="text-light text-justify">
                    <Row>
                        <Col xs={1} />
                        <Col>{children}</Col>
                        <Col xs={1} />
                    </Row>
                </Container>
            </div>
        </>
    );
}
