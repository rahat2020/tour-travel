"use client"
import { Container, Spinner } from "react-bootstrap"
import './AllEvents.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useGetAllPostQuery } from "@/redux/apiSlice";
import EventsPaginations from "./EventsPaginations";
import { usePathname } from "next/navigation";


const AllEvents = () => {
    const { data, isLoading } = useGetAllPostQuery()
    // const locations = window.location.pathname
    const routerPath = usePathname()
    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <Breadcrumb className="text-decoration-none">
                    <Breadcrumb.Item href="/" className="text-decoration-none">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href={routerPath} className="text-decoration-none">{routerPath}</Breadcrumb.Item>
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