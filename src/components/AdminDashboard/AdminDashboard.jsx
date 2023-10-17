"use client"
import { Button, Container, Image } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import './AdminDashboard.css';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import AdminNav from "./AdminNav";
import { useAddPostMutation, useDeletePostsMutation, useDeleteUserMutation, useGetAllPostQuery, useGetAllUsersQuery, useGetSinglePostQuery, useGetSingleUserQuery, useUpdateUserMutation, useUserDataByEmailQuery } from "@/redux/apiSlice";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';


const AdminDashboard = () => {
    const userEmail = typeof window !== "undefined" ? window.localStorage.getItem('user') || '' : false
    const id = typeof window !== "undefined" ? window.localStorage.getItem('id') || '' : false
    const uId = typeof window !== "undefined" ? window.localStorage.getItem('uId') || '' : false

    // REDUX QUERUIES
    const { data: userData } = useUserDataByEmailQuery(userEmail)
    const { data: allUsers } = useGetAllUsersQuery()
    const [UpdateUser] = useUpdateUserMutation()
    const [DeleteUser] = useDeleteUserMutation()
    const [AddEvent] = useAddPostMutation()
    const { data: allPoost } = useGetAllPostQuery()
    const [DeletePost] = useDeletePostsMutation()
    const { data: singleEvent } = useGetSinglePostQuery(id)
    const { data: singleUser } = useGetSingleUserQuery(uId)

    // console.log('singleEvent', singleUser)


    // CREATE NEW EVENTS
    const [title, setTitle] = useState("")
    const [Evntlocation, setLocation] = useState("")
    const [phone, setPhone] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [files, setFiles] = useState("")
    const [available, setAvailable] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleCreateEvent = async (event) => {
        event.preventDefault()
        try {
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "upload");
                    const uploadRes = await axios.post(
                        "https://api.cloudinary.com/v1_1/rahatdev1020/image/upload",
                        data
                    );

                    const { url } = uploadRes.data;
                    return url;
                })
            );

            const obj = {
                title,
                location: Evntlocation,
                desc,
                phone,
                price,
                available,
                photos: list,
                startDate,
                endDate,
            }

            const res = await AddEvent(obj)
            console.log(res)

            if (res?.data === "Event created") {
                Swal.fire({
                    icon: 'success',
                    title: 'New Event created',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Event creation failed',
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    // DELETE EVENT
    const handleDeleteEvent = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    DeletePost(_id)
                    Swal.fire(
                        'Deleted!',
                        'Event Deleted',
                        'success'
                    )

                } catch (error) {
                    console.error('Error deleting book:', error);
                }

            }
        })
    }

    // UPDATE USER DATA
    const [username, setUserName] = useState(userData?.username || "")
    const [password, setUser_Password] = useState(userData?.password || "")
    const [email, setUser_Email] = useState(userData?.email || "")
    const [file, setUser_Photo] = useState(userData?.photo || "")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (file === '') {
                const Object = {
                    id: userData?._id,
                    userId: userData?._id,
                    username: username || userData?.username || "",
                    password: password || userData?.password || "",
                    email: email || userData?.email || "",
                    photo: file || userData?.photo || "",
                    role: userData?.role,
                    terms: userData?.terms

                }
                console.log('object', Object)
                const res = await UpdateUser(Object)
                if (res?.data?.message === "user updated") {
                    Swal.fire({
                        icon: 'success',
                        title: 'User updated successfully',
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'User Update failed',
                    })
                }

            } else if (file) {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data);
                const { url } = uploadRes.data;
                const Object = {
                    id: item?._id,
                    userId: item?._id,
                    username: username || item?.username || "",
                    password: password || item?.password || "",
                    email: email || item?.email || "",
                    photo: url || item?.photo || "",
                    role: role || item?.role || "",
                }
                const res = await UpdateUser(Object)
                console.log('res', res)
                if (res?.data?.message === "user updated") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Profile updated successfully',
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'User Update failed',
                    })
                }
            }

        } catch (err) {
            console.log(err)

            err && Swal.fire({
                icon: 'error',
                title: 'Input operations failed',
            })
        }

    }

    // DELETE USERS
    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    DeleteUser(_id)
                    Swal.fire(
                        'Deleted!',
                        'User Deleted',
                        'success'
                    )

                } catch (error) {
                    console.error('Error deleting book:', error);
                }

            }
        })
    }


    // SINGLE EVENT VIEW
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (_id) => {
        typeof window !== "undefined" ? window.localStorage.setItem('id', _id) : false
        setShow(true)
    }

    // SINGLE UISER VIEW
    const [showUser, setShowUser] = useState(false);
    const handleCloseUser = () => setShowUser(false);
    const handleShowUser = (_id) => {
        typeof window !== "undefined" ? window.localStorage.setItem('uId', _id) : false;
        setShowUser(true)
    }

    // LOGOUT
    const router = useRouter()
    const handleLogout = (event) => {
        event.preventDefault();
        router.push('/')
        toast('Logout successfully!')
        typeof window !== "undefined" ? window.localStorage.removeItem("user") : false
        typeof window !== "undefined" ? window.localStorage.removeItem("ifura") : false
        typeof window !== "undefined" ? window.location.reload() : false;
      
    }

    // IF THERE IS NO USER
    if (!userEmail) {
        typeof window !== "undefined" ? window.location.replace("/") : false;
    }

    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <div className="d-flex text-start py-3">
                    <h3 className="text-capitalize"><span style={{ borderBottom: '2px solid #333' }}>{userData?.username}</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>your dahsboard</span></h3>
                </div>

                <div className="shadow p-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="tabone">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="">Update informations</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className="">User management</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four" className="">Booked events</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five" className="">Notifications</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six" className="">Events Manament</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven" className="" onClick={handleLogout}>Logout</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <AdminNav />
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Row className="mb-3 gy-3">
                                                <Col md={4}>
                                                    <Form.Group controlId="formGridEmail">
                                                        <Form.Label className="text-muted">Username</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" defaultValue={userData?.username} className="border-0 shadow-sm rounded text-muted" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Group controlId="formGridEmail">
                                                        <Form.Label className="text-muted">Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" defaultValue={userData?.email} className="border-0 shadow-sm rounded text-muted" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Group controlId="formGridPassword">
                                                        <Form.Label className="text-muted">Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" defaultValue={userData?.password} className="border-0 shadow-sm rounded text-muted" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                                        <Form.Label className="text-muted">Address</Form.Label>
                                                        <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} controlId="formGridCity">
                                                            <Form.Label className="text-muted">City</Form.Label>
                                                            <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                        </Form.Group>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <AdminNav />
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Row className="mb-3 gy-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridEmail">
                                                        <Form.Label className="text-muted">Username</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" defaultValue={userData?.username} className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setUserName(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridEmail">
                                                        <Form.Label className="text-muted">Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email"
                                                            defaultValue={userData?.email} className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setUser_Email(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridPassword">
                                                        <Form.Label className="text-muted">Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password"
                                                            defaultValue={userData?.password}
                                                            className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setUser_Password(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                                        <Form.Label className="text-muted">Address</Form.Label>
                                                        <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                                        <Form.Label className="text-muted">Image</Form.Label>
                                                        <Form.Control type="file" className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setUser_Photo(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} controlId="formGridCity">
                                                            <Form.Label className="text-muted">City</Form.Label>
                                                            <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                        </Form.Group>
                                                    </Row>
                                                </Col>
                                                <Col md={12}>
                                                    <Button variant="outline-secondary w-100 text-capitalize" size="sm"
                                                        onClick={handleSubmit}>update</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third">
                                        <AdminNav />
                                        <Table striped bordered responsive hover className="rounded shadow-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary">S/N</th>
                                                    <th className="text-secondary">ID</th>
                                                    <th className="text-secondary">Username</th>
                                                    <th className="text-secondary">Image</th>
                                                    <th className="text-secondary text-center">Email</th>
                                                    <th className="text-secondary text-center">Actions</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    allUsers?.map((item, i) => (
                                                        <tr key={i} >
                                                            <td className="text-muted">{i + 1}</td>
                                                            <td className="text-muted">{item?._id}</td>
                                                            <td className="text-muted">{item?.username}</td>
                                                            <td className="text-muted">
                                                                <Image src={item?.photo ? item?.photo :
                                                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9DBm4up7xkDQKhfO1kvAAwU8Grk36ZywnngllVU&s"}
                                                                    className="shadow"
                                                                    style={{
                                                                        width: '2rem',
                                                                        height: '2rem',
                                                                        objectFit: 'contain',
                                                                        borderRadius: '50%'
                                                                    }}
                                                                />
                                                            </td>
                                                            <td className="text-muted text-center">{item?.email}</td>
                                                            <td className="d-flex justify-content-evenly">
                                                                <Button className="btn_up"
                                                                    onClick={() => handleDeleteUser(item?._id)}>Delete</Button>
                                                                <Button className="btn_edit"
                                                                    onClick={() => handleShowUser(item?._id)}>Edit</Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </Table>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="four">
                                        <AdminNav />
                                        <Table striped bordered responsive hover className="rounded shadow-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary">S/N</th>
                                                    <th className="text-secondary">First Name</th>
                                                    <th className="text-secondary">Event Name</th>
                                                    <th className="text-secondary">Payment Status</th>
                                                    <th className="text-secondary">Start Date</th>
                                                    <th className="text-secondary">End Date</th>
                                                    <th className="text-secondary">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_paid">half paid</Button>
                                                    </td>
                                                    <td className="text-muted">21/10/2023</td>
                                                    <td className="text-muted">25/10/2023</td>
                                                    <td>
                                                        <Button className="btn_up">Cancel</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_unpaid">unpaid</Button>
                                                    </td>
                                                    <td className="text-muted">21/10/2023</td>
                                                    <td className="text-muted">25/10/2023</td>
                                                    <td>
                                                        <Button className="btn_up">Cancel</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="five">
                                        <AdminNav />
                                        <Table striped bordered responsive hover className="rounded shadow-sm mt-4">
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary">S/N</th>
                                                    <th className="text-secondary">First Name</th>
                                                    <th className="text-secondary">Event Name</th>
                                                    <th className="text-secondary">Payment Status</th>
                                                    <th className="text-secondary text-center">Payment method</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-muted">1</td>
                                                    <td className="text-muted">Kazi Rahat</td>
                                                    <td className="text-muted">Kaptai tour</td>
                                                    <td className="text-muted">
                                                        <Button className="btn_paid">half paid</Button>
                                                    </td>
                                                    <td className="text-muted text-center">
                                                        <Image src="/assets/bkash.png" style={{ width: '3.66rem', height: '3rem', objectFit: 'contain' }} />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="six">
                                        <AdminNav />
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <h5 className="text-muted w-100 border-bottom">Add new events:</h5>
                                            <Row className="mb-3 gy-2">
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridName">
                                                        <Form.Label className="text-muted">Event name</Form.Label>
                                                        <Form.Control type="text" placeholder="event name" className="border-0 shadow-sm rounded text-muted" onChange={(e) => setTitle(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridLocation">
                                                        <Form.Label className="text-muted">Location</Form.Label>
                                                        <Form.Control type="text" placeholder="Event location" className="border-0 shadow-sm rounded text-muted" onChange={(e) => setLocation(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridPrice">
                                                        <Form.Label className="text-muted">Price</Form.Label>
                                                        <Form.Control type="text" placeholder="price" className="border-0 shadow-sm rounded text-muted" onChange={(e) => setPrice(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group as={Col} controlId="formGridStart">
                                                        <Form.Label className="text-muted">Start Date</Form.Label>
                                                        <Form.Control type="date"
                                                            className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setStartDate(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group as={Col} controlId="formGridEnd">
                                                        <Form.Label className="text-muted">End Date</Form.Label>
                                                        <Form.Control type="date" className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setEndDate(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group as={Col} controlId="formGridPhone">
                                                        <Form.Label className="text-muted">Phone number</Form.Label>
                                                        <Form.Control type="text" className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setPhone(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGridAvailable">
                                                        <Form.Label className="text-muted">Availability</Form.Label>
                                                        <Form.Select className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setAvailable(e.target.value)}>
                                                            <option>Choose status</option>
                                                            <option>yes</option>
                                                            <option>no</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="formGridImg">
                                                        <Form.Label className="text-muted">Image</Form.Label>
                                                        <Form.Control type="file"
                                                            multiple className="border-0 shadow-sm rounded text-muted"
                                                            onChange={(e) => setFiles(e.target.files)} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Descriptions</Form.Label>
                                                <Form.Control as="textarea" placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" onChange={(e) => setDesc(e.target.value)} />
                                            </Form.Group>

                                            <Button className="btn_up" type="submit" onClick={handleCreateEvent}>
                                                Add Event
                                            </Button>
                                        </Form>

                                        <h5 className="text-muted w-100 border-bottom mt-3">All events:</h5>
                                        <div className="table-responsive">
                                            <Table striped bordered responsive hover className="rounded shadow-sm mt-2">
                                                <thead>
                                                    <tr>
                                                        <th className="text-secondary">S/N</th>
                                                        <th className="text-secondary">Event Name</th>
                                                        <th className="text-secondary">Image</th>
                                                        <th className="text-secondary">Location</th>
                                                        <th className="text-secondary text-center">Price</th>
                                                        <th className="text-secondary text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allPoost?.map((item, index) => (
                                                            <tr key={index}>
                                                                <td className="text-muted">{index + 1}</td>
                                                                <td className="text-muted">{item?.title}</td>
                                                                <td className="text-muted">
                                                                    <Image src={item?.photos[0] ? item?.photos[0] : "/assets/header_four.jpg"}
                                                                        style={{
                                                                            width: '6rem',
                                                                            height: '2rem',
                                                                            objectFit: 'contain',
                                                                            borderRadius: '20px'
                                                                        }} loading="lazy" />
                                                                </td>
                                                                <td className="text-muted text-center"> {item?.location}</td>
                                                                <td className="text-muted text-center">${item?.price}</td>
                                                                <td className="text-muted text-center">${item?.desc?.slice(0, 10)}...</td>
                                                                <td className="d-flex flex-column gap-1 justify-content-evenly">
                                                                    <Button className="btn_view" onClick={() => handleShow(item?._id)}>view</Button>
                                                                    <Button className="btn_up"
                                                                        onClick={() => handleDeleteEvent(item?._id)}>Delete</Button>
                                                                    {/* <Button className="btn_edit">Edit</Button> */}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </Table>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <>
                        <Modal show={show} onHide={handleClose} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>{singleEvent?.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="border-top py-2 shadow-sm p-3 rounded">
                                    <Row className="mb-3 gy-2">
                                        <Col md={6}>
                                            <Form.Group controlId="formGridLocation">
                                                <Form.Label className="text-muted">Location</Form.Label>
                                                <Form.Control type="text" placeholder="location" className="border-0 shadow-sm rounded text-muted" defaultValue={singleEvent?.location} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="formGridPrice">
                                                <Form.Label className="text-muted">Price</Form.Label>
                                                <Form.Control type="text" placeholder="price" className="border-0 shadow-sm rounded text-muted" defaultValue={singleEvent?.price} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group as={Col} controlId="formGridStart">
                                                <Form.Label className="text-muted">Start Date</Form.Label>
                                                <Form.Control type="date"
                                                    className="border-0 shadow-sm rounded text-muted"
                                                    defaultValue={singleEvent?.startDate} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group as={Col} controlId="formGridEnd">
                                                <Form.Label className="text-muted">End Date</Form.Label>
                                                <Form.Control type="text" className="border-0 shadow-sm rounded text-muted"
                                                    defaultValue={singleEvent?.endDate} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label className="text-muted">Phone number</Form.Label>
                                                <Form.Control type="text" className="border-0 shadow-sm rounded text-muted"
                                                    defaultValue={singleEvent?.phone} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="formGridAvailable">
                                                <Form.Label className="text-muted">Availability</Form.Label>
                                                <Form.Control type="text" className="border-0 shadow-sm rounded text-muted"
                                                    defaultValue={singleEvent?.available} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 d-flex justify-content-between align-items-center w-100" controlId="formGridImg">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src={singleEvent?.photos ? singleEvent?.photos[0] : "/assets/header_three.jpg"}
                                                    loading="lazy" style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                                <Image src={singleEvent?.photos ? singleEvent?.photos[1] : "/assets/header_three.jpg"}
                                                    loading="lazy" style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                                <Image src={singleEvent?.photos ? singleEvent?.photos[2] : "/assets/header_three.jpg"}
                                                    loading="lazy" style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                                <Image src={singleEvent?.photos ? singleEvent?.photos[3] : "/assets/header_three.jpg"}
                                                    loading="lazy" style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label className="text-muted">Descriptions</Form.Label>
                                        <Form.Control as="textarea" placeholder="1234 Main St" rows="5" defaultValue={singleEvent?.desc} className="border-0 shadow-sm rounded text-muted" />
                                    </Form.Group>

                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>

                    <>
                        <Modal show={showUser} onHide={handleCloseUser} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>Single User View</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="border-top py-2 shadow-sm p-3 rounded">
                                    <Row className="mb-3 gy-3">
                                        <Col md={12}>
                                            <Form.Group controlId="formGridrImage" className="d-flex flex-column justify-content-center align-items-center w-100">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src={singleUser?.photo ? singleUser?.photo : "/assets/user-1.png"} alt={singleUser?.username}
                                                    style={{ width: "4rem", height: "4rem", objectFit: 'contain' }} loading="lazy"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="formGridEmail">
                                                <Form.Label className="text-muted">Username</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" defaultValue={singleUser?.username} className="border-0 shadow-sm rounded text-muted"
                                                    onChange={(e) => setUserName(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="formGridEmail">
                                                <Form.Label className="text-muted">Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email"
                                                    defaultValue={singleUser?.email} className="border-0 shadow-sm rounded text-muted"
                                                    onChange={(e) => setUser_Email(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="formGridPassword">
                                                <Form.Label className="text-muted">Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password"
                                                    defaultValue={singleUser?.password}
                                                    className="border-0 shadow-sm rounded text-muted"
                                                    onChange={(e) => setUser_Password(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Form.Control type="file" className="border-0 shadow-sm rounded text-muted"
                                                    onChange={(e) => setUser_Photo(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                        </Col>
                                        <Col md={12}>
                                            <Button variant="outline-secondary w-100 text-capitalize" size="sm"
                                                onClick={handleSubmit}>update</Button>
                                        </Col>
                                    </Row>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseUser}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>

                    <ToastContainer />
                </div>
            </Container>
        </div>
    )
}

export default AdminDashboard  