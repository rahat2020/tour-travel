"use client"
import { Button, Card, Carousel, Col, Container, Image, Row ,Breadcrumb} from 'react-bootstrap';
import './SingleEvents.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

const SingleEvents = () => {
    return (
        <div className='py-5'>
            <Container>
                <Breadcrumb className="text-decoration-none">
                    <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/all-events" className="text-decoration-none">all-events</Breadcrumb.Item>
                    <Breadcrumb.Item active>book</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col md={5}>
                        <div className="">
                            <Carousel data-bs-theme="light" fade indicators={false} >
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src="/assets/header_img.png" className='se_img'
                                            style={{ borderRadius: '20px', objectFit: 'cover' }} loading='lazy' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src="/assets/header_four.jpg" alt='kaptai' className='se_img shadow-sm' loading='lazy' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src="/assets/header_three.jpg" alt='ranngamati' className='se_img shadow-sm' loading='lazy' />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="d-flex flex-column justify-content-start align-items-cetner shadow-sm p-2">
                            <h1>Beauty of deep nature, Billions of stories.</h1>
                            <p style={{ color: '#939A9C', fontSize: '.88rem' }}><LocationOnIcon style={{ fontSize: '.88rem' }} /> Scotland</p>
                            <p style={{ color: '#939A9C', fontSize: '.88rem' }}><LocalPhoneIcon style={{ fontSize: '.88rem' }} /> Phone: <strong>0091541141156</strong></p>
                            <p style={{ color: '#939A9C', fontSize: '.88rem' }}><InventoryIcon style={{ fontSize: '.88rem' }} /> Availability: <strong>yes</strong></p>
                            <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam minus atque quas. Quidem dignissimos in pariatur neque explicabo inventore officiis labore nihil molestiae fuga porro quam corrupti voluptatum possimus natus harum, at, dolor cum deserunt. Eveniet aut quisquam voluptate odit.</p>
                            <p className="d-flex align-items-center justify-content-start">
                                <span>
                                    <StarIcon style={{ color: '#FF5857', fontSize: '1rem' }} className="se_icon" />
                                    <StarIcon style={{ color: '#FF5857', fontSize: '.1rem' }} className="se_icon" />
                                    <StarIcon style={{ color: '#FF5857', fontSize: '1rem' }} className="se_icon" />
                                    <StarIcon style={{ color: '#FF5857', fontSize: '1rem' }} className="se_icon" />
                                    <StarIcon style={{ color: '#FF5857', fontSize: '1rem' }} className="se_icon" />
                                    {" "}
                                    <small>34</small>
                                </span>
                            </p>
                            <div className="d-flex justify-content-between align-items-cetner w-75">
                                <Link href="/book" className="text-decoration-none">
                                    <Button className="btn_filter ms-2">Book events</Button>
                                </Link>
                                <Button className="btn_filter ms-2">$ 350</Button>
                                <Button className="btn_filter ms-2"><ShareIcon /></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-5 pt-5">
                    <div className="d-flex text-start py-3">
                        <h3><span style={{ borderBottom: '2px solid #333' }}>Related</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>Places and events</span></h3>
                    </div>
                    <Row>
                        <Col md={4}>
                            <Link href="/single-events/1">
                                <Card className='se_Img_con bg-white border-0'>
                                    <div className="p-2 se_img_con">
                                        <Card.Img src='/assets/header_four.jpg' className='se_img' />
                                    </div>
                                    <Card.Body className="se_overlay">
                                        <Card.Title>Proshanti</Card.Title>
                                        <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                            <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                                            <span style={{ color: '#FF5857' }} className="ms-4 fw-bold">$250</span>
                                        </Card.Text>
                                        <span className='se_love_con'>
                                            <span> <StarIcon style={{ color: '#FF5857' }} className="se_icon" /> 4.5</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/single-events/1">
                                <Card className='se_Img_con bg-white border-0'>
                                    <div className="p-2 se_img_con">
                                        <Card.Img src='/assets/header_four.jpg' className='se_img' />
                                    </div>
                                    <Card.Body className="se_overlay">
                                        <Card.Title>Proshanti</Card.Title>
                                        <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                            <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                                            <span style={{ color: '#FF5857' }} className="ms-4 fw-bold">$250</span>
                                        </Card.Text>
                                        <span className='se_love_con'>
                                            <span> <StarIcon style={{ color: '#FF5857' }} className="se_icon" /> 4.5</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link href="/single-events/1">
                                <Card className='se_Img_con bg-white border-0'>
                                    <div className="p-2 se_img_con">
                                        <Card.Img src='/assets/header_four.jpg' className='se_img' />
                                    </div>
                                    <Card.Body className="se_overlay">
                                        <Card.Title>Proshanti</Card.Title>
                                        <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                            <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                                            <span style={{ color: '#FF5857' }} className="ms-4 fw-bold">$250</span>
                                        </Card.Text>
                                        <span className='se_love_con'>
                                            <span> <StarIcon style={{ color: '#FF5857' }} className="se_icon" /> 4.5</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default SingleEvents