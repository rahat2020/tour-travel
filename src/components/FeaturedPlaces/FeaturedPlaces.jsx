"use client"
import { Card, Container, Image } from 'react-bootstrap';
import './FeaturedPlaces.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

// const fpData = [
//     {
//         id:1,
//         title: 'Kaptai Navy Camp',
//         location:'Kaptai Upazila'
//     },
// ]

const FeaturedPlaces = () => {
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
                <h3><span style={{borderBottom:'2px solid #333'}}>Featured</span> <span style={{color:'#FF5324',borderBottom:'2px solid #FF5324'}}>Places</span></h3>
            </div>
                <Carousel responsive={responsive}  autoPlaySpeed={2000}  infinite={true}>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_four.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Proshanti</Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Kaptai upazila
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_img.png' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Scotland</Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Marisash, Scotland
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_three.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Zoom Restura</Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Kaptai upazila
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_four.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title></Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Kaptai upazila
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_four.png' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Maldip</Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Rupa beach
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_four.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Maldip</Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Vanila Beach
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className='fp_Img_con bg-white border-0'>
                        <div className="p-2">
                            <Card.Img src='/assets/header_three.jpg' className='fp_img' />
                        </div>
                        <Card.Body className="fp_overlay">
                            <Card.Title>Rangamati Lake</Card.Title>
                            <Card.Text style={{color:'##939A9C !important', fontSize:'.88em'}}>
                                <LocationOnIcon style={{color:'##939A9C !important', fontSize:'1em'}}/> Kaptai upazila
                            </Card.Text>
                            <span className='fp_love_con'>
                                <FavoriteIcon style={{color:'#FF5857'}}/>
                            </span>
                        </Card.Body>
                    </Card>
                </Carousel>;
            </Container >
        </div>
    )
}

export default FeaturedPlaces