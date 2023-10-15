"use client"
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import './AllEvents.css';
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
import Pagination from 'react-bootstrap/Pagination';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useGetAllPostQuery } from "@/redux/apiSlice";
import EventsPaginations from "./EventsPaginations";



const AllEvents = () => {
    const { data, isLoading } = useGetAllPostQuery()
    const locations = window.location.pathname


    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <Breadcrumb className="text-decoration-none">
                    <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href={locations} className="text-decoration-none">{locations}</Breadcrumb.Item>
                </Breadcrumb>

                <div className="d-flex justify-content-center align-items-center text-center">
                    <h3><span style={{ borderBottom: '2px solid #333' }}>Go Anywhere</span>  <br /> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}> with our latest e-Tour offers</span></h3>
                </div>
                {
                    isLoading ? <div className='d-flex justify-content-center align-items-center text-dark fw-bold my-5 fs-5'>
                        <Spinner animation="grow" />
                    </div> :
                        <div>
                            <EventsPaginations data={data} />
                        </div>
                }


            </Container>
        </div>
    )
}

export default AllEvents 