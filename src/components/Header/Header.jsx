"use client";
import { Col, Container, Row, Image } from 'react-bootstrap';
import './Header.css';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
    return (
        <section className='py-5'>
            <Container>
                <Row className='gy-2'>
                    <Col md={7}>
                        <section className="p-3 text-start" >
                            <h1 className='fw-bold text-capitalize '>life is short, </h1>
                            <h1 className='fw-bold text-capitalize'>the world is wide</h1>
                            <p className='my-3 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias, repellendus accusamus autem magni incidunt ullam ab facere doloribus eligendi?</p>
                            <div className="my-4 shadow-sm p-3 rounded">
                                <Tabs
                                    defaultActiveKey="one"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"

                                >
                                    <Tab eventKey="one" title="Stays">
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Label className='' style={{ color: '#777 ' }}>location</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <LocationOnIcon style={{ color: '#939A9C' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            className='border-0'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6} >
                                                    <Form.Label style={{ color: '#777 ' }}>Check In</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <DateRangeIcon style={{ color: '#939A9C' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            className='border-0 text-muted'
                                                            type='date'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Label style={{ color: '#777 ' }}>Check Out</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <DateRangeIcon style={{ color: '#939A9C' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            type='date'
                                                            className='border-0 text-muted'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Label style={{ color: '#777 ' }}>Travellers</Form.Label>
                                                    <InputGroup className="mb-3 shadow-sm rounded">
                                                        <InputGroup.Text id="basic-addon1" className='border-0'>
                                                            <PermIdentityIcon style={{ color: '#939A9C' }} />
                                                        </InputGroup.Text>
                                                        <Form.Control
                                                            placeholder="location"
                                                            aria-label="Username"
                                                            className='border-0'
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="two" title="Flight">
                                        Tab content for Profile
                                    </Tab>
                                    <Tab eventKey="three" title="Cars">
                                        Tab content for Contact
                                    </Tab>
                                    <Tab eventKey="four" title="Cruise">
                                        Tab content for Contact
                                    </Tab>
                                </Tabs>
                            </div>
                        </section>
                    </Col>
                    <Col md={5}>
                        <Carousel data-bs-theme="light" fade indicators={false} >
                            <Carousel.Item>
                                <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                    <Image src="/assets/header_img.png"
                                        className='feature_left'
                                        style={{ borderRadius: '20px', objectFit: 'cover' }} loading='lazy' />
                                    <div className="overlay">
                                        <small className='category'>Scotland</small>
                                        <h3>Beauty of deep nature. Billions of stories.</h3>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                    <Image src="/assets/header_four.jpg" alt='kaptai' className='feature_left shadow-sm' loading='lazy' />
                                    <div className="overlay">
                                        <small className='category'>Kaptai</small>
                                        <h3>A lake of nature beauty</h3>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                    <Image src="/assets/header_three.jpg" alt='ranngamati'
                                        className='feature_left shadow-sm' loading='lazy' />
                                    <div className="overlay">
                                        <small className='category'>Rangamati</small>
                                        <h3>A nature heaven belongs to Rangamati</h3>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header