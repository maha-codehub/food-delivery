import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Pizza from "../assets/about/pizza.png";
import  Salad from "../assets/about/salad.png";
import Delivery from "../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original Taste",
    paragraph: `Enjoy authentic handcrafted burgers made with premium ingredients, juicy patties, fresh vegetables, and rich signature sauces for an unforgettable flavor experience.`,
},
{
    image: Salad,
    title: "Quality Foods",
    paragraph: `Prepared with farm-fresh ingredients, crispy vegetables, soft buns, and perfectly grilled patties to deliver healthy, delicious, and satisfying meals every day.`,
},
{
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Get your favorite burgers delivered hot and fresh within minutes with our fast, reliable, and convenient doorstep delivery service anytime you crave.`,
}
  // Add more mock data objects as needed
];
function Section2() {
  return (
    <>
    <section className="about_section" id="about">
        <Container>
            <Row>
                <Col lg={{span:8,offset :2}} className ="text-center">
                <h2>The burger tastes better when you eat it with your family</h2>
                <p>
                  Juicy flame-grilled burgers made with fresh ingredients, layered with crispy lettuce, melted cheese, and signature sauces for the perfect bite. Enjoy rich flavors, soft toasted buns, and mouthwatering taste crafted fresh every day for true burger lovers.
                </p>
                <Link  to="/" className="btn order_now btn_red">
                Explore Full Menu
                </Link>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
        <Container>
            <Row className="justify-content-md-center">
{mockData.map((cardData,index)=>(
    <Col md ={6} lg={4} className="mb-4 mb-md-0 "key={index}>
        <div className="about_box text-center">
            <div className="about_icon">
                <img src ={cardData.image} className ="img-fluid alt="icon/>
            </div>
            <h4>
                {cardData.title}
            </h4>
            <p>
                {cardData.paragraph}
            </p>
        </div>
    </Col>
))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section2
