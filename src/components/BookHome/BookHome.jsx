"use client"

import Image from "next/image"
import { Button, Col, Container, Row } from "react-bootstrap"
import './BookHome.css'
import Nav from 'react-bootstrap/Nav';

const BookHome = () => {
    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="d-flex w-100 justify-content-center align-items-center">
                            <Image src="/assets/book.png" width={400} height={350} style={{ objectFit: 'contain', borderRadius:'20px' }} loading="lazy" alt="book-img"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="bh_right">
                            <h1>Book a <br /> ticket & just leave </h1>
                            <p style={{color:'#777'}} className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis fugiat eius voluptatibus ad. Nesciunt ut ratione amet enim nam distinctio nostrum adipisci, itaque ex laborum, repudiandae cupiditate omnis fugit.</p>
                            <Nav.Link href="/all-events" className="text-decoration-none">
                                <Button className="btn_bookHome">Book</Button>
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BookHome