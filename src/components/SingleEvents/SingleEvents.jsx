"use client"
import { Button, Card, Carousel, Col, Container, Image, Row, Breadcrumb, Spinner } from 'react-bootstrap';
import './SingleEvents.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StarIcon from '@mui/icons-material/Star';
// import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetSinglePostQuery, useUserDataByEmailQuery } from '@/redux/apiSlice';
import { usePathname } from 'next/navigation';

const SingleEvents = ({ params }) => {
    const userEmail = typeof window !== "undefined" ? window.localStorage.getItem('user') || '' : false;
    const { data: userData } = useUserDataByEmailQuery(userEmail)
    const { data,isLoading } = useGetSinglePostQuery(params)
    // console.log(data)
    const handleShared = (event) => {
        event.preventDefault();
        toast('Event shared successfully!')
    }

    const routerPath = usePathname()
    const handleBook = (event) => {
        event.preventDefault();
        toast('Please login to book an event, thank you!')
    }

    return (
        <div className='py-5'>
            <Container>
                <Breadcrumb className="text-decoration-none">
                    <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href={routerPath} className="text-decoration-none">{routerPath}</Breadcrumb.Item>
                    <Breadcrumb.Item active>book</Breadcrumb.Item>
                </Breadcrumb>
                {
                      isLoading ? <div className='d-flex justify-content-center align-items-center text-dark fw-bold my-5 fs-5'>
                      <Spinner animation="grow" />
                  </div> :
                <Row>
                    <Col md={5}>
                        <div className="">
                            <Carousel data-bs-theme="light" fade indicators={false} >
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src={data?.photos[0] ? data?.photos[0] : "/assets/header_img.png"} className='se_img'
                                            style={{ borderRadius: '20px', objectFit: 'cover' }} loading='lazy' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src={data?.photos[1] ? data?.photos[1] : "/assets/header_four.jpg"} alt='kaptai' className='se_img shadow-sm' loading='lazy' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="img_container d-flex justify-content-center align-items-cetner shadow-sm">
                                        <Image src={data?.photos[2] ? data?.photos[2] : "/assets/header_three.jpg"} alt='ranngamati' className='se_img shadow-sm' loading='lazy' />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="d-flex flex-column justify-content-start align-items-cetner shadow-sm p-2">
                            <h1>{data?.title}</h1>
                            <p style={{ color: '#939A9C', fontSize: '.88rem' }}><LocationOnIcon style={{ fontSize: '.88rem' }} /> {data?.location}</p>
                            <p style={{ color: '#939A9C', fontSize: '.88rem' }}><LocalPhoneIcon style={{ fontSize: '.88rem' }} /> Phone: <strong>{data?.phone}</strong></p>
                            <p style={{ color: '#939A9C', fontSize: '.88rem' }}><InventoryIcon style={{ fontSize: '.88rem' }} /> Availability: <strong>{data?.available}</strong></p>
                            <p className="text-muted">{data?.desc}.</p>
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
                                {
                                    !userData ? <Button className="btn_filter ms-adgj2" onClick={handleBook}>Book events</Button>
                                        :
                                        <Nav.Link href={`/book/${data?._id}`} className="text-decoration-none">
                                            <Button className="btn_filter ms-adgj2">Book events</Button>
                                        </Nav.Link>
                                }

                                <Button className="btn_filter ms-2">$ {data?.price}</Button>
                                <Button className="btn_filter ms-2" onClick={handleShared}><ShareIcon /></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                }
                <div className="mt-5 pt-5">
                    <div className="d-flex text-start py-3">
                        <h3><span style={{ borderBottom: '2px solid #333' }}>Related</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>Places and events</span></h3>
                    </div>
                    <Row>
                        <Col md={4}>
                            <Nav.Link href="/single-events/1">
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
                            </Nav.Link>
                        </Col>
                        <Col md={4}>
                            <Nav.Link href="/single-events/1">
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
                            </Nav.Link>
                        </Col>
                        <Col md={4}>
                            <Nav.Link href="/single-events/1">
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
                            </Nav.Link>
                        </Col>
                    </Row>

                    <ToastContainer />
                </div>
            </Container>
        </div>
    )
}

export default SingleEvents