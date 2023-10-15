"use client"
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

const AboutHome = () => {
    // ANIMATE ON SCROLL
    useEffect(() => {
        AOS.init({ offset: 120, duration: 1000, easing: "easeOut" });
    })
    
    return (
        <div className="py-4" data-aos="fade-up">
            <Container>
            <div className="d-flex text-start py-5">
                <h3><span style={{ borderBottom: '2px solid #333' }}>About</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>Travel Tour</span></h3>
            </div>
                <Card className='border-0 shadow-sm rounded' style={{backgroundColor: '#F8F8F8'}}>
                    <Card.Header className='d-flex justify-content-center align-items-center'>
                        <Image src="/assets/logo.png" width={180} height={50} style={{objectFit:'contain'}}/>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p style={{ color: '#666 !important', fontSize: '.78em' }}>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                posuere erat a ante. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque necessitatibus. Aliquid obcaecati harum dignissimos libero, voluptatem est animi, dolor rerum cupiditate commodi at, distinctio quo hic molestias nobis ea!
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Kazi Rahat - CEO</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default AboutHome