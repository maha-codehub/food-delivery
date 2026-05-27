import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PromotionImage from "../assets/promotion/pro.png";
function Section4() {
  return (
   <>
   <section className ="promotion_section">
    <Container>
        <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src={PromotionImage} alt="Promotion" className="img-fluid" />
            </Col>
            <Col lg ={6} className='px-5'>
            <h2>Nothing brings people together like a good burger</h2>
            <p>
              Experience delicious burgers prepared with fresh ingredients, perfectly seasoned patties, crisp vegetables, and creamy signature sauces. From the first bite to the last, enjoy rich flavors, soft buns, and satisfying taste crafted to make every meal unforgettable.
            </p>
            <ul>
                <li>
                    <p>
                    Juicy flame-grilled burgers made with fresh ingredients, layered with crispy lettuce, melted cheese, and signature sauces for the perfect bite.
                    </p>
                    </li>
                    <li>
                        <p>
                        Enjoy rich flavors, soft toasted buns, and mouthwatering taste crafted fresh every day for true burger lovers.
                        </p>
                    </li>
                    <li>
                        <p>
                        Savor the taste of premium handcrafted burgers packed with fresh ingredients, smoky grilled patties, creamy sauces, and perfectly toasted buns. Every bite delivers bold flavor, delicious texture, and a satisfying experience made for every burger craving.
                        </p>
                    </li>
            </ul>
            </Col>
        </Row>
    </Container>
   </section>
   {/*BG Parallax Scroll*/}
   <section className="bg_parallax_scroll">

   </section>
   </>
    
  )
}

export default Section4
