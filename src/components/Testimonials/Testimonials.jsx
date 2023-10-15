"use client"
import { Card, Container } from 'react-bootstrap';
import './Testimonials.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@mui/icons-material/Star';

const Testimonials = () => {
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
                <div className="d-flex text-start py-5">
                    <h3><span style={{ borderBottom: '2px solid #333' }}>Clients</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>Reviews</span></h3>
                </div>
                <Carousel responsive={responsive} autoPlaySpeed={2000} infinite={true}>

                    <Card className='border-0 rounded' style={{ backgroundColor: '#F8F8F8', width:'22rem' }}>
                        <div className="p-2 d-flex justify-content-start align-items-center">
                            <Card.Img src="/assets/user-1.png" className='t_profile_img' />
                            <div className="d-flex flex-column ms-2">
                                <span className='text-dark fw-bold'>Rahat khan</span>
                                <small className='text-muted'>Front-end Developer at Rahat webdev</small>
                            </div>
                        </div>
                        <Card.Body className="">
                            <Card.Title>Proshanti!</Card.Title>
                            <Card.Text style={{ color: '#666 !important', fontSize: '.88em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla cumque culpa enim perspiciatis aperiam perferendis eveniet omnis! Deleniti, animi?
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: '#F8F8F8' }}>
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                        </Card.Footer>
                    </Card>
                    <Card className='border-0 rounded' style={{ backgroundColor: '#F8F8F8', width:'22rem' }}>
                        <div className="p-2 d-flex justify-content-start align-items-center">
                            <Card.Img src="/assets/user-1.png" className='t_profile_img' />
                            <div className="d-flex flex-column ms-2">
                                <span className='text-dark fw-bold'>Rahat khan</span>
                                <small className='text-muted'>Front-end Developer at Rahat webdev</small>
                            </div>
                        </div>
                        <Card.Body className="">
                            <Card.Title>Proshanti!</Card.Title>
                            <Card.Text style={{ color: '#666 !important', fontSize: '.88em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla cumque culpa enim perspiciatis aperiam perferendis eveniet omnis! Deleniti, animi?
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: '#F8F8F8' }}>
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                        </Card.Footer>
                    </Card>
                    <Card className='border-0 rounded' style={{ backgroundColor: '#F8F8F8', width:'22rem' }}>
                        <div className="p-2 d-flex justify-content-start align-items-center">
                            <Card.Img src="/assets/user-1.png" className='t_profile_img' />
                            <div className="d-flex flex-column ms-2">
                                <span className='text-dark fw-bold'>Rahat khan</span>
                                <small className='text-muted'>Front-end Developer at Rahat webdev</small>
                            </div>
                        </div>
                        <Card.Body className="">
                            <Card.Title>Proshanti!</Card.Title>
                            <Card.Text style={{ color: '#666 !important', fontSize: '.88em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla cumque culpa enim perspiciatis aperiam perferendis eveniet omnis! Deleniti, animi?
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: '#F8F8F8' }}>
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                        </Card.Footer>
                    </Card>
                    <Card className='border-0 rounded' style={{ backgroundColor: '#F8F8F8', width:'22rem' }}>
                        <div className="p-2 d-flex justify-content-start align-items-center">
                            <Card.Img src="/assets/user-1.png" className='t_profile_img' />
                            <div className="d-flex flex-column ms-2">
                                <span className='text-dark fw-bold'>Rahat khan</span>
                                <small className='text-muted'>Front-end Developer at Rahat webdev</small>
                            </div>
                        </div>
                        <Card.Body className="">
                            <Card.Title>Proshanti!</Card.Title>
                            <Card.Text style={{ color: '#666 !important', fontSize: '.88em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla cumque culpa enim perspiciatis aperiam perferendis eveniet omnis! Deleniti, animi?
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: '#F8F8F8' }}>
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                        </Card.Footer>
                    </Card>
                    <Card className='border-0 rounded' style={{ backgroundColor: '#F8F8F8', width:'22rem' }}>
                        <div className="p-2 d-flex justify-content-start align-items-center">
                            <Card.Img src="/assets/user-1.png" className='t_profile_img' />
                            <div className="d-flex flex-column ms-2">
                                <span className='text-dark fw-bold'>Rahat khan</span>
                                <small className='text-muted'>Front-end Developer at Rahat webdev</small>
                            </div>
                        </div>
                        <Card.Body className="">
                            <Card.Title>Proshanti!</Card.Title>
                            <Card.Text style={{ color: '#666 !important', fontSize: '.88em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla cumque culpa enim perspiciatis aperiam perferendis eveniet omnis! Deleniti, animi?
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: '#F8F8F8' }}>
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                            <StarIcon style={{ color: '#FF9D0B' }} className="s_icon" />
                        </Card.Footer>
                    </Card>

                </Carousel>
            </Container >
        </div>
    )
}

export default Testimonials 