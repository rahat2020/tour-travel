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

const UserProfile = () => {
    const router = useRouter()
    const handleLogout = (event) => {
        event.preventDefault();
        toast('Logout successfully!')
        router.push('/')
    }
    const handleFeedback = (event) => {
        event.preventDefault();
        toast('Your feedback are recorded, thank you!')
    }
    return (
        <div className="py-5" data-aos="fade-up">
            <Container>
                <div className="d-flex text-start py-3">
                    <h3><span style={{ borderBottom: '2px solid #333' }}>Rahat</span> <span style={{ color: '#FF5324', borderBottom: '2px solid #FF5324' }}>your profile</span></h3>
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
                                                <Image src="/assets/user-1.png"
                                                    className="shadow"
                                                    style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="text-muted">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" defaultValue="gahgauhjag" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Form.Group className="mb-4 d-flex justify-content-center align-items-center flex-column">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src="/assets/user-1.png"
                                                    className="shadow"
                                                    style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="text-muted">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" defaultValue="gahgauhjag" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Form.Control type="file" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                            <Button className="btn_up" type="submit">
                                                Update
                                            </Button>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third">
                                        <Form className="border-top py-2 shadow-sm p-3 rounded">
                                            <Form.Group className="mb-4 d-flex justify-content-center align-items-center flex-column">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Image src="/assets/user-1.png"
                                                    className="shadow"
                                                    style={{ width: '6rem', height: '6rem', objectFit: 'contain', }} />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label className="text-muted">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" defaultValue="kazi rahat" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label className="text-muted">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" defaultValue="gahgauhjag" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" defaultValue="dhaka, bangladesh" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label className="text-muted">Image</Form.Label>
                                                <Form.Control type="file" className="border-0 shadow-sm rounded text-muted" />
                                            </Form.Group>

                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label className="text-muted">City</Form.Label>
                                                    <Form.Control defaultValue="dhaka" className="border-0 shadow-sm rounded text-muted" />
                                                </Form.Group>
                                            </Row>
                                            <Button className="btn_up" type="submit">
                                                Update
                                            </Button>
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