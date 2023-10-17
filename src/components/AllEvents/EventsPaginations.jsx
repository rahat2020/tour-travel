"use client"
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import './AllEvents.css';
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import ReactPaginate from 'react-paginate';
import './Paginations.css';
import Nav from 'react-bootstrap/Nav';

const EventsPaginations = (props) => {
    const [activeOne, setActiveOne] = useState(true)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFour, setActiveFour] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    const [activeSix, setActiveSix] = useState(false)
    const [activeSeven, setActiveSeven] = useState(false)


    const { data } = props;
    // console.log(data)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data?.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data?.length;
        setItemOffset(newOffset)
    };

    // FILTERED DATA
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = currentItems?.filter(item =>
        (item?.title?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item?.location?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item?.price?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // console.log(filteredData?.length)
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
        <div className="py-5" data-aos="fade-up">
            <Container>

                <div className="d-flex justify-content-between align-items-center py-3">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search events"
                            className="me-2 border-0 shadow-sm"
                            aria-label="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            defaultValue={searchQuery}
                        />
                    </Form>
                    <div className="d-flex justify-content-between align-items-center">
                        <Form.Select aria-label="Default select example" className="border-0 shadow-sm text-muted">
                            <option>select events</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button className="btn_filter ms-2">Filter</Button>
                    </div>
                </div>

                <div className="d-flex w-100 py-3">
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

                            <Row>

                                {
                                    filteredData?.map((item, i) => (
                                        <Col md={4} key={i}>
                                            <Nav.Link href={`/single-events/${item._id}`} className="text-decoration-none">
                                                <Card className='s_Img_con bg-white border-0'>
                                                    <div className="p-2">
                                                        <Card.Img src={item?.photos[0] ? item.photos[0] : '/assets/header_four.jpg'} className='s_img' loading="lazy" />
                                                    </div>
                                                    <Card.Body className="s_overlay">
                                                        <Card.Title>{item?.title}</Card.Title>
                                                        <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                                            <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} />
                                                            {item?.location}
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

                <div className="d-flex justify-content-center align-items-center w-100 mt-3">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< prev"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName='page-num'
                        previousLinkClassName='page-num'
                        nextLinkClassName='page-num'
                        activeLinkClassName='active'

                    />
                </div>

            </Container>
        </div>
    )
}

export default EventsPaginations  