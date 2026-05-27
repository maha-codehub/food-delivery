import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {

    const [isVisible, setVisible] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const listenToScroll = () => {

        let heightToHidden = 250;

        const windowScroll =
            document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (windowScroll > heightToHidden) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {

        window.addEventListener("scroll", listenToScroll);

        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };

    }, []);

    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Location</h5>
                                <p>5505 WaterFord District</p>
                                <p>Dr, Miami, FL 33126</p>
                                <p>United States</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Working Hours</h5>
                                <p>Mon-Fri: 9.00AM - 10.00PM</p>
                                <p>Saturday: 10.00AM - 8.30PM</p>
                                <p>Sunday: 12.00PM - 5.00PM</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Order Now</h5>
                                <p>Mon-Fri: 9.00AM - 10.00PM</p>
                                <p>Tasty Burger is waiting for you....</p>

                                <p>
                                    <Link to="tel:9998887777" className="calling">
                                        999-888-7777
                                    </Link>
                                </p>
                            </div>
                        </Col>

                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="text-center">
                                <h5>Follow Us</h5>

                                <p>Follow us for tasty foods....</p>

                                <ul className="list-unstyled text-center mt-2">

                                    <li>
                                        <Link to="">
                                            <i className="bi bi-facebook"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="">
                                            <i className="bi bi-twitter-x"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="">
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="">
                                            <i className="bi bi-youtube"></i>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <ul className="list-unstyled text-center mb-0">

                            <li>
                                <Link to="/">
                                    2026 <span>MAHACODEHUB</span> All Rights Reserved
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    2026 <span>About us</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    2026 <span>Privacy Policy</span>
                                </Link>
                            </li>

                        </ul>
                    </Row>

                </Container>
            </footer>

            {isVisible && (
                <div className="scroll_top" onClick={scrollTop}>
                    <i className="bi bi-arrow-up"></i>
                </div>
            )}
        </>
    );
}

export default Footer;