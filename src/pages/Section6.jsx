import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import User1 from "../assets/blog/review-author-1.jpg";
import User2 from "../assets/blog/review-author-2.jpg";
import User3 from "../assets/blog/review-author-3.jpg";
import User4 from "../assets/blog/review-author-5.jpg";

function Section6() {
    return (
        <section className="blog_section" id ="blog">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">

                        <Carousel
                            indicators={false}
                            controls={false}
                            interval={2500}
                            pause={false}
                        >

                            {/* Review 1 */}
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className="user_img">
                                        <img
                                            src={User1}
                                            className="img-fluid"
                                            alt="User-1"
                                        />
                                    </div>

                                    <p>
                                        The burger was juicy, flavorful, and perfectly cooked.
                                        Every bite tasted fresh and delicious with a great
                                        combination of ingredients.
                                    </p>

                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <h5>BY AMELIE NEWLOVE</h5>

                                </Carousel.Caption>
                            </Carousel.Item>

                            {/* Review 2 */}
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className="user_img">
                                        <img
                                            src={User2}
                                            className="img-fluid"
                                            alt="User-2"
                                        />
                                    </div>

                                    <p>
                                        Amazing taste and fresh ingredients.
                                        The pizza was hot and cheesy when it arrived.
                                    </p>

                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <h5>BY PRIYA SHARMA</h5>

                                </Carousel.Caption>
                            </Carousel.Item>

                            {/* Review 3 */}
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className="user_img">
                                        <img
                                            src={User3}
                                            className="img-fluid"
                                            alt="User-3"
                                        />
                                    </div>

                                    <p>
                                        Loved the quality of the food and the customer service
                                        was very friendly. Highly recommended!
                                    </p>

                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <h5>BY RAHUL VARMA</h5>

                                </Carousel.Caption>
                            </Carousel.Item>

                            {/* Review 4 */}
                            <Carousel.Item>
                                <Carousel.Caption>

                                    <div className="user_img">
                                        <img
                                            src={User4}
                                            className="img-fluid"
                                            alt="User-4"
                                        />
                                    </div>

                                    <p>
                                        Delicious meals with affordable prices.
                                        The desserts were my favorite part of the order.
                                    </p>

                                    <div className="item_rating mb-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>

                                    <h5>BY SNEHA REDDY</h5>

                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section6;