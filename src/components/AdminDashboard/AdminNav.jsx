import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Container, Navbar,Image, Nav } from 'react-bootstrap';


const AdminNav = () => {
    return (
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
                        <Nav.Link style={{ fontSize: '.94rem' }}>
                            <div className="notifications">
                                <NotificationsNoneIcon />
                                <span className="notification_num">9</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#" >
                            <div className="d-flex justify-content-center align-items-center ">
                                <span className='nav_profile_con'>
                                    <Image src="/assets/user-1.png"
                                        className="shadow"
                                        style={{ width: '3rem', height: '3rem', objectFit: 'contain', borderRadius: '50%' }} />
                                    {/* <PermIdentityIcon className='profileIcon' /> */}
                                </span>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AdminNav