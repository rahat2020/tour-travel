"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Card, Dropdown, Image, } from 'react-bootstrap';
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
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLoginMutation, useRegisterMutation, useUserDataByEmailQuery } from '@/redux/apiSlice';
import Swal from 'sweetalert2';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';

const Topbar = () => {
    const [LoginData] = useLoginMutation()
    const [RegisterData] = useRegisterMutation()
    const Tpath = usePathname()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setToLocalStorage = (email) => {
        typeof window !== "undefined" ? window.localStorage.setItem("user", email) : false
    }

    // LOGIN PARTS
    const [username, setUserName] = useState("")
    const [password, setUser_Password] = useState("")
    const userEmail = typeof window !== "undefined" ? localStorage.getItem('user') || '' : false
    const ifUareA =  typeof window !== "undefined" ? localStorage.getItem('ifura') || '' : false
    const { data: userData } = useUserDataByEmailQuery(userEmail)
    const router = useRouter()

    // console.log('router', router)
    // console.log('routerPath', routerPath)
    // console.log('topbar', userData?.email)

    const handleLogin = async (e) => {
        e.preventDefault()
        const object = {
            username,
            password
        }
        if (!username || !password) {
            toast('Field can not be empty')
        } else if (password.length <= 6) {
            toast('Password must greater than 6 characters')
        } else {
            try {
                const res = await LoginData(object)
                console.log('login', res)
                if (res?.data?.message === "Login successful") {
                    toast('Logged in Successfully')
                    // dispatch({ type: "LOGIN_SUCCESS", payload: res?.data?.email });
                    if (res?.data?.role === 'admin') {
                        localStorage.setItem("ifura", "su")
                        setToLocalStorage(res?.data?.email)
                    }
                    if (res?.data?.role === 'user') {
                        localStorage.setItem("ifura", "nu")
                        setToLocalStorage(res?.data?.email)
                    }
                    router.push('/user-profile')

                } else if (res?.error?.data === "wrong credentials") {
                    toast('User not found')
                } else {
                    toast('Login Failed')
                }
            } catch (e) {
                console.log(e)
                e && toast('Login Failed')
            }
        }
    }

    // REGISTER 
    const [usernameReg, setUserNameReg] = useState("")
    const [passwordReg, setUser_PasswordReg] = useState("")
    const [email, setUser_Email] = useState("")
    const [file, setFile] = useState("")
    const [terms, setUser_Terms] = useState("")
    const [role, setRole] = useState("")
    // console.log('terms', terms)

    const handleRegistration = async (e) => {
        e.preventDefault()
        if (!usernameReg || !passwordReg || !email || !file || !terms) {
            toast('Field can not be empty')
        } else if (passwordReg.length <= 6) {
            toast('Password must greater than 6 characters')
        } else {
            try {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
                const { url } = uploadRes.data
                console.log('cloudinary', url)
                const object = {
                    username: usernameReg,
                    password: passwordReg,
                    email,
                    photo: url,
                    role,
                    terms,
                }
                const res = await RegisterData(object)
                console.log('register', res)
                if (res?.data === "registration successfull") {
                    toast('Registration Successfull, now login to access the profile')
                } else if (res.error.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: `${res.error.data}`
                    })
                }
            } catch (e) {
                console.log(e)
                e && Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                })
            }
        }
    }

    // LOGOUT
    const handleLogout = () => {
        Swal.fire({
            icon: 'success',
            title: 'Thanks for being with us',
        })
        typeof window !== "undefined" ? windowlocalStorage.removeItem("user") : false;
        typeof window !== "undefined" ? window.localStorage.removeItem("ifura") : false;
        typeof window !== "undefined" ? window.location.reload() : false;
        router.push('/')
    }


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

                            <Nav.Link href='/all-events' style={{ fontSize: '.94rem' }}
                                className={Tpath === '/all-events' ? 'activecls text-secondary px-2 p-1' : 'text-secondary px-2 p-1'} >
                                All events
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

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 border-0 shadow-sm"
                                    aria-label="Search"
                                />
                            </Form>
                            <Nav.Link href='#'>
                                <span className='btn_nav'>List your places</span>
                            </Nav.Link>

                            <Nav.Link href="#" style={{ fontSize: '.94rem' }}>
                                <div className="notifications">
                                    <NotificationsNoneIcon />
                                    <span className="notification_num">9</span>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#" onClick={handleShow}>
                                <div className="d-flex justify-content-center align-items-center ">
                                    <span className='nav_profile_con'>
                                        <PermIdentityIcon className='profileIcon' />
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
                        {
                            userData === '' ? <span className=' text-secondary'>Welcome, start your journey from here!</span> : 'User panel'
                        }
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
                                            <Button variant="outline-secondary fw-bold border-0 shadow rounded" type="submit" onClick={handleLogin}>
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
                                            <Form.Control type="file" className='border-0 rounded shadow text-muted'
                                                onChange={(e) => setFile(e.target.files[0])} />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password"
                                                className='border-0 rounded shadow'
                                                onChange={(e) => setUser_PasswordReg(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="mb-3">
                                            <Form.Select onChange={(e) => setRole(e.target.value)} className='border-0 rounded shadow text-muted'>
                                                <option>Choose user role</option>
                                                <option>admin</option>
                                                <option>user</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox"
                                                label="I accept terms & conditions"
                                                onClick={() => setUser_Terms('yes')}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Nav.Link href="/privacy-policy">Read Privacy Policy</Nav.Link>
                                        </Form.Group>
                                        <div className="d-grid w-100">
                                            <Button variant="outline-secondary fw-bold border-0 shadow rounded" type="submit"
                                                onClick={handleRegistration}>
                                                Registration
                                            </Button>
                                        </div>
                                    </Form>
                                </Tab>
                            </Tabs>

                            :
                            <Card className='border-0 shadow'>
                                <div className="d-flex justify-content-center align-items-center p-2">
                                    <Card.Img variant="top" src={userData?.photo ? userData?.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9DBm4up7xkDQKhfO1kvAAwU8Grk36ZywnngllVU&s"}
                                        style={{ width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '50%' }}
                                        alt="Rahat"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Name:</Card.Title>
                                        <Card.Title className='text-secondary'>{userData?.username}</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Status:</Card.Title>
                                        <Card.Title className='text-secondary'>Offline</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title className='text-secondary'>Total Posts:</Card.Title>
                                        <Card.Title className='text-secondary'>9</Card.Title>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        {
                                            ifUareA === "su" ?

                                                <Nav.Link href="/super-dashboard" className='text-decoration-none'>
                                                    <Button variant="success fw-bold" size='sm'>Go to Dashboard</Button>
                                                </Nav.Link>
                                                :
                                                <Nav.Link href="/user-dashboard" className='text-decoration-none'>
                                                    <Button variant="success fw-bold" size='sm'>Go to Dashboard</Button>
                                                </Nav.Link>

                                        }
                                        <Nav.Link href="/user-profile" className='text-decoration-none' >
                                            <Button variant="success fw-bold" size='sm'>Profile</Button>
                                        </Nav.Link>
                                        <Button variant="danger text-white fw-bold" size='sm' onClick={handleLogout}>Logout</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                    }

                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export default Topbar