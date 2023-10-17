"use client"
import { Button, Container, Image } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import './UserProfile.css';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useUpdateUserMutation, useUserDataByEmailQuery } from "@/redux/apiSlice";
import { useState } from "react";
import Swal from "sweetalert2";

const UserProfile = () => {
    const userEmail = typeof window !== "undefined" ? window.localStorage.getItem('user') || '' : false
    const { data: userData } = useUserDataByEmailQuery(userEmail)
    // console.log(userData)


    // FEEDBACK ACCEPTED
    const handleFeedback = (event) => {
        event.preventDefault();
        toast('Your feedback are recorded, thank you!')
    }

    // UPDATE USER
    const [UpdateUser] = useUpdateUserMutation()
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

    // LOGOUT
    const router = useRouter()
    const handleLogout = (event) => {
        event.preventDefault();
        toast('Logout successfully!')
        router.push('/')
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
                    <h3><span style={{ borderBottom: '2px solid #333' }}>{userData?.username}</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>your profile</span></h3>
                </div>

                <div className="shadow p-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="tabone">Your informations</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="">Update informations</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className="">Profile settings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four" className="">Booking history</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five" className="">Payment methods</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six" className="">Feedback</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven" className="" onClick={handleLogout}>Logout</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Form.Group className="mb-4 d-flex justify-content-center align-items-center flex-column">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src={userData?.photo ? userData?.photo : "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png"}
                                                    className="shadow"
                                                    style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>

                                            <Row className="mb-3">
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

                                    <Tab.Pane eventKey="four">
                                        <Table striped bordered responsive hover className="rounded shadow-sm">
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
                                        <Table striped bordered responsive hover className="rounded shadow-sm">
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
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="test@gmail.com" defaultValue="test@gmail.com" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridName">
                                                    <Form.Label className="text-muted">Username</Form.Label>
                                                    <Form.Control type="text" placeholder="username" defaultValue="rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridName">
                                                    <Form.Label className="text-muted">Username</Form.Label>
                                                    <Form.Control type="text" placeholder="username" defaultValue="rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridName">
                                                    <Form.Label className="text-muted">Rating</Form.Label>
                                                    <Form.Control type="text" placeholder="5" defaultValue="4" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Message</Form.Label>
                                                <Form.Control as="textarea" placeholder="your messages" defaultValue="Last event at kaptai was so good and hospitality at hotels are too good" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <Button className="btn_up" type="submit" onClick={handleFeedback}>
                                                    Submit
                                                </Button>
                                                <Button className="btn_up" type="submit">
                                                    Rest form
                                                </Button>
                                            </div>
                                        </Form>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <ToastContainer />
                </div>
            </Container>
        </div>
    )
}

export default UserProfile