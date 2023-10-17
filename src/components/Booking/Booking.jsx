"use client";
import { Col, Container, Form, Row, Button, Image } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';

const Booking = () => {
    const handleBooking = (event) => {
        event.preventDefault();
        toast('Event Booked successfully, thank you for the booking.')
    }
    const handleReserver = (event) => {
        event.preventDefault();
        toast('Event reserved successfully, after 48 hours reservation will be cancelled.')
    }

    return (
        <div className="py-4" data-aos="fade-up">
            <Container>
                <Breadcrumb className="text-decoration-none">
                    <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/single-events/1" className="text-decoration-none">single-event</Breadcrumb.Item>
                    <Breadcrumb.Item active>book</Breadcrumb.Item>
                </Breadcrumb>
                <Form className="border-top py-3 shadow-sm p-3 rounded">
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formGridEmail" className="d-flex justify-content-center align-items-center flex-column">
                                <Form.Label className="text-muted">Image</Form.Label>
                                <Image src="/assets/header_four.jpg" style={{ width: '80%', height: '60%', objectFit: 'cover' }} alt="event-images" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Row className="mb-3 gy-3">
                                <h5 className="w-100 text-secondary border-bottom">Event Information</h5>

                                <Col md={8}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Event Name</Form.Label>
                                        <Form.Control type="text" defaultValue="kaptai lake river view" className="border-0 shadow-sm rounded text-muted" disabled />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Location</Form.Label>
                                        <Form.Control type="text" defaultValue="Kaptai" className="border-0 shadow-sm rounded text-muted" disabled />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Rating</Form.Label>
                                        <Form.Control type="text" defaultValue="4.5" className="border-0 shadow-sm rounded text-muted" disabled />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Price</Form.Label>
                                        <Form.Control type="text" defaultValue="$245" className="border-0 shadow-sm rounded text-muted" disabled />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Event Available</Form.Label>
                                        <Form.Control type="text" defaultValue="yes" className="border-0 shadow-sm rounded text-muted" disabled />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Event Details</Form.Label>
                                        <Form.Control as="textarea" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias, repellendus accusamus autem magni incidunt ullam ab facere doloribus eligendi?" className="border-0 shadow-sm rounded text-muted" disabled />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Date</Form.Label>
                                        <Form.Control type="date" className="border-0 shadow-sm rounded text-muted" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Time</Form.Label>
                                        <Form.Control type="time" className="border-0 shadow-sm rounded text-muted" />
                                    </Form.Group>
                                </Col>
                                <h5 className="w-100 text-secondary border-bottom">User Information</h5>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Email</Form.Label>
                                        <Form.Control type="email" defaultValue="test@gmail.com" className="border-0 shadow-sm rounded text-muted" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label className="text-muted">Username</Form.Label>
                                        <Form.Control type="text" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="text-muted">Payment with</Form.Label>
                                        <Form.Select defaultValue="Choose..." className="border-0 shadow-sm rounded text-muted">
                                            <option>Choose payment options</option>
                                            <option>Bkash</option>
                                            <option>Nagad</option>
                                            <option>Bank</option>
                                            <option>Cash</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Button onClick={handleBooking} size="sm" variant="outline-secondary w-100">Book</Button>
                                </Col>
                                <Col md={6}>
                                    <Button onClick={handleReserver} size="sm" variant="outline-secondary w-100">Reserve</Button>
                                </Col>

                                <p className="w-100 text-primary">
                                    <Nav.Link href="/canceltion-policy">Cancellation Policy</Nav.Link>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Form>
                <ToastContainer />
            </Container>

        </div>
    )
}

export default Booking