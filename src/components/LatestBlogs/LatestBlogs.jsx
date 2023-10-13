"use client"
import { Card, Col, Container, Row } from 'react-bootstrap';
import './LatestBlogs.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LatestBlogs = () => {
    return (
        <div className='py-4' data-aos="fade-up">
            <Container>
                <div className="d-flex text-start py-5">
                    <h3><span style={{ borderBottom: '2px solid #333' }}>Latest</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>Blogs</span></h3>
                </div>
                <Row>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='/assets/header_four.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Proshanti</Card.Title>
                                <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga mollitia repellat laborum eius. Itaque repudiandae cum expedita vitae officiis.
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='/assets/header_four.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Proshanti</Card.Title>
                                <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga mollitia repellat laborum eius. Itaque repudiandae cum expedita vitae officiis.
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='/assets/header_four.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Proshanti</Card.Title>
                                <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga mollitia repellat laborum eius. Itaque repudiandae cum expedita vitae officiis.
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='/assets/header_four.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Proshanti</Card.Title>
                                <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga mollitia repellat laborum eius. Itaque repudiandae cum expedita vitae officiis.
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='lb_Img_con bg-white border-0'>
                            <div className="p-2">
                                <Card.Img src='/assets/header_four.jpg' className='lb_img' />
                            </div>
                            <Card.Body className="lb_overlay">
                                <Card.Title>Proshanti</Card.Title>
                                <Card.Text style={{ color: '##939A9C !important', fontSize: '.88em' }}>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga mollitia repellat laborum eius. Itaque repudiandae cum expedita vitae officiis.
                                </Card.Text>
                                <span className='lb_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestBlogs