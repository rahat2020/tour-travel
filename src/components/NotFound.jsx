"use client"
import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const Notfound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 h-100'>
            <Container>
                <div className="w-100 d-flex justify-content-center align-items-center w-100 h-100">
                    <Image src="/assets/404.png" alt="page not found" width={700} height={500} style={{objectFit:'contain'}}/>
                </div>
            </Container>
        </div>
    )
}

export default Notfound