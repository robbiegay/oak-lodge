import './App.css';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import TextBox from "./TextBox";

/*
This website is dedicated to Robert Newton Fryer IV
June 21st, 1937 - August 4th, 2021

Robbie built this site for his Grandfather Bob
They had lunch on July 31st, 2021 to discuss the plan for the site
That day, Robbie built a rough draft and that evening he showed the website to Bob and Judi
They had a great dinner discussing the website and talking about Bob's service in the Navy
That was the last time Robbie saw his grandfather
*/

export default function Home() {
    return (
        <>
            <div className="backgroundImage">
                <NavBar />

                <br /><br /><br /><br />
                
                <Container>
                    <Row>
                        <Col xs={0} sm={0} md={0} lg={0} />
                        <Col xs={12} sm={12} md={8} lg={7}>
                            <TextBox>
                                <h2>
                                    The Oak Lodge
                                </h2>
                                <p>
                                    Located between Wild Turkey and Four Roses distillery, The Oak Lodge is a restored 1818 log cabin in <a href="https://visitlawrenceburgky.com/" title="Visit Lawrenceburg">Lawrenceburg, KY</a>. Fully restored in 2021, the cabin features original oak logs, refinished plank flooring, gas fireplace, full kitchen, and both a screened and open air porch. The cabin sleeps 5 ⁠— 2 in the double beds in the upstairs loft, and 1 on the downstairs fold-out couch.
                                </p>
                                <ul>
                                    <li>
                                        <a href="https://fourrosesbourbon.com/" title="Four Roses Distillery">Four Roses Distillery</a>: 7 minutes
                                    </li>
                                    <li>
                                        <a href="https://www.wildturkeybourbon.com/" title="Wild Turkey Distillery">Wild Turkey Distillery</a>: 8 minutes
                                    </li>
                                    <li>
                                        <a href="https://visitfrankfort.com/" title="Visit Frankfort">Frankfort</a>: 23 minutes
                                    </li>
                                    <li>
                                        <a href="https://www.bluegrassairport.com/" title="Bluegrass Airport">Bluegrass Airport</a>: 24 minutes
                                    </li>
                                    <li>
                                        <a href="https://www.visitlex.com/" title="Visit Lex">Lexington</a>: 34 minutes
                                    </li>
                                </ul>
                                <p>
                                    Rate: 
                                    <ul>
                                        <li>
                                            Monday - Thursday: $175
                                        </li>
                                        <li>
                                            Friday - Sunday: $200
                                        </li>
                                        <li>
                                            $75 cleaning fee and 10% state, room, and city tax
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Excessive mess or damage to property may result in additional expenses. No pets or smoking. Certain high demand periods may require a minimum stay (Bourbon Chase, Keeneland, etc.)
                                </p>
                                <p>
                                    To inquire about availability or book a stay, please email Judi Fryer at: <a href="mailto:fryantique@roadrunner.com">fryantique@roadrunner.com</a> or call (502) 229-7112
                                </p>
                            </TextBox>
                        </Col>
                        <Col xs={0} sm={0} md={3} lg={4} />
                    </Row>
                </Container>
            </div>
        </>
    );
}
