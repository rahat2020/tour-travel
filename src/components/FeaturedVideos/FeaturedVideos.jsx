"use client"
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './FeaturedVideos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReactPlayer from 'react-player'
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarIcon from '@mui/icons-material/Star';

// const fpData = [
//     {
//         id: 1,
//         title: 'Kaptai Navy Camp',
//         location: 'Kaptai Upazila'
//     },
// ]

const FeaturedVideos = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="py-4 " data-aos="fade-up">
            <Container>
                <div className="d-flex text-start py-3">
                    <h3><span style={{ borderBottom: '2px solid #333' }}>Featured</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>Videos</span></h3>
                </div>
                <div className="py-4">
                    <Row>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <PeopleIcon style={{ fontSize: '2.33rem', color:'#FF5324' }} />
                                <span className="ms-2 fs-3 text-center">3354</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>Flights</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <WorkspacePremiumIcon style={{ fontSize: '2.33rem', color:'#FF5324' }} />
                                <span className="ms-2 fs-3 text-center">654</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>Certifications</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <CardGiftcardIcon style={{ fontSize: '2.33rem', color:'#FF5324' }} />
                                <span className="ms-2 fs-3 text-center">134</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>Awards</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-center align-items-end">
                                <StarIcon style={{ fontSize: '2.33rem', color:'#FF5324' }} />
                                <span className="ms-2 fs-3 text-center">654</span>
                                <h6 className="ms-2 fs-6 text-center" style={{ color: '#939A9C' }}>5 Stars</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Carousel responsive={responsive} autoPlaySpeed={2000} infinite={true}>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fv_Img_con bg-white border-0 rounded'>
                        <div className="p-2">
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                light width={400} height={300} className='fv_img'
                                style={{ borderColor: ' #FF5324 !important', borderRadius: '30px' }}
                            />
                        </div>
                        <Card.Body className="fv_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                <LocationOnIcon style={{ color: '##939A9C !important', fontSize: '1em' }} /> Kaptai upazila
                            </Card.Text>
                            <span className='fv_love_con'>
                                <FavoriteIcon style={{ color: '#FF5857' }} />
                            </span>
                        </Card.Body>
                    </Card>
                </Carousel>;
            </Container >
        </div>
    )
}

export default FeaturedVideos 