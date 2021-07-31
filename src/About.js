import './App.css';
import React from "react";
import NavBar from "./NavBar";
import TextBox from "./TextBox";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <>
            <div className="backgroundImage">
                <NavBar />

                <br /><br /><br /><br />

                <Container>
                    <Row>
                        <Col xs={1} />
                        <Col>
                            <TextBox>
                                <h2>
                                    Early History
                                </h2>

                                <p>
                                    The Oak Lodge was built by the Routt family in 1818. The Routt family married into the Bond family, and the cabin was a residence for the Routt/Bonds. The Bonds became well known in the Bourbon industry. John Bond began producing bourbon in Anderson county in 1820. in 1842, John left the company to his son and grandson, David and William. William later formed a partnership with his brother-in-law, C.C. Lillard in 1869 and they began labeling the product Lillard & Bond. The business stayed in the family until 1899 and was so renowned as to win the Grand Prize at the World Fair in 1904 in St. Louis [<a href="https://www.qualityliquorstore.com/bond-lillard-bourbon-whiskey/" title="Bond & Lillard Bourbon 375ml">1</a>]. After prohibition, major liquor firms began buying the rights to smaller companies, and Bond & Lillard was acquired by Wild Turkey. Wild Turkey currently produces a bottle of Lillard & Bond based off tasting notes from the 1904 world fair.
                                </p>

                                <p>
                                    Beyond its use as a private residence from the Routt and Bond families, the cabin has served many uses over the years: restaurant, barber shop, and antique store. Rumor has it, that United States president __ had an affair at the cabin in __.
                                </p>

                                <p>
                                    The cabin was originally located about __ feet n/s/e/w and was moved to its present location in 1934.
                                </p>

                                <h2>
                                    Renovations
                                </h2>

                                <p>
                                    In the mid-2000’s, the cabin fell out of use and began to deteriorate. For over a decade, the cabin sat empty. In 2020, Bob and Judi Fryer bought the property and began renovations. This projects was especially important to them as Bob is a decedent of the Bond family, and still lives on Bond/McKee land. Renovations were undertaken by master cabin carpenter Trinity Satterley. Trinity worked on the cabin every Saturday for a year and completed work in the summer of 2021.
                                </p>
                                <p>
                                    Renovation included: adding a bathroom and two porch (one covered, one uncovered, to the back of the cabin; flipping the orientation of the stairs to provide better flow to the loft; chinking and repairing exterior damage that occurred during the cabin’s vacancy. One thing that did not need much work was the 200 year old white oak logs — they were still in pristine condition.
                                </p>
                            </TextBox>
                        </Col>
                        <Col xs={5} />
                    </Row>
                </Container>
            </div>
        </>
    );
}