"use client"
import { Card, Col, Container, Row, Spinner } from "react-bootstrap"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import './Services.css';
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import Nav from 'react-bootstrap/Nav';
import { useGetAllPostQuery } from "@/redux/apiSlice";

const Services = () => {
    const { data: allPoost, isLoading } = useGetAllPostQuery()
    const [activeOne, setActiveOne] = useState(true)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFour, setActiveFour] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    const [activeSix, setActiveSix] = useState(false)
    const [activeSeven, setActiveSeven] = useState(false)

    const handleOne = () => {
        setActiveOne(true)
        setActiveTwo(false)
        setActiveThree(false)
        setActiveFour(false)
        setActiveFive(false)
        setActiveSix(false)
        setActiveSeven(false)
    }
    const handleTwo = () => {
        setActiveTwo(true)
        setActiveOne(false)
        setActiveThree(false)
        setActiveFour(false)
        setActiveFive(false)
        setActiveSix(false)
        setActiveSeven(false)
    }
    const handleThree = () => {
        setActiveThree(true)
        setActiveTwo(false)
        setActiveOne(false)
        setActiveFour(false)
        setActiveFive(false)
        setActiveSix(false)
        setActiveSeven(false)
    }
    const handleFour = () => {
        setActiveFour(true)
        setActiveTwo(false)
        setActiveOne(false)
        setActiveThree(false)
        setActiveFive(false)
        setActiveSix(false)
        setActiveSeven(false)
    }
    const handleFive = () => {
        setActiveFive(true)
        setActiveTwo(false)
        setActiveOne(false)
        setActiveThree(false)
        setActiveFour(false)
        setActiveSix(false)
        setActiveSeven(false)
    }
    const handleSix = () => {
        setActiveSix(true)
        setActiveTwo(false)
        setActiveOne(false)
        setActiveThree(false)
        setActiveFour(false)
        setActiveFive(false)
        setActiveSeven(false)
    }
    const handleSeven = () => {
        setActiveSeven(true)
        setActiveTwo(false)
        setActiveOne(false)
        setActiveThree(false)
        setActiveFour(false)
        setActiveFive(false)
        setActiveSix(false)
    }

    return (
        <div className="py-4" data-aos="fade-up">
            <Container>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <h3><span style={{ borderBottom: '2px solid #333' }}>Go Anywhere</span>  <br /> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}> with our latest e-Tour offers</span></h3>
                </div>
                <div className="d-flex w-100 py-3 flex-wrap">
                    <div className="s_box_wrapper">
                        <div className="d-flex" onClick={handleOne}>
                            <p className={activeOne === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Flights</span>
                            </p>
                        </div>
                        <div className="d-flex" onClick={handleTwo}>
                            <p className={activeTwo === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Hotels</span>
                            </p>
                        </div>
                        <div className="d-flex" onClick={handleThree}>
                            <p className={activeThree === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Cruise</span>
                            </p>
                        </div>
                        <div className="d-flex" onClick={handleFour}>
                            <p className={activeFour === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Tours</span>
                            </p>
                        </div>
                        <div className="d-flex" onClick={handleFive}>
                            <p className={activeFive === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Stays</span>
                            </p>
                        </div>
                        <div className="d-flex" onClick={handleSix}>
                            <p className={activeSix === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Cars</span>
                            </p>
                        </div>
                        <div className="d-flex" onClick={handleSeven}>
                            <p className={activeSeven === true ? ' s_active' : 's_box'}>
                                <span className="sBox_icon">
                                    <WorkspacePremiumIcon className="WorkspacePremiumIcon" />
                                </span>
                                <span className="ms-1">Things to do</span>
                            </p>
                        </div>
                    </div>
                </div>
                {
                    activeOne === true ?
                        <>
                            {
                                isLoading ? <div className='d-flex justify-content-center align-items-center text-dark fw-bold my-5 fs-5'>
                                    <Spinner animation="grow" />
                                </div> :
                                    <Row>
                                        {
                                            allPoost?.map((item, i) => (
                                                <Col md={4} key={i}>
                                                    <Nav.Link href={`/single-events/${item._id}`} className="text-decoration-none">
                                                        <Card className='s_Img_con bg-white border-0'>
                                                            <div className="p-2">
                                                                <Card.Img src={item?.photos[0] ? item?.photos[0] : '/assets/header_four.jpg'} className='s_img' />
                                                            </div>
                                                            <Card.Body className="s_overlay">
                                                                <Card.Title>{item?.title}</Card.Title>
                                                                <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                                                    <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} />{item?.location}
                                                                    <span style={{ color: '#FF5857' }} className="ms-4 fw-bold">$ {item?.price}</span>
                                                                </Card.Text>
                                                                <span className='s_love_con'>
                                                                    <span> <StarIcon style={{ color: '#FF5857' }} className="s_icon" /> 4.5</span>
                                                                </span>
                                                            </Card.Body>
                                                        </Card>
                                                    </Nav.Link>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                            }
                        </>

                        : ''
                }
                {
                    activeTwo === true ? <div >hello hotels</div> : ''
                }
                {
                    activeThree === true ? <div >hello cruise</div> : ''
                }
                {
                    activeFour === true ? <div >hello tours</div> : ''
                }
                {
                    activeFive === true ? <div >hello stays</div> : ''
                }
                {
                    activeSix === true ? <div >hello cars</div> : ''
                }
                {
                    activeSeven === true ? <div >hello things to do</div> : ''
                }
            </Container>
        </div>
    )
}

export default Services