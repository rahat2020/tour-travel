"use client"
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Card, Dropdown, Image, } from 'react-bootstrap';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Topbar.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from 'react-bootstrap/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Topbar = () => {
    const Tpath = window.location.pathname
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [usernameReg, setUserNameReg] = useState("")
    const [passwordReg, setUser_PasswordReg] = useState("")
    const [email, setUser_Email] = useState("")
    const [file, setFile] = useState("")
    const userData = 'rahat'

    return (
        <div>
            <Navbar expand="lg" className="bg-transparent shadow-sm">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src='/assets/logo.png' alt="logo"
                            style={{ width: '10rem' }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                            <Nav.Link href='/' style={{ fontSize: '.94rem' }} className={Tpath === '/' ? 'activecls text-secondary px-2 p-1' : 'text-secondary px-2 p-1'} >
                                Home
                            </Nav.Link>
                            <Nav.Link href='/blogs' style={{ fontSize: '.94rem' }} className={Tpath === '/blogs' ? 'activecls text-secondary px-2 p-1' : 'text-secondary px-2 p-1'} >
                                Blogs
                            </Nav.Link>
                            <Dropdown className='ms-2'>
                                <Dropdown.Toggle variant="white text-secondary" id="dropdown-basic" size="sm">
                                    Travelers
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className='ms-2'>
                                <Dropdown.Toggle variant="white text-secondary" id="dropdown-basic" size="sm">
                                    Travel Advisory
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className='ms-2'>
                                <Dropdown.Toggle variant="white text-secondary" id="dropdown-basic" size="sm">
                                    Visa
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Link href='#' >
                                <span className='btn_nav'>List your places</span>
                            </Nav.Link>

                            <Nav.Link style={{ fontSize: '.94rem' }}>
                                <div className="notifications">
                                    <NotificationsNoneIcon /> 
                                    <span className="notification_num">9</span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#" onClick={handleShow}>
                                <div className="d-flex justify-content-center align-items-center ">
                                    <span className='nav_profile_con'>
                                        <PermIdentityIcon className='profileIcon'/>
                                    </span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
            <Offcanvas show={show} onHide={handleClose} end>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        User panel
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        !userData ?
                            <Tabs
                                defaultActiveKey="login"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="login" title="Login">
                                    <Form className='p-3 py-5 shadow-sm rounded'>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Enter username"
                                                className='border-0 rounded shadow'
                                                onChange={(e) => setUserName(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password"
                                                className='border-0 rounded shadow'
                                                onChange={(e) => setUser_Password(e.target.value)}
                                            />
                                        </Form.Group>
                                        <div className="d-grid w-100">
                                            <Button variant="outline-secondary fw-bold border-0 shadow rounded" type="submit">
                                                Login
                                            </Button>
                                        </div>
                                    </Form>
                                </Tab>


                                <Tab eventKey="register" title="Registration">
                                    <Form className='p-3 py-5 shadow-sm rounded'>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Enter username"
                                                className='border-0 rounded shadow'
                                                onChange={(e) => setUserNameReg(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email"
                                                className='border-0 rounded shadow'
                                                onChange={(e) => setUser_Email(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="file" className='border-0 rounded shadow' onChange={(e) => setFile(e.target.files[0])} />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password"
                                                className='border-0 rounded shadow'
                                                onChange={(e) => setUser_PasswordReg(e.target.value)}
                                            />
                                        </Form.Group>
                                        <div className="d-grid w-100">
                                            <Button variant="outline-secondary fw-bold border-0 shadow rounded" type="submit">
                                                Registration
                                            </Button>
                                        </div>
                                    </Form>
                                </Tab>
                            </Tabs>

                            :
                            <Card className='border-0 shadow'>
                                <div className="d-flex justify-content-center align-items-center p-2">
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9DBm4up7xkDQKhfO1kvAAwU8Grk36ZywnngllVU&s"
                                        style={{ width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '50%' }}
                                        alt="Rahat"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Name:</Card.Title>
                                        <Card.Title className='text-secondary'>{userData}</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Status:</Card.Title>
                                        <Card.Title className='text-secondary'>Offline</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Total Posts:</Card.Title>
                                        <Card.Title className='text-secondary'>9</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Total Likes:</Card.Title>
                                        <Card.Title className='text-secondary'>12</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Total Comments:</Card.Title>
                                        <Card.Title className='text-secondary'>15</Card.Title>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <Button variant="success fw-bold" size='sm'>Go to Dashboard</Button>
                                        <Button variant="danger text-white fw-bold" size='sm'>Logout</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                    }




                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Topbar